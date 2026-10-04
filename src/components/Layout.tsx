import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header name="Aizere Bakytbek" />

      <Outlet />

      <Footer year={2026} />
    </>
  )
}

export default Layout