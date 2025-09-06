
import type { FC } from 'react'
import Button from './Button'
import type { Product } from '../types/type'

const ProductCard : FC<Product> = ({name,grade,description,minOrder,available,features}) => {
    
  return (

     
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5dbdad0b0e-3ce7731719fe26b1b4ed.png" alt="industrial chemical bottle with sulfuric acid label in laboratory setting"/>
                            <div className="absolute top-4 left-4">
                                <span className={`${available === "موجودی کم" ? "bg-yellow-600" : available == "موجود" ? "bg-green-600" : "bg-red-600"} text-white px-3 py-1 rounded-full text-sm font-medium`}>{available}</span>
                            </div>
                            
                          
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    {name}
                                </h3>
                                
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{grade}</p>
                            <p className="text-gray-700 text-sm mb-4">{description}</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">185,000</span>
                                    <span className="text-gray-600 text-sm">IRR/kg</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500"> حداقل سفارش : {minOrder}</p>
                                    <p className="text-xs text-green-600 font-medium">تخفیف در صورت خرید عمده</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                {features.map((item)=>(
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{item}</span>
                                ))}
                              
                                {/* <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">ISO Certified</span> */}
                            </div>
                            <div className="flex space-x-2">
                                <Button variant="blue" size="full">مشاهده محصول</Button>
                               
                                <button className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                 

  )
}

export default ProductCard