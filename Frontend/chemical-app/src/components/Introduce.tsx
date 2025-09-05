
import { Link } from 'react-router-dom'
import Button from './Button'

const Introduce = () => {
  return (
   <section id="hero" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 h-[900x] lg:h-[650px] relative overflow-hidden">
    <div className="absolute inset-1 bg-black/20"></div>
    <div className="container mx-auto px-6 h-full flex my-16 relative ">
        <div className="grid lg:grid-cols-2 gap-12  w-full">
            <div className="text-white">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    مواد
                    <span className="text-bg-third"> شیمیایی </span>
                    صنعتی برای کسب و کار شما
                </h2>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                   تأمین مطمئن مواد شیمیایی صنعتی با کیفیت برتر؛ همراه با زنجیره تأمین پایدار و پشتیبانی    </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <Button variant='orange' size=''>
                         <i className="ml-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-cart-shopping" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                   
                       جستجوی محصولات
                        
                   </Button>
                   
                   <Button variant='blueWithBorder' size='' onClick={() => (window.location.href = "tel:+989123454003")}>
                    
                      <i className="ml-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                    تماس بگیرید
                  
                   </Button>
            
                </div>
            </div>
            <div className="lg:block">
                <img className="w-full h-96 rounded-2xl object-cover shadow-2xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/517c791656-4619c80d0dfec879d4a2.png" alt="modern industrial chemical facility with storage tanks and laboratory equipment, professional photography"/>
            </div>
        </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
</section>
  )
}

export default Introduce