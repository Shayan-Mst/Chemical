import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "blue" | "orange"; // two variants
  onClick?: () => void;
};

export default function Button({ children, variant = "blue", onClick }: ButtonProps) {
  // Conditional Tailwind classes based on variant
const baseClasses =
  "flex items-center  text-center px-6 py-4 text-white rounded-md font-medium transition-colors duration-200 ";
 const variantClasses =
    variant === "blue"
      ? "bg-[var(--bg-secondary)]  hover:bg-blue-700"
      : "bg-[var(--bg-third)]  hover:bg-orange-200";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
}
