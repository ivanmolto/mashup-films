const MashUpTraderApp = artifacts.require('MashUpTraderApp');
const MashUpToken = artifacts.require('MashUpToken');

contract('MashUpTraderApp', accounts => {
  let tokenContract;
  let app;
  const tokenId = web3.utils.toBN(1);
  const mockURI = 'https://ipfs.infura.io/ipfs/QmSomeHash';
  const firstOwner = accounts[0];
  const secondOwner = accounts[1];
  const thirdOwner = accounts[2];
  const notAnOwner = accounts[9];
  const oneEthInWei = web3.utils.toWei('1', 'ether');
  const twoEthInWei = web3.utils.toWei('2', 'ether');

  beforeEach(async () => {
    tokenContract = await MashUpToken.new('MashUp', 'MASHUP', 5);
    app = await MashUpTraderApp.new(tokenContract.address, tokenId);
    await tokenContract.mintWithTokenURI(firstOwner, tokenId, mockURI);
    await tokenContract.setTraderApp(app.address);
  });

  it('has a price of zero by default', async () => {
    expect((await app.tokenPrice()).toString()).toEqual('0');
  });

  it('cannot be purchased with a zero price', async () => {
    await app.setTokenPrice(0);

    let errorMsg = '';

    try {
      await app.purchase({
        value: oneEthInWei,
        from: secondOwner
      });
    } catch (e) {
      errorMsg = e.toString();
    }

    expect(errorMsg).toMatch(/must have non-zero price/i);
  });

  it('knows the first owner is a franchisor', async () => {
    expect(await app.isTokenFranchisor(firstOwner));
  });

  describe('setting the price', async () => {
    let priceChangeResult;

    beforeEach(async () => {
      priceChangeResult = await app.setTokenPrice(twoEthInWei, {
        from: firstOwner
      });
    });

    it('allows the owner to set the price', async () => {
      expect((await app.tokenPrice()).toString()).toEqual(twoEthInWei);
    });

    it('emits a PriceChange event', async () => {
      expect(priceChangeResult.logs[0]['event']).toEqual('PriceChanged');
    });

    it('does not allow non-owner to change the price', async () => {
      let errorMsg = '';

      try {
        await app.setTokenPrice(oneEthInWei, { from: notAnOwner });
      } catch (e) {
        errorMsg = e.toString();
      }

      expect(errorMsg).toMatch(/only the owner/i);
    });
  });

  describe('purchasing a token for the asking price', async () => {
    let purchaseResult;

    beforeEach(async () => {
      await app.setTokenPrice(oneEthInWei, { from: firstOwner });
      purchaseResult = await app.purchase({
        value: oneEthInWei,
        from: secondOwner
      });
    });

    it('is owned by the second owner', async () => {
      expect(await app.getOwner()).toEqual(secondOwner);
    });

    it('the payment is registered with the token', async () => {
      const balance = await app.getBalance({ from: firstOwner });
      expect(parseInt(balance)).toBeGreaterThan(0);
    });

    it('emits a Purchase event', async () => {
      expect(purchaseResult.logs[1]['event']).toEqual('Purchased');
    });

    it('knows the second owner is also a franchisor', async () => {
      expect(await app.isTokenFranchisor(secondOwner));
    });

    it('allows purchase by a third owner', async () => {
      await app.setTokenPrice(oneEthInWei, { from: secondOwner });
      await app.purchase({
        value: oneEthInWei,
        from: thirdOwner
      });
      expect(await app.getOwner()).toEqual(thirdOwner);
    });

    describe('owner withdrawing eth after purchase', async () => {
      let withdrawResult;

      beforeEach(async () => {
        withdrawResult = await app.withdraw({ from: firstOwner });
      });

      it('shows zero balance for firstOwner', async () => {
        const balance = await app.getBalance({ from: firstOwner });
        expect(parseInt(balance)).toEqual(0);
      });

      it('emits a PaymentWithdrawn event', async () => {
        expect(withdrawResult.logs[0]['event']).toEqual('PaymentWithdrawn');
      });
    });
  });

  it('does not allow purchase for no eth', async () => {
    let errorMsg = '';

    try {
      await app.setTokenPrice(oneEthInWei);
      await app.purchase({
        value: 0,
        from: secondOwner
      });
    } catch (e) {
      errorMsg = e.toString();
    }

    expect(errorMsg).toMatch(/must provide eth/i);
  });

  it('has an accessor for the token URI', async () => {
    expect(await app.getTokenURI()).toEqual(mockURI);
  });
});
