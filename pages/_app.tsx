import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'

function App({ Component, pageProps }) {
  const title = 'Cooperaty'
  const description =
    'A decentralized trading academy in symbiosis with a hedge fund managed by the League of Traders.'
  const keywords =
    'Cooperaty, Symbiosis, Mango Markets, Serum, SRM, Serum DEX, DEFI, Decentralized Finance, Decentralised Finance, Crypto, ERC20, Ethereum, Decentralize, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SerumBTC, SerumUSD, SRM Tokens, SPL Tokens'

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CooperatyDAO" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/twitter-image.png"
        />

        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <ThemeProvider defaultTheme="Cooperaty">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
