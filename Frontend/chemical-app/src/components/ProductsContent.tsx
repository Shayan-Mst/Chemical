

const ProductsContent = () => {
  return (
   <section id="product-content" className="py-12">
    <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/*Sidebar Filters*/}
            <aside id="sidebar-filters" className="lg:w-80 space-y-6">
                
                {/* <!-- Categories --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" checked/>
                            <span className="text-gray-700">Acids &amp; Bases</span>
                            <span className="text-gray-400 text-sm ml-auto">(24)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Solvents</span>
                            <span className="text-gray-400 text-sm ml-auto">(18)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Oils &amp; Lubricants</span>
                            <span className="text-gray-400 text-sm ml-auto">(15)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Cleaning Agents</span>
                            <span className="text-gray-400 text-sm ml-auto">(12)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Specialty Chemicals</span>
                            <span className="text-gray-400 text-sm ml-auto">(9)</span>
                        </label>
                    </div>
                </div>
                
                {/* <!-- Purity Grade --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Purity Grade</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" checked/>
                            <span className="text-gray-700">Pharmaceutical Grade</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Food Grade</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Industrial Grade</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Technical Grade</span>
                        </label>
                    </div>
                </div>
                
                {/* <!-- Price Range --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
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
                
                {/* <!-- Packaging --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Packaging</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">25kg Drums</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">50kg Drums</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">200L Barrels</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">IBC Containers</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Bulk Tankers</span>
                        </label>
                    </div>
                </div>
                
                {/* <!-- Availability --> */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" checked/>
                            <span className="text-gray-700">In Stock</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Pre-order</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary"/>
                            <span className="text-gray-700">Made to Order</span>
                        </label>
                    </div>
                </div>
                
            </aside>
            
            {/* <!-- Products Grid --> */}
            <main id="products-grid" className="flex-1">
                
                {/* <!-- Results Header --> */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Industrial Chemicals</h2>
                        <p className="text-gray-600 mt-1">Showing 1-24 of 156 products</p>
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
                    
                    {/* <!-- Product Card 1 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5dbdad0b0e-3ce7731719fe26b1b4ed.png" alt="industrial chemical bottle with sulfuric acid label in laboratory setting"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Sulfuric Acid (H₂SO₄)
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.8</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 7664-93-9 | Pharmaceutical Grade</p>
                            <p className="text-gray-700 text-sm mb-4">High purity sulfuric acid for industrial applications, water treatment, and chemical synthesis.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">185,000</span>
                                    <span className="text-gray-600 text-sm">IRR/kg</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 25kg</p>
                                    <p className="text-xs text-green-600 font-medium">Bulk discount available</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">98% Purity</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">ISO Certified</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 2 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2d6e4f7b3f-af8b60065cb96ac34773.png" alt="castor oil industrial container with golden liquid in factory setting"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Castor Oil
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.9</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 8001-79-4 | Industrial Grade</p>
                            <p className="text-gray-700 text-sm mb-4">Premium quality castor oil for lubricants, cosmetics, and industrial applications.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">95,000</span>
                                    <span className="text-gray-600 text-sm">IRR/kg</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 50kg</p>
                                    <p className="text-xs text-green-600 font-medium">Volume pricing</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Cold Pressed</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Natural</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 3 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/21ea85def5-eae929fc0106ee1a87ef.png" alt="sodium hydroxide white pellets in industrial container with warning labels"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">Low Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Sodium Hydroxide (NaOH)
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.7</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 1310-73-2 | Technical Grade</p>
                            <p className="text-gray-700 text-sm mb-4">High-grade caustic soda pellets for soap manufacturing, water treatment, and chemical processing.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">65,000</span>
                                    <span className="text-gray-600 text-sm">IRR/kg</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 25kg</p>
                                    <p className="text-xs text-red-600 font-medium">Limited stock</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">99% Purity</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Hazardous</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 4 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1eb59cc9b1-7252f553a2f5ed97d985.png" alt="morpholine chemical bottle clear liquid in laboratory with molecular structure"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-red-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Morpholine
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.6</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 110-91-8 | Pharmaceutical Grade</p>
                            <p className="text-gray-700 text-sm mb-4">High purity morpholine for pharmaceutical synthesis, rubber chemicals, and corrosion inhibitors.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">425,000</span>
                                    <span className="text-gray-600 text-sm">IRR/kg</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 10kg</p>
                                    <p className="text-xs text-green-600 font-medium">Special pricing</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">99.5% Purity</span>
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Pharma Grade</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 5 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8cd5707d1e-541d80a22b52ef5c495c.png" alt="formalin solution in glass bottle with chemical warning labels in laboratory"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Formalin Solution
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.5</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 50-00-0 | Laboratory Grade</p>
                            <p className="text-gray-700 text-sm mb-4">37% formaldehyde solution for preservation, disinfection, and chemical synthesis applications.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">145,000</span>
                                    <span className="text-gray-600 text-sm">IRR/L</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 20L</p>
                                    <p className="text-xs text-green-600 font-medium">Bulk available</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">37% Conc.</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Regulated</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 6 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/53603623e5-a81a1bbf2c4bca2cc8ba.png" alt="industrial cleaning agent bottles with blue liquid in manufacturing facility"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Industrial Degreaser
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.8</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Multi-purpose | Commercial Grade</p>
                            <p className="text-gray-700 text-sm mb-4">Heavy-duty degreasing solution for industrial equipment, machinery, and surface cleaning.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">85,000</span>
                                    <span className="text-gray-600 text-sm">IRR/L</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 25L</p>
                                    <p className="text-xs text-green-600 font-medium">Volume discount</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Biodegradable</span>
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Fast Acting</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 7 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a7d3f52966-6a468291162c4ea492a6.png" alt="paraffin wax white blocks stacked in industrial warehouse setting"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">Pre-order</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Paraffin Wax
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.7</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 8002-74-2 | Technical Grade</p>
                            <p className="text-gray-700 text-sm mb-4">High-quality paraffin wax for candle making, packaging, rubber processing, and cosmetics.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">75,000</span>
                                    <span className="text-gray-600 text-sm">IRR/kg</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 100kg</p>
                                    <p className="text-xs text-blue-600 font-medium">ETA: 2 weeks</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">58-60°C MP</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Food Safe</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium">
                                    Pre-order
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 8 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0540ed9434-09325f1bcfb94e98fed8.png" alt="acetone solvent clear liquid in industrial drum container with safety labels"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Acetone
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.6</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 67-64-1 | Technical Grade</p>
                            <p className="text-gray-700 text-sm mb-4">Pure acetone solvent for paint thinning, cleaning, and chemical synthesis applications.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">125,000</span>
                                    <span className="text-gray-600 text-sm">IRR/L</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 20L</p>
                                    <p className="text-xs text-green-600 font-medium">Fast delivery</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">99.5% Pure</span>
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Flammable</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Product Card 9 --> */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/90ae4e8784-e24a7bf392cb85b24c78.png" alt="hydrochloric acid industrial container with warning symbols in chemical storage"/>
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">In Stock</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                    <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    Hydrochloric Acid (HCl)
                                </h3>
                                <div className="flex items-center space-x-1">
                                    <i className="text-yellow-400 text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                                    <span className="text-sm text-gray-600">4.9</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">CAS: 7647-01-0 | Industrial Grade</p>
                            <p className="text-gray-700 text-sm mb-4">High concentration hydrochloric acid for metal processing, pH control, and chemical synthesis.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">155,000</span>
                                    <span className="text-gray-600 text-sm">IRR/L</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Min. Order: 25L</p>
                                    <p className="text-xs text-green-600 font-medium">Bulk pricing</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">37% Conc.</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Corrosive</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                {/* <!-- Pagination --> */}
                <div className="flex items-center justify-between mt-12">
                    <div className="text-gray-600">
                        Showing 1-9 of 156 products
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                            <i data-fa-i2svg=""><svg className="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg></i>
                        </button>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                        <span className="px-4 py-2 text-gray-400">...</span>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">18</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <i data-fa-i2svg=""><svg className="svg-inline--fa fa-chevron-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></i>
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