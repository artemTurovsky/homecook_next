import { ClearWallets } from "./components/ClearWallets"

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <ClearWallets/>
      {children}
    </div>
  )
}

export default Layout
