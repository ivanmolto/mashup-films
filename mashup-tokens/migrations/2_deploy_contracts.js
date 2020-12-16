const SharedRoyaltyToken = artifacts.require('SharedRoyaltyToken');

module.exports = function(deployer) {
  deployer.deploy(SharedRoyaltyToken, 5);
};
