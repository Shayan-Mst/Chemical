import { Link } from "react-router-dom"
import Button from "./Button"
import Search from "./Search"
import {useState} from "react"


const Nav = () => {
    const [query, setQuery] = useState("");
  return (
     <nav className="text-[var(--text-secondary)] w-full px-6 py-4 sticky top-0  flex items-center justify-between">
      {/* Logo */}
     

      {/* Links */}
     
       
      <ul className="hidden md:flex items-center space-x-8 text-[var(--text-secondary)]">
         <li><Link to="/" className="text-2xl font-bold mx-6">تندیس شیمی</Link></li>
        <li><Link to="/" className="font-semibold opacity-70 hover:opacity-100 ">محصولات</Link></li>
        <li><Link to="/" className="font-semibold opacity-70 hover:opacity-100 ">صنایع</Link></li>
        <li><Link to="/" className="font-semibold opacity-70 hover:opacity-100 ">کیفیت</Link></li>
        <li><Link to="/" className="font-semibold opacity-70 hover:opacity-100 ">درباره ما</Link></li>
         <li><Link to="/" className="font-semibold opacity-70 hover:opacity-100 ">تماس با ما</Link></li>
      </ul>


      {/* Search + Button */}
      <div className="flex items-center space-x-4">
        <Search value={query} onChange={setQuery} placeholder="جستوجوی محصولات"/>
        <Button variant="black">پیام بگذارید</Button>
      </div>
    </nav>
  )
}

export default Nav