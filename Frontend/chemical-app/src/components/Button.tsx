import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "blue" | "orange" | "blueWithBorder"; // three variants
  onClick?: () => void;
};

export default function Button({ children, variant = "blue", onClick }: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center cursor-pointer text-center px-6 py-4  rounded-md font-medium transition-colors duration-200";

  const variantClasses =
    variant === "blue"
      ? "bg-[var(--bg-secondary)] text-white hover:bg-blue-700"
      : variant === "orange"
      ? "bg-[var(--bg-third)] text-white hover:bg-orange-500"
      : "bg-[var(--bg-secondary)] text-white border-2 border-white hover:bg-white hover:text-[var(--bg-secondary)]"; 

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
}
