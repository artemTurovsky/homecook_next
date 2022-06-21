import React, { FC, useMemo } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, LedgerWalletAdapter, SolletWalletAdapter, SolletExtensionWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

require('@solana/wallet-adapter-react-ui/styles.css');

interface IProps {
  title?: string
  children: JSX.Element
}

const Web3Wrapper: FC<IProps> = ({ children }) => {
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  )

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              {children}
            </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default Web3Wrapper 

// [
//   {
//       "transactionSignature": "r21n69KXi8DQovMwrHpujjyo1QWDyZ6cSkW9AF5T8NnNSKUNEvBibKKaNj1ujhFxSzqA55JvW1uuwreG6cq7ocD",
//       "from": "8fdMXQxycq6pN4wei2iAoBcwM64RKkpHnLpyveS2Y3FG",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.099995
//   },
//   {
//       "transactionSignature": "3dPoXsjhU2PRTmM3zgGaTCCTf9jCRVg6b37YYcwrAkXWrqaLXiLPf7PEBp6QAnRKT1wPX7h6kE9Y2VzEARxEag4E",
//       "from": "H9hoNX4PvqkwhiEPDrnZbehm5gSzMwLRcGSfuZ7cZnW7",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 2.199995
//   },
//   {
//       "transactionSignature": "55wq7KykG73KsbEzig2fZNbtonHPwzKiJnKhrx4eyoxvn3EXi2WEBgZE2PeKGqeoXQWoBZv9NHRqv9FVXcb4QRNa",
//       "from": "At2rFf7JfDMtwevgLbYcqtCxz2QQcxmCjGf29rt5ucHS",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.099995
//   },
//   {
//       "transactionSignature": "2bK1z9HErq6uXmCaEpocBcHgQP3yRhcFJkjxBgtED9CnqV3TiaN4ZRTRp53xNrMA7qfaV5jDa967VAx9eXn3zfj8",
//       "from": "2uWPKnUH5dMrZGkChCgNVtiePUGG1RxDS5nNHS1indqE",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.109985
//   },
//   {
//       "transactionSignature": "5ErCG1HiMRWbHyQrDyPrwshXVCDRkgVXx16pg5c6jq8PsSHyqitsJbiew7k2hEee2cHtKtMCmwoh1qod5nmUmbkn",
//       "from": "GNUrNHGpYNNiYm2EgKSsM4wM1NNUdauidn2ZA44YoDwi",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.119985
//   },
//   {
//       "transactionSignature": "4bCvvX7jgCqxkMNCvWfJKZV6oZrwnGD7LHLmSi8vf5vWW2t9dd7quLWUDKZVTwWazd3WGT4u52Dh9SrLEJLtfcds",
//       "from": "92MMs7fz23PYGyu9Wxwx8vmdru6zH9napzs51bLEpMnN",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.10999
//   },
//   {
//       "transactionSignature": "2SVM956UnkP3KS2hzuTw4CkwijajpRuBhyYnZFM2PMFVs7YBHJmJFkVNRCYfdSA5FMzCj6e6TZjNSEr43x8thdwf",
//       "from": "CzhP7ZrYv96u2CmSEaUpbwZqZxwdAV7cYwA5CRYyoHur",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.099995
//   },
//   {
//       "transactionSignature": "33y46HsxrcvKV5Ct7J8tSWe3yJcqJXsEDxvJzTFLmwSdZQAktrNFaPV9Yjc58h2hgi3LSspXnJ8JQ4ypHN9ZMt3B",
//       "from": "AndmwqcWPJK1sf5eX8REMr5KFFGXDz4v136siPCADrJj",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.08295824
//   },
//   {
//       "transactionSignature": "4j5SZKUPN4HSwdT8PbFXgfPV65cH6gXj2vXFhJFwkrz4gWCtNq7ZEVsfGh382KPHMA6Si2SQmdy7eo9fc9xZXQKZ",
//       "from": "8k4kJyWGH6BWC81ekTFMhcjmGrZhw5c2VLjsufYvVKBX",
//       "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//       "amountSOL": 1.099995
//   }
// ]
// {
//   "transactionSignature": "5668THMbgoTCMmAWL2YPJouu2jyySCrwYuVRYHjBwnnShzUfmTFB42CzQ8guQT6jvkuC3ykpzVyGaWk1Ngf5GqCv",
//   "from": "AndmwqcWPJK1sf5eX8REMr5KFFGXDz4v136siPCADrJj",
//   "to": "7aPfdV9cLPXu6wRXkS5ohTdPsE7iV9SRr4JfyKCz7rDL",
//   "amountSOL": 1.08295824
// }
