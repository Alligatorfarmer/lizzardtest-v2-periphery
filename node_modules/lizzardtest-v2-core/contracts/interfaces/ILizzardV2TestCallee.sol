pragma solidity >=0.5.0;

interface ILizzardV2TestCallee {
    function LizzardV2TestCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
