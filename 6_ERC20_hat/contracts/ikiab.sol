// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/5.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ikiab is ERC20 {
    constructor() ERC20("ikiab", "IKIAB") {
        _mint(msg.sender, 1000 * 10 ** 18);
    }
}