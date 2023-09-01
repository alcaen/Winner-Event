// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface IWinnerContract {
    event Winner();

    function attempt() external;
}

contract Contract {
    IWinnerContract public winnerContract;

    constructor(address _winnerContractAddress) {
        winnerContract = IWinnerContract(_winnerContractAddress);
    }

    function setWinner() external {
        winnerContract.attempt();
    }
}
