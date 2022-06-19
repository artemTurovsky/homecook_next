import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import NavBar from '../components/navBar/NavBar'
import RootLayout from '../components/rootLayout/RootLayout'
import Web3Wrapper from '../components/Web3Wrapper'
import store from '../store/store'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Web3Wrapper>
        <RootLayout>
          <NavBar/>

          <Component {...pageProps} />
        </RootLayout>
      </Web3Wrapper>
    </Provider>
  )
}

export default MyApp
