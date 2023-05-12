// web3auth node
import { Web3Auth } from "@web3auth/node-sdk";
import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";

const WEB3AUTH_CLIENT_ID =
  "BCUDbtKqHKHHp_juQ4fd-vekT41t2MBTANNjxcysVGfeJoBzW2RVaTNKqUaxMjF6t-daed_3NRVDgNqWhnw4dHk";
const CHAIN_CONFIG = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x61",
  rpcTarget: "https://rpc.ankr.com/bsc_testnet_chapel",
  displayName: "Binance SmartChain Testnet",
  blockExplorer: "https://testnet.bscscan.com",
  ticker: "BNB",
  tickerName: "BNB",
};

const web3auth = new Web3Auth({
  clientId: WEB3AUTH_CLIENT_ID,
  chainConfig: CHAIN_CONFIG,
  web3AuthNetwork: "testnet",
  // usePnPKey: "false", // By default, this sdk returns CoreKitKey
});

web3auth.init();

console.log(web3auth);
