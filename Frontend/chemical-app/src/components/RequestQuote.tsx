import Button from "./Button"
import type { Request } from "../types/type"
import { useState } from "react"

const RequestQuote = () => {

    const [req,setReq] = useState<Request>({
        name:"",
        email:"",
        phone:"",
        industry:"",
        qoute:""
    })

    const submit = () => {

    }

  return (
   <section id="quote-system" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">همین حالا <span className="text-[var(--bg-third)]">درخواست</span> بدهید!</h3>
        </div>
        
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              
                
                <div className="bg-[var(--bg-secondary)] p-8 lg:p-12 text-white">
                    <h4 className="text-2xl font-bold mb-6">چرا به ما درخواست بدهید؟</h4>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-[var(--bg-third)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="text-white text-sm" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-dollar-sign " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path></svg></i>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">قیمت مناسب</h5>
                                <p className="text-blue-100 text-sm">بهترین نرخ‌های بازار را دریافت کنید.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-[var(--bg-third)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="text-white text-sm" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-clock" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">پاسخ سریع</h5>
                                <p className="text-blue-100 text-sm">دریافت پیش‌فاکتورهای دقیق ظرف ۲۴ ساعت، و اغلب در همان روز برای محصولات استاندارد</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-[var(--bg-third)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="text-white text-sm" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-user-tie" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"></path></svg></i>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">مشاوره تخصصی</h5>
                                <p className="text-blue-100 text-sm">راهنمایی‌های فنی و پیشنهاد محصولات  متخصصان شیمی ما.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-[var(--bg-third)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="text-white text-sm" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-truck" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">ارسال به همه مناطق ایران</h5>
                                <p className="text-blue-100 text-sm">تحویل هماهنگ در سراسر ایران همراه با رهگیری و پشتیبانی در جابجایی.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-blue-700 rounded-lg">
                        <div className="flex items-center mb-2">
                            <i className="text-[var(--bg-third)] " data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-phone ml-2 transform rotate-250" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                            <span className="font-semibold">بعد از درخواست با ما تماس بگیرید</span>
                        </div>
                        <p className="text-sm text-blue-100 mb-2">شماره تماس :‌</p>
                        <p dir="ltr" className="text-lg font-bold text-right">+98 912 34 54 003</p>
                        <p className="text-sm text-blue-100">از ۸ صبح تا ۵ غروب - شنبه تا پنجشنبه</p>
                    </div>
                </div>

                  <div className="p-8 lg:p-12">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">درخواست سفارش</h4>
                    <form id="quote-form" className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2"> نام شرکت یا شخص </label>
                                <input type="text" value={req.name} onChange={e => setReq({...req,name : e.target.value})} className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="شرکت شما"/>
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">دسته بندی صنایع</label>
                            <select className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={req.industry} onChange={e => setReq({...req,industry : e.target.value})}>
                                <option>انتخاب صنایع</option>
                                <option value="پتروشیمی">پتروشیمی</option>
                                <option value="دارویی">دارویی</option>
                                <option value="تصفیه آب">تصفیه آب</option>
                                <option value = "کشاورزی">کشاورزی</option>
                                <option value="نساجی">نساجی</option>
                                <option value="مواد غذایی">مواد غذایی</option>
                                <option value="آزمایشگاهی">آزمایشگاهی</option>
                                <option value="رنگ و رزین">رنگ و رزین</option>
                                <option value="موارد دیگر">موارد دیگر</option>
                            </select>
                        </div>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل</label>
                                <input type="email" value={req.email} onChange={e => setReq({...req,email : e.target.value})} className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="email@company.com"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                                <input type="tel" value={req.phone} onChange={e => setReq({...req,phone : e.target.value})} className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+98 XXX XX XX XXX"/>
                            </div>
                        </div>
                        
                       
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">محصولات درخواستی</label>
                            <textarea rows={4} value={req.qoute} onChange={e => setReq({...req,qoute : e.target.value})} className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="فهرست مواد شیمیایی مورد نیاز خود را همراه با مقادیر مشخص ذکر کنید (مثال: اسید سولفوریک ۹۸٪ - ۵۰۰ لیتر، روغن کرچک - ۱۰۰ کیلوگرم)"></textarea>
                        </div>
                        
                       
                        
                        <Button onClick={submit} variant="blue" size="full">
                            ثبت درخواست

                              <i className="mr-2" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-paper-plane w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg></i>
                          
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default RequestQuote