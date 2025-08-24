import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "blue" | "orange" | "blueWithBorder";
  size : "full" | "";
  onClick?: () => void;
};

export default function Button({ children, variant = "blue",size = "" , onClick }: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center cursor-pointer text-center px-6 py-4  rounded-md font-medium transition-colors duration-200";

  const variantClasses =
    variant === "blue"
      ? "bg-[var(--bg-secondary)] text-white hover:bg-blue-700"
      : variant === "orange"
      ? "bg-[var(--bg-third)] text-white hover:bg-orange-500"
      : "bg-[var(--bg-secondary)] text-white border-2 border-white hover:bg-white hover:text-[var(--bg-secondary)]"; 

      const sizeClass = size == "full"?"w-full":""
  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClass}`} onClick={onClick}>
      {children}
    </button>
  );
}
