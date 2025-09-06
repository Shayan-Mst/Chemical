
import { Link, useLocation } from 'react-router-dom'
import { useUI } from '../context/context'
import Button from './Button'
import { navbarItems } from '../data/navItem'

const SideBar = () => {

   const { sidebarOpen} = useUI()
    const location = useLocation();
  return (
     <div className="flex">
      {/* Mobile topbar */}
     

      {/* Sidebar */}
      <div
        className={`fixed lg:hidden lg:static top-0 left-0 h-full w-64 bg-page-bg text-text-secondary p-6 transition-transform duration-300 z-10
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center">
                    <svg className="svg-inline--fa fa-flask" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flask" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="#fff" d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"></path></svg>
                </div>
        <ul className=" flex flex-col gap-6 space-10 text-text-secondary my-6">
         {navbarItems.map((item)=>(
           <li className={`hover:bg-bg-secondary px-2 py-2 transition-colors ease-in-out duration-200 hover:text-white rounded-md`}><Link to={item.link } className={`${ location.pathname === item.link ? "border-b-3 border-b-blue-800" : ""} font-semibold py-1`}>{item.label}</Link></li>
       
         ))}
        {/* <li className='hover:bg-bg-secondary px-2 py-2 transition-colors ease-in-out duration-200 hover:text-white rounded-md'><Link to="/" className="font-semibold">صفحه نخست</Link></li>
        <li className='hover:bg-bg-secondary px-2 py-2 transition-colors ease-in-out duration-200 hover:text-white rounded-md'><Link to="/" className="font-semibold">محصولات</Link></li>
        <li className='hover:bg-bg-secondary px-2 py-2 transition-colors ease-in-out duration-200 hover:text-white rounded-md'><Link to="/" className="font-semibold">صنایع</Link></li>
        <li className='hover:bg-bg-secondary px-2 py-2 transition-colors ease-in-out duration-200 hover:text-white rounded-md'><Link to="/" className="font-semibold">درباره ما</Link></li>
        <li className='hover:bg-bg-secondary px-2 py-2 transition-colors ease-in-out duration-200 hover:text-white rounded-md'><Link to="/" className="font-semibold">تماس با ما</Link></li> */}
      </ul>
 <Button variant="blue" size=''  onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}> 
          <svg className="ml-2" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-request" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
          <g className="missing"><path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path>
          <circle fill="currentColor" cx="256" cy="364" r="28"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate>
          </circle><path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate>
          </path><path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate></path></g></svg>

          
          درخواست بدهید


        </Button>


         {/* Left side: phone + email */}
      <div className="flex flex-col px-2  gap-6 mt-4 text-sm">
        <div className="flex items-center gap-1">
          
           تماس :‌
           
          <span dir="ltr">+98 912 34 54 003</span>
        </div>
        <div className="flex items-center gap-1">
         ایمیل : 
          <span>info@tandischemie.com</span>
        </div>

         <div className="flex items-center gap-4">

         <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bg-secondary transition-colors cursor-pointer">
                        <i className="text-white" data-fa-i2svg=""><svg className="svg-inline--fa fa-whatsapp h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></i>
                    </span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bg-secondary transition-colors cursor-pointer">
                     <i className="text-white" data-fa-i2svg="">
  <svg className="svg-inline--fa fa-instagram h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 
    114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 
    189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 
    74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 
    74.7zm146.4-194.3c0 14.9-12 26.9-26.9 
    26.9s-26.9-12-26.9-26.9 12-26.9 
    26.9-26.9 26.9 12 26.9 26.9zm76.1 
    27.2c-1.7-35.7-9.9-67.3-36.2-93.5s-57.8-34.5-93.5-36.2C293.3 
    32 286.5 32 224 32s-69.3 0-92.9 
    1.7c-35.7 1.7-67.3 9.9-93.5 
    36.2S3.2 127.8 1.5 163.5C-.2 187.1-.2 
    193.9-.2 256s0 69.3 1.7 92.9c1.7 
    35.7 9.9 67.3 36.2 93.5s57.8 
    34.5 93.5 36.2c23.6 1.7 30.4 1.7 
    92.9 1.7s69.3 0 92.9-1.7c35.7-1.7 
    67.3-9.9 93.5-36.2s34.5-57.8 
    36.2-93.5c1.7-23.6 1.7-30.4 
    1.7-92.9s0-69.3-1.7-92.9zM398.8 
    388c-7.8 19.7-22.9 34.8-42.6 
    42.6-29.5 11.7-99.5 9-132.2 
    9s-102.7 2.6-132.2-9c-19.7-7.8-34.8-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.2s-2.6-102.7 
    9-132.2c7.8-19.7 22.9-34.8 
    42.6-42.6 29.5-11.7 99.5-9 
    132.2-9s102.7-2.6 
    132.2 9c19.7 7.8 34.8 22.9 
    42.6 42.6 11.7 29.5 9 
    99.5 9 132.2s2.7 102.7-9 
    132.2z"/>
  </svg>
</i>

                     </span>
        </a>
        <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
                              <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bg-secondary transition-colors cursor-pointer">
                        <i className="text-white" data-fa-i2svg=""><svg className="svg-inline--fa fa-telegram h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path></svg></i>
                    </span>
        </a>
      </div>
      </div>

     
     
      
      </div>

      
      
    </div>
  )
}

export default SideBar