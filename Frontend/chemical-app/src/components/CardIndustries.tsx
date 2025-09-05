import type { FC } from "react"
import type { Industries } from "../types/type"
import { Link } from "react-router-dom"

const CardIndustries : FC<Industries> = ({name , svg , linkPage , color , border}) => {
  return (
   <Link to={linkPage} className="bg-gray-50  group relative rounded-xl p-6 text-center overflow-hidden">
  {/* border animation */}
  <span className={`absolute top-0 right-0 w-0 h-0 border-2 ${border} rounded-xl transition-all duration-500 ease-out group-hover:w-full group-hover:h-full`}></span>

  {/* card content */}
  <div className="relative">
    <div className={`${color}  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
      {svg}
    </div>
    <h5 className="text-lg font-semibold text-gray-900 mb-2">{name}</h5>
  </div>
</Link>
  )
}

export default CardIndustries