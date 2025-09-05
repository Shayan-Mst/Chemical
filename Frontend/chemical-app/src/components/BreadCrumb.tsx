import { Link, useLocation } from "react-router-dom"

export default function Breadcrumb() {
  const location = useLocation()

  // hide on homepage
  if (location.pathname === "/") return null

  const pathParts = location.pathname.split("/").filter(Boolean)

  // Optional: translate route names to Farsi
  const labels: Record<string, string> = {
    products: "محصولات",
    services: "خدمات",
    about: "درباره ما",
    contact: "تماس با ما",
  }

  return (
    <section id="breadcrumb" className="bg-gray-100 px-8 md:px-6 lg:px-16 xl:px-24 border-b">
      <div className="container mx-auto py-4">
        <div className="flex items-center space-x-2 text-sm">
          {/* Home */}
          <Link
            to="/"
            className="opacity-70 hover:opacity-100 text-black transition-colors"
          >
            صفحه نخست
          </Link>

          {pathParts.map((part, index) => {
            const routeTo = "/" + pathParts.slice(0, index + 1).join("/")
            const isLast = index === pathParts.length - 1
            const label = labels[part] || decodeURIComponent(part)

            return (
              <div key={routeTo} className="flex items-center text-center space-x-2">
                {/* Chevron */}
                <svg
                  className="w-3 h-3 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 
                    0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 
                    0s-12.5-32.8 0-45.3L242.7 256 
                    73.4 86.6c-12.5-12.5-12.5-32.8 
                    0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>

                {isLast ? (
                  <span className="text-bg-secondary font-bold ">{label}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="opacity-70 hover:opacity-100 text-black transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
