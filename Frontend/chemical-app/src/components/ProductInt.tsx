import React, { useState } from 'react'
import Button from './Button'

const ProductInt = () => {
    const [selectImg,setSelectImg] = useState(0);
    const images = [
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5628e35335-82b4f3545b86861aaee3.png",
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/bbd567ed1c-f8e2c82e9fbfc2501ccf.png",
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/c874d4724d-6d480798865da9b08812.png",
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/86853d0442-c6c23ec67bcd54b45000.png"

    ]
  return (
    <section id="product-hero" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:px-12 md:px-23 lg:px-0 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
                        <img className="w-full h-full object-cover rounded-lg" src={images[selectImg]} alt="industrial castor oil bottles and cont"/>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div onClick={()=>setSelectImg(0)} className={`bg-gray-100 rounded-lg p-3 h-20 flex items-center justify-center cursor-pointer ${selectImg==0?"border-2 border-bg-secondary":""}`}>
                            <img className="w-full h-full object-cover rounded" src={images[0]} alt="castor oil sample in glass container"/>
                        </div>
                        <div onClick={()=>setSelectImg(1)} className={`bg-gray-100 rounded-lg p-3 h-20 flex items-center justify-center cursor-pointer ${selectImg==1?"border-2 border-bg-secondary":""}`}>
                            <img className="w-full h-full object-cover rounded" src={images[1]} alt="industrial chemical packaging drums"/>
                        </div>
                        <div onClick={()=>setSelectImg(2)} className={`bg-gray-100 rounded-lg p-3 h-20 flex items-center justify-center cursor-pointer ${selectImg==2?"border-2 border-bg-secondary":""}`}>
                            <img className="w-full h-full object-cover rounded" src={images[2]} alt="chemical quality testing laboratory"/>
                        </div>
                        <div onClick={()=>setSelectImg(3)} className={`bg-gray-100 rounded-lg p-3 h-20 flex items-center justify-center cursor-pointer ${selectImg==3?"border-2 border-bg-secondary":""}`}>
                            <img className="w-full h-full object-cover rounded" src={images[3]} alt="industrial manufacturing facility"/>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">موجود</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">گرید صنعتی</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">روغن کرچک گرید صنعتی</h1>
                        <p className="text-gray-600 text-lg mb-4">روغن کرچک صنعتی با خلوص بالا برای تولید، روان‌سازها و کاربردهای فرآیندهای شیمیایی.</p>
                        <div className="flex items-center justify-end gap-x-6 mb-6 ">
                            
                                
                                <span className="ml-2 text-sm text-gray-600">( ۲۴ بازدید )</span>
                            
                            <span className="text-sm text-gray-500">استاندارد: CO-IG-001</span>
                        </div>
                         <div className="text-right">
                                    <span className=" mx-2 text-gray-500"> حداقل سفارش : بشکه۲۰۰</span>
                                    <span className=" mx-2 text-green-600 font-medium">تخفیف در صورت خرید عمده</span>
                                </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                       
                        
                        <div className="mb-6">
                            <p className="text-sm text-gray-600">قیمت با توجه به کیفیت و حجم سفارش تفاوت دارد.</p>
                        </div>

                        <div className="space-y-3">
                            <Button variant='blue' size='full'>

                                 <i className="ml-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-quote-right w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg></i>
                               
                               درخواست خود را ثبت کنید

                            </Button>
                           <Button variant='orange' size='full'>
                              <i className="ml-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                                برای سفارش تماس بگیرید
                           </Button>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductInt