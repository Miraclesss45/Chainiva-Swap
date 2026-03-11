# Chainiva Swap - Project Structure

## 📁 Directory Overview

```
Chainiva-Swap/
├── public/                 # Static assets served publicly
├── src/
│   ├── components/         # Reusable React components
│   ├── abis/              # Smart contract ABI files (Ethereum ABIs for contract interaction)
│   ├── assets/            # Images, icons, and other media assets
│   ├── imgs/              # Image resources
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application-level styles
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── vite.config.js         # Vite bundler configuration
├── eslint.config.js       # ESLint code quality rules
├── .env                   # Environment variables (API keys, RPC endpoints)
└── .gitignore            # Git ignore rules
```

## 🧩 Core Components

### `src/components/`

- **WalletConnect.jsx** (4.1 KB)
  - Handles Ethereum wallet connection (MetaMask, WalletConnect, etc.)
  - Manages user authentication and account selection
  - Built with wagmi and ConnectKit libraries

- **Balance.jsx** (2.3 KB)
  - Displays user's token balances
  - Fetches and updates balance information from blockchain
  - Shows current holdings of supported tokens

- **Swap.jsx** (69.2 KB) - Core Feature
  - Main swap/trading component
  - Handles token pair selection and amounts
  - Integrates with Base DEX protocols
  - Manages swap execution and transaction confirmation
  - Price quotes and slippage calculations
  - Most complex component - contains primary DEX logic

- **TokenInfo.jsx** (16.7 KB)
  - Displays detailed token information
  - Shows token metadata (contract address, decimals, etc.)
  - Fetches token prices and market data
  - Displays token supply and holder information

- **ErrorBoundary.jsx** (3.2 KB)
  - React error boundary for graceful error handling
  - Catches and displays errors in the component tree
  - Provides fallback UI when errors occur
  - Prevents app crashes from propagating

### `src/App.jsx` (33.4 KB)
- Main application container component
- Routes between different features (Swap, TokenInfo, Balance)
- Manages global state and context
- Handles wallet connection state

## 📦 Key Dependencies

### Frontend Framework & Build Tools
- **react** (18.2.0) - UI library
- **react-dom** (18.2.0) - DOM rendering
- **vite** (7.2.2) - Fast build tool and dev server
- **@vitejs/plugin-react** (5.1.0) - React plugin for Vite

### Blockchain & Web3
- **ethers** (6.15.0) - Ethereum JavaScript library
- **wagmi** (2.19.4) - React hooks for Ethereum
- **@wagmi/core** (2.22.1) - Core wagmi library
- **connectkit** (1.9.1) - Wallet connection UI toolkit
- **axios** (1.13.2) - HTTP client for API calls

### Styling & UI
- **tailwindcss** (4.1.17) - Utility-first CSS framework
- **@tailwindcss/vite** (4.1.17) - Tailwind CSS Vite plugin
- **react-icons** (5.5.0) - Icon library

### State Management & Data
- **@tanstack/react-query** (5.90.10) - Server state management

### Development & Linting
- **eslint** (9.39.1) - Code quality tool
- **@eslint/js** (9.39.1) - ESLint JavaScript rules
- **@types/react** (19.2.2) - React TypeScript definitions
- **globals** (16.5.0) - Global variable definitions

## 🔄 Component Hierarchy

```
App.jsx
├── WalletConnect (Wallet Integration)
├── Balance (Display Holdings)
├── Swap (Token Trading)
│   └── Price calculations
│   └── Transaction management
│   └── Slippage handling
└── TokenInfo (Token Details)
    └── Market data
    └── Token metadata
    └── Holder information
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## ⚙️ Configuration Files

- **vite.config.js** - Build and dev server configuration
- **eslint.config.js** - Code quality and style rules
- **.env** - Environment variables (RPC endpoints, API keys)
- **tailwind.config.js** - Tailwind CSS customization (if exists)

## 🔗 Smart Contract Interaction

The `src/abis/` directory contains Ethereum ABI files necessary for:
- Token contract interaction
- DEX router contracts
- Liquidity pool contracts
- Balance and approval queries

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **App.css** for component-specific styles
- **index.css** for global styles
- Responsive design for desktop and mobile

## 📡 API & External Services

- **Ethers.js** for blockchain RPC calls
- **Axios** for external API requests (token data, prices)
- **Wagmi** hooks for wallet state management
- **React Query** for server state and data caching

## 🌐 Environment Variables (.env)

Expected variables:
- RPC endpoints for Base network
- API keys for data providers
- Contract addresses for tokens and DEX routers
- Wallet connection parameters