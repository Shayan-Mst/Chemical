import { products } from "../data/Products"
import ProductCard from "./ProductCard"

const ProductsContent = () => {
  return (
   <section id="product-content" className="py-12">
    <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/*Sidebar Filters*/}
            <aside id="sidebar-filters" className="lg:w-80 space-y-6">
                
                {/* <!-- Categories --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">دسته بندی ها</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" checked/>
                            <span className="text-gray-700">پایه اسید</span>
                            <span className="text-gray-400 text-sm ml-auto">(24)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">حلال ها</span>
                            <span className="text-gray-400 text-sm ml-auto">(18)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">روغن ها و پارافین </span>
                            <span className="text-gray-400 text-sm ml-auto">(15)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">شوینده ها</span>
                            <span className="text-gray-400 text-sm ml-auto">(12)</span>
                        </label>
                         <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">ضد عفونی کننده ها</span>
                            <span className="text-gray-400 text-sm ml-auto">(9)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">قلیایی ها</span>
                            <span className="text-gray-400 text-sm ml-auto">(9)</span>
                        </label>
                    </div>
                </div>
                
                {/* <!-- Purity Grade --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">گرید خلوص مواد</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" checked/>
                            <span className="text-gray-700">گرید دارویی</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">گرید غذایی</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">گرید صنعتی</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">گرید آزمایشگاهی</span>
                        </label>
                    </div>
                </div>
                
                {/* <!-- Price Range --> */}
                {/* <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range (per kg)</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <input type="number" placeholder="Min" className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm"/>
                            <span className="text-gray-400">-</span>
                            <input type="number" placeholder="Max" className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm"/>
                            <span className="text-gray-600 text-sm">IRR</span>
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary"/>
                                <span className="text-gray-700">Under 50,000 IRR</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary"/>
                                <span className="text-gray-700">50,000 - 200,000 IRR</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary"/>
                                <span className="text-gray-700">200,000 - 500,000 IRR</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary"/>
                                <span className="text-gray-700">Above 500,000 IRR</span>
                            </label>
                        </div>
                    </div>
                </div>
                 */}
                {/* <!-- Packaging --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">بسته بندی ها</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">گالن ۲۰ لیتری</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">بشکه ۵۰ لیتری</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">بشکه ۱۰۰ لیتری</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">بشکه ۲۰۰ لیتری </span>
                        </label>
                        
                    </div>
                </div>
                
                {/* <!-- Availability --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">وضعیت موجودی</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" checked/>
                            <span className="text-gray-700">موجود</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">در انتظار</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">سفارش</span>
                        </label>
                    </div>
                </div>
                
            </aside>
            
            {/* <!-- Products Grid --> */}
            <main id="products-grid" className="flex-1">
                
                {/* <!-- Results Header --> */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">محصولات شیمیایی</h2>
                        <p className="text-gray-600 mt-1">نمایش ۱-۶ محصول از ۳۷ محصول</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <button className="p-2 bg-primary text-white rounded-lg">
                                <i data-fa-i2svg=""><svg className="svg-inline--fa fa-table-cells-large" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table-cells-large" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path></svg></i>
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                                <i data-fa-i2svg=""><svg className="svg-inline--fa fa-list" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"></path></svg></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Products Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    
                    {/* <!-- Product Cards --> */}
                    {products.map((item,id)=>(
                   <ProductCard name={item.name} description={item.description} grade={item.grade}
                   available={item.available} minOrder={item.minOrder} features={item.features} key={id}/>
                    ))}
                   
                    
                 
                    
                 
      
                </div>
                
                {/* <!-- Pagination --> */}
                <div className="flex items-center justify-center text-black mt-12">
                    
                    <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <i data-fa-i2svg=""><svg className="svg-inline--fa fa-chevron-right h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></i>
                        </button>
                        <button className="px-4 py-2 bg-bg-secondary text-white  rounded-lg">1</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                        <span className="px-4 py-2 text-gray-400">...</span>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">18</button>
                       
                         <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                            <i data-fa-i2svg=""><svg className="svg-inline--fa fa-chevron-left h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg></i>
                        </button>
                    </div>
                </div>
                
            </main>
            
        </div>
    </div>
</section>
  )
}

export default ProductsContent