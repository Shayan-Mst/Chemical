

const SearchFilter = () => {
  return (
     <section id="filters-search" className="bg-white  py-8 shadow-sm px-8 md:px-6 lg:px-16 xl:px-24">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="جستوجوی نام و کد محصولات..."
                className="w-full pl-12 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 
                  0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 
                  25.2-76.8 40-122.7 40C93.1 416 0 
                  322.9 0 208S93.1 0 208 0S416 
                  93.1 416 208zM208 352a144 144 0 1 0 
                  0-288 144 144 0 1 0 0 288z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3">
            <select className="px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option> فیلتر بر اساس دسته بندی ها</option>
              <option>اسید ها</option>
              <option>روغن ها</option>
              <option>حلال ها</option>
              <option>شوینده ها </option>
              <option>  ضد عفونی کننده ها</option>
              <option>قلیایی ها</option>
            </select>

        
            <select className="px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>مرتبط ترین</option>
              <option>از کمترین موجودی</option>
              <option>از بیشترین موجودی</option>
              <option>حروف الفبا</option>
              <option>پرفروش ترین</option>
            </select>

            {/* <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M3.9 54.9C10.5 40.9 24.5 32 40 
                32H472c15.5 0 29.5 8.9 36.1 
                22.9s4.6 30.5-5.2 42.5L320 
                320.9V448c0 12.1-6.8 23.2-17.7 
                28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 
                97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
              </svg>
              <span>More Filters</span>
            </button> */}
          </div>
        </div>

        {/* Active Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">فیلتر های فعال : </span>

          <span className="bg-bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <button className="cursor-pointer">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M342.6 150.6c12.5-12.5 
                12.5-32.8 0-45.3s-32.8-12.5-45.3 
                0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 
                0s-12.5 32.8 0 45.3L146.7 256 41.4 
                361.4c-12.5 12.5-12.5 32.8 0 
                45.3s32.8 12.5 45.3 0L192 
                301.3 297.4 406.6c12.5 12.5 
                32.8 12.5 45.3 0s12.5-32.8 
                0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          
            <span>اسید ها</span>
          
          </span>

          <span className="bg-bg-secondary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
         
            <button className="cursor-pointer ">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M342.6 150.6c12.5-12.5 
                12.5-32.8 0-45.3s-32.8-12.5-45.3 
                0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 
                0s-12.5 32.8 0 45.3L146.7 256 41.4 
                361.4c-12.5 12.5-12.5 32.8 0 
                45.3s32.8 12.5 45.3 0L192 
                301.3 297.4 406.6c12.5 12.5 
                32.8 12.5 45.3 0s12.5-32.8 
                0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
         
            <span>موجود</span>
         
          </span>

          <button className="text-bg-secondary text-sm hover:underline">
            پاکسازی فیلتر
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchFilter