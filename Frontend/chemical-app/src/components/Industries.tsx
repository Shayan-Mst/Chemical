import { industries } from "../data/Industries"
import CardIndustries from "./CardIndustries"

const Industries = () => {
  return (
   <section id="industries" className="py-20 bg-white">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4"> <span className='text-bg-third'>راه حلی </span> برای صنعت شما</h3>
       </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
     {industries.map((item,id)=>{
return(
<CardIndustries name={item.name} svg = {item.svg} linkPage={item.linkPage} color={item.color} border= {item.border} key={id}/>
)
     })}

        </div>
    </div>
</section>
  )
}

export default Industries