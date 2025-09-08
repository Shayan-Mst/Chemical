import { type FC } from 'react'
import type { ModalProps } from '../types/type'
import { Link } from 'react-router-dom'

const Modal:FC<ModalProps> = ({isOpen,onClose}) => {


   
  return (
    <>
    {/* Overlay */}
    <div
  className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
/>
<div
  className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
  }`}
>
  <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full relative">
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
    >
      ✕
    </button>

    {/* Success Icon */}
    <div className="flex items-center justify-center mb-4">
      <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>

    {/* Heading */}
    <h2 className="text-center text-xl font-bold mb-4 text-green-600">
      درخواست شما ثبت شد!
    </h2>

    {/* Message Section */}
    <div className="text-center space-y-2">
      <p className="text-gray-700">
        برای پاسخ سریع‌تر بهتر است با ما تماس بگیرید.
      </p>
      <p className="text-gray-900 font-semibold">
        شماره تماس : {" "}
        <Link
          to="tel:+989123454003"
          dir="ltr"
          className="text-blue-600 underline"
        >
          0912 34 54 003
        </Link>
      </p>
    </div>

    {/* Close Button */}
    <button
      onClick={onClose}
      className="mt-6 w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition font-semibold"
    >
      بستن
    </button>
  </div>
</div>

    </>
  )
}

export default Modal