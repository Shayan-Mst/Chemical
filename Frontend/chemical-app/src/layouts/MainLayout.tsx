
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Nav/>

      {/* Page content goes here */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout