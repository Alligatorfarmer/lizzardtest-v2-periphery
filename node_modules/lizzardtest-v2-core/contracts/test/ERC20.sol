pragma solidity =0.5.16;

import '../LizzardV2TestERC20.sol';

contract ERC20 is LizzardV2TestERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
