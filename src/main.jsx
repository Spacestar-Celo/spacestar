import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

//wallet import
import {
  getDefaultWallets,
  connectorsForWallets,
  RainbowKitProvider,
  midnightTheme,
  lightTheme
} from "@rainbow-me/rainbowkit";

// Import CELO chain information
import celoGroups from "@celo/rainbowkit-celo/lists"
import { Celo, Alfajores } from "@celo/rainbowkit-celo/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

//style import
import "@rainbow-me/rainbowkit/styles.css";

//wagmi
const { chains, publicClient, } = configureChains(
  [Celo, Alfajores],
  [
    // jsonRpcProvider({
    //   rpc: (Celo, celoAlfajores) => ({
    //     http: import.meta.env.VITE_CELO_RPC_ENDPOINT,
    //   }),
    // }),

    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),

  ],
)

const connectors = celoGroups(
  { chains, 
  appName: "Spacetar | A Community Empowering Mental Well-Being",
  projectId: import.meta.env.VITE_SPACESTAR_PROJECT_ID,
  })


const wagmiConfig = createConfig({
  publicClient,
  autoConnect: true,
  connectors,
  // provider,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
      theme={lightTheme({
        accentColor: '#1570ef',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
        body: 'Arial'
      },
      )}
      chains={chains}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </RainbowKitProvider>
      </WagmiConfig>

  </React.StrictMode>,
);
