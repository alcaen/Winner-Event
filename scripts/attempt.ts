import { ethers } from 'hardhat';

// Contract that has the method setWinner
const CONTRACT_ADDR = '0xeED0c56597a2c243B0814D84550EaAb09fb86e2E';

async function main() {
  const contract = await ethers.getContractAt('Contract', CONTRACT_ADDR);

  const tx = await contract.setWinner();

  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
