import { Link , useLocation } from "react-router-dom"
import Button from "./Button"
import { useUI } from "../context/context";
import { navbarItems } from "../data/navItem";




const Nav = () => {
  const { sidebarOpen, toggleSidebar } = useUI()
     const location = useLocation();
  return (
    <>
     <nav className="text-text-secondary bg-page-bg w-full px-8 md:px-6 lg:px-16 xl:px-24 py-4
  flex items-center  md:justify-evenly lg:justify-between sticky top-0 z-10">
      {/* Logo */}
     
     <div className="flex items-center gap-x-4">

<div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center">
                    <svg className="svg-inline--fa fa-flask" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flask" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="#fff" d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"></path></svg>
                </div>

<div className="text-center ">
<div className="text-2xl font-bold mb-1"> تندیس شیمی </div>
<div className="text-sm font-semibold opacity-70"> فروش انواع مواد شیمیایی </div>
</div>
     </div>

      {/* Links */}
     
       
      <ul className="hidden md:flex items-center space-x-10 text-text-secondary ">

        {navbarItems.map((item)=>( <li  className={`pb-2 ${
          location.pathname === item.link ? "border-b-3 border-b-blue-900" : ""
        }`}><Link to={item.link} className="font-semibold  hover:text-bg-secondary transition-colors duration-200">{item.label}</Link></li>
        ))}
         
            </ul>


      {/* Request Button */}
      
       <div className="text-center hidden lg:block">
        <Button variant="blue" size=''  onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}> 
          <svg className="ml-2" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-request" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
          <g className="missing"><path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path>
          <circle fill="currentColor" cx="256" cy="364" r="28"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate>
          </circle><path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate>
          </path><path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate></path></g></svg>

          
          درخواست بدهید


        </Button>
      </div> 

  
    </nav>
    
    <button 
      onClick={toggleSidebar} 
      className="md:hidden flex fixed left-7 top-7 items-center cursor-pointer justify-center w-8 h-8 focus:outline-none z-15"
    >
      <div 
        className="relative flex items-center justify-center w-full h-full"
      >
        {/* Top line */}
        <div 
          className={`
            w-6 h-1 bg-bg-primary
            absolute transform transition-all duration-300 ease-in-out
            ${sidebarOpen ? 'rotate-45' : '-translate-y-2'}
          `}
        ></div>
        
        {/* Middle line */}
        <div 
          className={`
            w-6 h-1 bg-bg-primary
            transform transition-all duration-300 ease-in-out
            ${sidebarOpen ? 'opacity-0' : 'opacity-100'}
          `}
        ></div>
        
        {/* Bottom line */}
        <div 
          className={`
            w-6 h-1 bg-bg-primary
            absolute transform transition-all duration-300 ease-in-out
            ${sidebarOpen ? '-rotate-45' : 'translate-y-2'}
          `}
        ></div>
      </div>
    </button>
   
    </>
    
  )
}

export default Nav