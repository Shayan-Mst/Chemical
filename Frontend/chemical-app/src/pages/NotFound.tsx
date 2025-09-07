// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 h-screen w-full bg-cover bg-center not-found">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">صفحه پیدا نشد</h2>
      <p className="text-gray-500 mb-6">
        متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.
      </p>
      <Link
        to="/"
        className=""
      >
        <Button variant="blue" size="">بازگشت به صفحه اصلی</Button>
        
      </Link>
    </div>
  );
}
