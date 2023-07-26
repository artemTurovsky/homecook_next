import { Provider } from 'react-redux'
import NavBar from './_components/navBar/NavBar'
import Layout  from '../components/rootLayout/RootLayout'
import Web3Wrapper from '../components/Web3Wrapper'
import store from './_store/store'
import '../../styles/globals.css'

interface IProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="en">
      <body>
      {/* <Provider store={store}> */}
        <Web3Wrapper>
          <Layout>
            <NavBar/>

            {children}
          </Layout>
        </Web3Wrapper>
      {/* </Provider> */}
      </body>
    </html>
  )
}

export default RootLayout
