pragma solidity ^0.5.4;

import "./ERC721/ERC721Mintable.sol";
import "./BookendSharedRoyaltyToken.sol";


contract SharedRoyaltyToken is BookendSharedRoyaltyToken, ERC721Mintable {
    constructor(uint256 franchisorPercentage)
        public
        BookendSharedRoyaltyToken(franchisorPercentage)
    {} // solhint-disable-line no-empty-blocks
}
