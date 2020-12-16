const SharedRoyaltyToken = artifacts.require('SharedRoyaltyToken');
const sharedRoyaltyBehavior = require('./sharedRoyaltyToken.behavior');

contract('AbstractSharedRoyaltyToken', accounts => {
  /**
   * Mints a MashUp token
   *
   * @returns {Promise<{SharedRoyaltyToken}>} - A SharedRoyalty Token instance
   */
  const mintToken = async () => {
    const id = web3.utils.asciiToHex('mashup token id');
    const instance = await SharedRoyaltyToken.new(5);

    await instance.mint(accounts[0], id);

    return { token: instance, tokenId: id };
  };

  sharedRoyaltyBehavior(mintToken, accounts);
});
