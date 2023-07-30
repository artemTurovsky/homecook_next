'use client'
import NavBar from './_components/navBar/NavBar'
import Layout  from '../components/rootLayout/RootLayout'
import Web3Wrapper from '../components/Web3Wrapper'
import '../../styles/globals.css'
import { Provider } from 'react-redux'
import store from './_store/store'
import { FONTS_CLASS_NAME } from '../constants/fonts'

interface IProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="en" className={FONTS_CLASS_NAME}>
      <body>
      <Provider store={store}>
        <Web3Wrapper>
          <Layout>
            <NavBar/>

            {children}
          </Layout>
        </Web3Wrapper>
      </Provider>
      </body>
    </html>
  )
}

export default RootLayout
