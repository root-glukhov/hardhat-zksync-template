import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync-solc";
import dotenv from "dotenv";

dotenv.config();

const ethereum = process.env.NODE_ENV == "test"
  ? {
      chainId: 5,
      url: process.env.ETH_GOERLI_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      ledgerAccounts:
        process.env.LEDGER_ACCOUNT !== undefined
          ? [process.env.LEDGER_ACCOUNT]
          : [],
    }
  : {
      chainId: 1,
      url: process.env.ETH_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      ledgerAccounts:
        process.env.LEDGER_ACCOUNT !== undefined
          ? [process.env.LEDGER_ACCOUNT]
          : [],
    };

const arbitrum = process.env.NODE_ENV == "test"
  ? {
      chainId: 421613,
      url: process.env.ARBITRUM_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      ledgerAccounts:
        process.env.LEDGER_ACCOUNT !== undefined
          ? [process.env.LEDGER_ACCOUNT]
          : [],
    }
  : {
      chainId: 42161,
      url: process.env.ARBITRUM_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      ledgerAccounts:
        process.env.LEDGER_ACCOUNT !== undefined
          ? [process.env.LEDGER_ACCOUNT]
          : [],
    };

const zkSync = process.env.NODE_ENV == "test"
  ? {
      chainId: 280,
      url: process.env.ZKSYNC_TESTNET_URL || "",
      ethNetwork: process.env.ETH_GOERLI_TESTNET_URL || "",
      zksync: true,
      verifyURL:
        "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
      ledgerAccounts:
        process.env.LEDGER_ACCOUNT !== undefined
          ? [process.env.LEDGER_ACCOUNT]
          : [],
    }
  : {
      chainId: 324,
      url: process.env.ZKSYNC_MAINNET_URL || "",
      ethNetwork: process.env.ETH_MAINNET_URL || "",
      zksync: true,
      verifyURL:
        "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
      ledgerAccounts:
        process.env.LEDGER_ACCOUNT !== undefined
          ? [process.env.LEDGER_ACCOUNT]
          : [],
    };

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  paths: {
    artifacts: './compiles/artifacts',
    cache: './compiles/cache',
  },
  zksolc: {
    
  },
  networks: { ethereum, arbitrum, zkSync }
};

export default config;
