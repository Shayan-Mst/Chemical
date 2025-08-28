

const WhyUs = () => {
  return (
   <section id="features" className="py-20 bg-white">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">چرا <span className='text-bg-third'>تندیس شیمی</span> را انتخاب کنیم؟</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div id="feature-quality" className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-certificate" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="certificate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"></path></svg></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">کیفیت تأیید‌شده</h4>
                <p className="text-gray-600">مواد شیمیایی صنعتی با خلوص بالا، همراه با تضمین کیفیت مستمر و انطباق کامل با استانداردها و گواهینامه‌های معتبر.</p>
            </div>
            <div id="feature-pricing" className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-tag" width="22" height="22" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">قیمت‌های مناسب</h4>
                <p className="text-gray-600">ارائه بهترین قیمت‌های بازار با تخفیف‌های شفاف برای خرید عمده و شرایط پرداخت انعطاف‌پذیر.</p>
            </div>
            <div id="feature-convenience" className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-store" width="22" height="22" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="store" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"></path></svg></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">همه در یک‌جا</h4>
                <p className="text-gray-600">مجموعه‌ای کامل از مواد شیمیایی، از اسیدها تا حلال‌ها، همه از یک تأمین‌کننده‌ی قابل اعتماد.</p>
            </div>
            <div id="feature-support" className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-headset" width="22" height="22" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"></path></svg></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">پشتیبانی تخصصی</h4>
                <p className="text-gray-600">خدمات شخصی‌سازی‌شده همراه با راهنمایی فنی و ارائه راهکارهای اختصاصی متناسب با نیازهای شما</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default WhyUs