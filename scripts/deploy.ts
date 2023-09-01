import { ethers } from 'hardhat';

async function main() {
  // Contract with the event Winner
  const _winnerContractAddress = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502';

  const contract = await ethers.deployContract('Contract', [
    _winnerContractAddress,
  ]);

  await contract.waitForDeployment();

  console.log(`Contract was deployed to: ${contract.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
