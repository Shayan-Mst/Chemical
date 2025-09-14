
import Button from './Button'

const GetInTouch = () => {
  return (
    <section id="contact-form" className="py-20 bg-bg-secondary">
    <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
            <div className="">
               
                    <h2 className="text-3xl text-center font-bold text-text-primary mb-6">انتقادات و پیشنهادات</h2>
                     
            
                
                <div className="bg-gray-50 rounded-2xl p-8">
                    <form id="contact-form-main">
                       
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="first-name">
                                    نام شخص و یا نام شرکت *
                                </label>
                                <input className="w-full px-4 py-3 border text-text-secondary border-gray-300 rounded-lg  focus:ring-2 focus:ring-primary focus:border-transparent" id="first-name" type="text" required/>
                            </div>
                            
                       
                        
                       
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                    آدرس ایمیل *
                                </label>
                                <input className="w-full px-4 py-3 border text-text-secondary border-gray-300 rounded-lg  focus:ring-2 focus:ring-primary focus:border-transparent" id="email" type="email" required/>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                                    شماره تلفن (اختیاری) 
                                </label>
                                <input className="w-full px-4 py-3 border text-text-secondary border-gray-300 rounded-lg  focus:ring-2 focus:ring-primary focus:border-transparent" id="phone" type="tel"/>
                            </div>
                        </div>
                        
                        
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                پیام گزارش انتقادات و پیشنهادات
                            </label>
                            <textarea className="w-full px-4 py-3 border text-text-secondary border-gray-300 rounded-lg  focus:ring-2 focus:ring-primary focus:border-transparent" id="message" rows={5} placeholder="هرگونه پیگیری و انتقاد و پیشنهادی دارید در اینجا بنویسید ..." required></textarea>
                        </div>
                        
                       <Button variant='orange' size='full'>
                          <i className="ml-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-paper-plane w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg></i>
                        ارسال پیام
                       </Button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default GetInTouch