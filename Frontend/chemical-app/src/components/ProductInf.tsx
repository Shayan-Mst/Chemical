import { useState } from 'react'
import Button from './Button';

const ProductInf = () => {
    const [selected , setSelected] = useState(true);
  return (
    <section id="product-info" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8">
                    <button onClick={()=>setSelected(true)} className={`${selected?"border-b-2 border-bg-secondary text-bg-secondary":"text-gray-500"} whitespace-nowrap py-4 px-1  font-semibold text-sm `} >
                        مشخصات محصول
                    </button>
                    
                    <button onClick={()=>setSelected(false)} className={`${selected?"text-gray-500":"border-b-2 border-bg-secondary text-bg-secondary"}  whitespace-nowrap py-4 px-1  font-semibold text-sm `} >
                        گواهی استاندارد
                    </button>
                   
                </nav>
            </div>
{selected?  <div id="specifications" className="tab-content">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">مشخصات فنی</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
                    <div>
                      
                        <div className="bg-gray-50 rounded-lg p-6">
                            <table className="w-full">
                                <tbody><tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">خلوص</td>
                                    <td className="py-3 text-sm text-gray-900">≥ ۹۹.۵%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">عدد اسیدی</td>
                                    <td className="py-3 text-sm text-gray-900">≤ 2.0 mg KOH/g</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">عدد یدی</td>
                                    <td className="py-3 text-sm text-gray-900">82-88</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">ارزش ....</td>
                                    <td className="py-3 text-sm text-gray-900">176-187</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">میزان...</td>
                                    <td className="py-3 text-sm text-gray-900">≤ 0.5%</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-sm font-medium text-gray-600">چگالی (20°C)</td>
                                    <td className="py-3 text-sm text-gray-900">0.956-0.968 g/cm³</td>
                                </tr>
                            </tbody></table>
                        </div>
                    </div>
                     <div>
                       
                        <div className="bg-gray-50 rounded-lg p-6">
                            <table className="w-full">
                                <tbody><tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">خلوص</td>
                                    <td className="py-3 text-sm text-gray-900">≥ ۹۹.۵%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">عدد اسیدی</td>
                                    <td className="py-3 text-sm text-gray-900">≤ 2.0 mg KOH/g</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">عدد یدی</td>
                                    <td className="py-3 text-sm text-gray-900">82-88</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">ارزش ....</td>
                                    <td className="py-3 text-sm text-gray-900">176-187</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 text-sm font-medium text-gray-600">میزان...</td>
                                    <td className="py-3 text-sm text-gray-900">≤ 0.5%</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-sm font-medium text-gray-600">چگالی (20°C)</td>
                                    <td className="py-3 text-sm text-gray-900">0.956-0.968 g/cm³</td>
                                </tr>
                            </tbody></table>
                        </div>
                    </div>
                </div>
            </div>:
            
             <div id="certifications" className="tab-content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-22">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">استاندارد محصول</h3>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-green-50 rounded-lg">
                                <i className="text-green-600 text-xl ml-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-certificate w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="certificate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"></path></svg></i>
                                <div>
                                    <h4 className="font-semibold text-gray-900">ISO 9001:2015</h4>
                                    <p className="text-sm text-gray-600">کیفیت محصول</p>
                                </div>
                            </div>
                            {/* <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                                <i className="text-blue-600 text-xl mr-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-award" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="award" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"></path></svg></i>
                                <div>
                                    <h4 className="font-semibold text-gray-900">REACH Compliance</h4>
                                    <p className="text-sm text-gray-600">European Chemical Safety Standards</p>
                                </div>
                            </div> */}
                            {/* <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                                <i className="text-purple-600 text-xl mr-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-shield-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g className="missing"><path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path><circle fill="currentColor" cx="256" cy="364" r="28"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate></circle><path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate></path><path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate></path></g></svg></i>
                                <div>
                                    <h4 className="font-semibold text-gray-900">MSDS Available</h4>
                                    <p className="text-sm text-gray-600">Material Safety Data Sheet</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">گزارش تست</h3>
                        <div className="bg-gray-50 rounded-lg p-2">
                            <div className="space-y-4">
                               
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">گزارش تست های نهایی</span>
                                    <Button variant='blue' size=''>
                                        <i className="ml-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-download w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></i>
                                        دانلود گزارش
                                    </Button>
                                </div>
                               
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
           

       
           

           
        </div>
    </section>
  )
}

export default ProductInf