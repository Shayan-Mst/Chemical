import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "black" | "white"; // two variants
  onClick?: () => void;
};

export default function Button({ children, variant = "black", onClick }: ButtonProps) {
  // Conditional Tailwind classes based on variant
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200";
  const variantClasses =
    variant === "black"
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white text-black hover:bg-gray-200";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
}
