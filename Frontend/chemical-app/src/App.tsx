
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'


function App() {


  return (
    <>
     <Routes>
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact' element = {<ContactUs/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
