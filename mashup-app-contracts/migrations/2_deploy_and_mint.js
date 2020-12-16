const MashUpToken = artifacts.require('MashUpToken');
const MashUpTraderApp = artifacts.require('MashUpTraderApp');

const ipfsClient = require('ipfs-http-client');

const ipfsConfig = {
  host: 'ipfs.infura.io',
  port: 5001,
  options: {
    protocol: 'https'
  }
};

module.exports = async (deployer, network, accounts) => {

  // The MashUp Token ID
  const tokenId = web3.utils.toBN(1);

  // The mashup platform BNB wallet address
  const theMashUpPlatform = process.env.MASHUP_PLATFORM_ADDRESS || accounts[0];

  // The mashup creator BNB wallet address
  const theMashUpCreator = process.env.CREATOR_ADDRESS || accounts[1];

  // Deploy our MashUpToken
  await deployer.deploy(MashUpToken, 'MashUp', 'MASHUP', 10);
  const token = await MashUpToken.deployed();

  // Deploy the trader app and pass in the token contract
  await deployer.deploy(MashUpTraderApp, token.address, tokenId);
  const app = await MashUpTraderApp.deployed();

  // Set the token to have the app as the only trader
  await token.setTraderApp(app.address);

  // The upload the json metadata defined by ERC721
  const path = './token_1_metadata.json';
  const ipfs = ipfsClient(ipfsConfig.host, ipfsConfig.port, ipfsConfig.options);
  const ipfsResult = await ipfs.addFromFs(path, { pin: true });

  // See 'metadata section' https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
  const metaDataURI = `https://ipfs.infura.io/ipfs/${ipfsResult[0].hash}`;

  // Do the minting with our metadata URI
  await token.mintWithTokenURI(theMashUpPlatform, tokenId, metaDataURI);

  // Add Item Creator as franchisor
  await token.addFranchisor(theMashUpCreator, tokenId);

  // Set this token up to be traded by the app contract
  await token.setTraderApp(app.address);
};
