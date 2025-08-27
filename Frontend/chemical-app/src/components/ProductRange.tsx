
import Button from './Button'
import CardRange from './CardRange'
import { productRange } from '../data/productRange'

const ProductRange = () => {
  return (
   <section id="products" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">دامنه <span className='text-[var(--bg-third)]'>محصولات</span> ما</h3>
            <p className=" text-gray-600 max-w-3xl mx-auto">انتخابی جامع از مواد شیمیایی صنعتی برای تمامی صنایع و کاربردها</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
             {productRange.map((item, index) => (
        <CardRange
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          products={item.products}
        />
      ))}
           
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8 ">
                <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">مجموعه کامل مواد شیمیایی</h4>
                    <p className="text-gray-600 mb-6">از مواد شیمیایی صنعتی پایه تا ترکیبات تخصصی، ما موجودی گسترده‌ای داریم تا تمامی نیازهای شما را برآورده کنیم.</p>
                    <div className="grid sm:grid-cols-2 gap-4 my-4">
                        <div className="flex items-center">
                            <i className="text-[var(--bg-secondary)] ml-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-vial" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vial" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"></path></svg></i>
                            <span className="text-gray-700">هیدروکسید سدیم (NaOH)</span>
                        </div>
                        <div className="flex items-center">
                            <i className="text-[var(--bg-secondary)] ml-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-vial"  width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vial" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"></path></svg></i>
                            <span className="text-gray-700">ترکیبات آمونیوم</span>
                        </div>
                        <div className="flex items-center">
                            <i className="text-[var(--bg-secondary)] ml-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-vial"  width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vial" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"></path></svg></i>
                            <span className="text-gray-700">حلال‌های آلی</span>
                        </div>
                        <div className="flex items-center">
                            <i className="text-[var(--bg-secondary)] ml-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-vial"  width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vial" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"></path></svg></i>
                            <span className="text-gray-700">معرف‌های آزمایشگاهی</span>
                        </div>
                    </div>

                     <Button variant='orange' size=''>
                    
                          <i className="ml-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-download" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></i>
                  
                    
                     دانلود کامل کاتالوگ </Button>
                </div>
                <div className="text-center">
                    <img className="w-full h-64 rounded-lg object-cover mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/300f3ada00-c7088277f82d47f66f70.png" alt="chemical warehouse with organized storage tanks and safety equipment, industrial setting"/>
                  
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ProductRange