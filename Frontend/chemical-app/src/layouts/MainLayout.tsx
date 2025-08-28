
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Nav/>
      <SideBar/>

      {/* Page content goes here */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout