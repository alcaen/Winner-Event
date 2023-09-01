import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env
        .ALCHEMY_API_KEY!}`,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
