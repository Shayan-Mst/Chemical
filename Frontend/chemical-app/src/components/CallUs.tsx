

const CallUs = () => {
  return (
    <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">با ما در <span className='text-[var(--bg-third)]'>تماس</span> باشید</h3>
           {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to streamline your chemical supply chain? Contact our experts today for personalized solutions.</p> */}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div id="contact-phone" className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="text-white text-2xl" data-fa-i2svg=""><svg className="w-5 h-5 svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">شماره تماس</h4>
                
                <p dir='ltr' className="text-2xl font-bold text-black">+98 912 34 54 003</p>
                <p className="text-sm text-gray-500">شنبه تا پنجشنبه ۸ تا ۱۷</p>
            </div>
            
            <div id="contact-email" className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="text-white text-2xl" data-fa-i2svg=""><svg className="w-5 h-5 svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">آدرس ایمیل</h4>
               
                <p className="text-xl font-bold text-black">info@chemtrade-iran.com</p>
                <p className="text-sm text-gray-500">پاسخ در زمان مناسب</p>
            </div>
            
            <div id="contact-location" className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="text-white text-2xl" data-fa-i2svg=""><svg className="w-5 h-5 svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">نشانی ما</h4>
               
                <p className="font-semibold text-gray-900">البرز - کرج</p>
                <p className="text-sm text-gray-500">شهرک صنعتی اشتهارد</p>
            </div>
        </div>
        
       
    </div>
</section>
  )
}

export default CallUs