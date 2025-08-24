

const TopBar = () => {
  return (
  <div className="bg-[var(--bg-primary)] text-white text-sm px-24 py-2 flex justify-between items-center">
      
      {/* Left side: phone + email */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          
          واحد فروش :‌
           
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-1">
         ایمیل : 
          <span>info@mycompany.com</span>
        </div>
      </div>

      {/* Right side: social icons */}
      <div className="flex items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
         instagram
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          linkdin
        </a>
      </div>
      
    </div>
  )
}

export default TopBar