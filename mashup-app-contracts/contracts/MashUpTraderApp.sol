pragma solidity ^0.5.4;

import "./MashUpToken.sol";


contract MashUpTraderApp {
    // The mashup token contract
    MashUpToken public mashupToken;
    // Only trading one token for this dApp, this is the ID for the token
    uint256 public mashupTokenId;
    // Only one token traded only requires one price to store
    uint256 public tokenPrice;

    event Purchased(address newOwner, uint256 weiAmount);
    event PriceChanged(
        address changer,
        uint256 oldPriceInWei,
        uint256 newPriceInWei
    );
    event PaymentWithdrawn(address withdrawer);

    /**
     * @notice Create a new MashUp Token trading app
     *
     * @param deployedAddress address Deployed address of the MashUpToken contract
     * @param tokenId uint256 TokenID to trade with this app
     */
    constructor(address deployedAddress, uint256 tokenId) public {
        mashupToken = MashUpToken(deployedAddress);
        mashupTokenId = tokenId;
    }

    /**
     * @notice Provides a way to become a franchisor of a MashUp token for a fee
     * Emits a Purchased event
     */
    function purchase() public payable {
        require(
            tokenPrice > 0,
            "Token must have non-zero price before it can be franchised"
        );
        require(
            msg.value == tokenPrice,
            "Must provide eth to franchise the token"
        );

        address newOwner = msg.sender;
        address owner = mashupToken.ownerOf(mashupTokenId);
        // Do the token transfer
        mashupToken.safeTransferFrom.value(msg.value)(
            owner,
            newOwner,
            mashupTokenId,
            ""
        );
        // set the price to zero to prevent purchase
        setTokenPrice(0);

        emit Purchased(newOwner, tokenPrice);
    }

    /**
     * @notice Sets the token price given a tokenId
     * Emits a PriceChanged event
     * @param newPrice uint256 The new token price in Wei
     */
    function setTokenPrice(uint256 newPrice) public {
        address currentOwner = mashupToken.ownerOf(mashupTokenId);
        // TODO: Or allow minter to do this
        require(
            msg.sender == currentOwner,
            "Only the owner can change the token price"
        );
        uint256 oldPrice = tokenPrice;
        tokenPrice = newPrice;

        emit PriceChanged(msg.sender, oldPrice, newPrice);
    }

    /**
     * @notice Gets current token owner
     * @return address Address of current owner
     */
    function getOwner() public view returns (address) {
        return mashupToken.ownerOf(mashupTokenId);
    }

    /**
     * @notice Gets current payment balance of your token payments
     * @return uint256 Payment balance in Wei
     */
    function getBalance() public view returns (uint256) {
        return mashupToken.paymentBalanceOf(msg.sender, mashupTokenId);
    }

    /**
     * @notice Use to widthraws eth from the payments you recieved during franchising
     * Emits a PaymentWithdrawn event
     * @dev Calls the withdrawPayment function on the MashUpToken
     */
    function withdraw() public {
        mashupToken.withdrawPayment(msg.sender, mashupTokenId);

        emit PaymentWithdrawn(msg.sender);
    }

    /**
     * @notice  Gets the metadataURI for the token
     * @return string token URI
     */
    function getTokenURI() public view returns (string memory) {
        return mashupToken.tokenURI(mashupTokenId);
    }

    /**
     * @notice Returns true/false if the address provided is for a franchisor
     * @param possibleFranchisor address The address of the account
     * @return bool
     */
    function isTokenFranchisor(address possibleFranchisor)
        public
        view
        returns (bool)
    {
        return
            mashupToken.isTokenFranchisor(possibleFranchisor, mashupTokenId);
    }
}
