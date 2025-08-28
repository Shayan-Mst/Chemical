import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center">
                        <i className="text-white text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-flask w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flask" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"></path></svg></i>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">تندیس شیمی</h1>
                        <p className="text-gray-400">راه حلی برای شما</p>
                    </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">تأمین‌کننده‌ی پیشرو مواد شیمیایی صنعتی باکیفیت در سراسر ایران. متعهد به برتری، قابل‌اعتماد بودن و رضایت مشتری</p>
                <div className="flex space-x-4">
                    <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer">
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
                    <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer">
                        <i className="text-white" data-fa-i2svg=""><svg className="svg-inline--fa fa-telegram h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path></svg></i>
                    </span>
                    <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer">
                        <i className="text-white" data-fa-i2svg=""><svg className="svg-inline--fa fa-whatsapp h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></i>
                    </span>
                </div>
            </div>
            
            <div>
                <h5 className="text-lg font-semibold mb-6">دسترسی سریع</h5>
                <ul className="space-y-3">
                    <li><Link to="/" className="relative group text-gray-300 hover:text-white transition-colors cursor-pointer">
                    کاتالوگ
                     <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full origin-right"></span>
   
                    </Link></li>
                    <li><Link to="/" className="relative group text-gray-300 hover:text-white transition-colors cursor-pointer">
                    صنایع
                    
                       <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full origin-right"></span>
   
                    </Link></li>
                    <li><Link to="/" className="relative group text-gray-300 hover:text-white transition-colors cursor-pointer">
                    محصولات
                       <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full origin-right"></span>
   
                    </Link></li>
                    <li><Link to="/" className="relative group text-gray-300 hover:text-white transition-colors cursor-pointer">
                    
                    درخواست سفارش
                       <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full origin-right"></span>
   
                    </Link></li>
                    <li><Link to="/" className="relative group text-gray-300 hover:text-white transition-colors cursor-pointer">درباره ما
                       <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full origin-right"></span>
   
                    </Link></li>
                    <li><Link to="/" className="relative group text-gray-300 hover:text-white transition-colors cursor-pointer">تماس با ما
                       <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full origin-right"></span>
   
                    </Link></li>
                </ul>
            </div>
            
            <div>
                <h5 className="text-lg font-semibold mb-6">اطلاعات تماس</h5>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <i className="text-sky-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                        <span dir="ltr" className="text-gray-300">+98 912 34 54 003</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="text-sky-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                        <span dir="ltr" className="text-gray-300">info@tandischemie.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="text-sky-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                        <span className="text-gray-300">استان البرز - شهرک صنعتی اشتهارد</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="text-sky-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-clock w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                        <span className="text-gray-300">شنبه تا پنجشنبه - ۸ تا ۱۷ </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
                <p className="text-gray-400 text-sm">© کلیه حقوق سایت متعلق به شرکت تندیس شیمی می باشد..</p>
                
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer