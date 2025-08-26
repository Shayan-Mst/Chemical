import { type FC } from 'react'
import Button from './Button'
import type { ProductRange } from '../types/type'

const CardRange: FC<ProductRange> = ({ image, title, description, products }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-bold text-gray-900 mb-4">{title}</h4>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-2 mb-6">
          {products.map((product, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <svg
                className="text-green-500 ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 
                 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 
                 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 
                 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
              </svg>
              {product}
            </div>
          ))}
        </div>

        <Button variant="blue" size="full">
          درخواست سفارش
          <svg
            className="mr-2 w-5 h-5 transition-all duration-300 group-hover:-translate-x-3 group-hover:opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <polyline
              fill="none"
              points="7.6 7 2.5 12 7.6 17"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <line
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21.5"
              x2="4.8"
              y1="12"
              y2="12"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default CardRange