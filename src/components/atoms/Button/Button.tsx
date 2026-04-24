"use client";

import { Loader } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  height?: string;
  width?: string;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  bgColor?: string;
  bgHoverColor?: string;
}

const Button = ({
  children,
  onClick,
  href,
  type = "button",
  width = "w-full",
  height = "h-[43.93px]",
  disabled = false,
  loading = false,
  bgColor = "bg-[#CF0000] text-white",
  bgHoverColor = "hover:bg-[#CD0200]",
  className = `relative flex items-center justify-center whitespace-nowrap font-semibold px-6 rounded-[10.98px]`,
}: ButtonProps) => {
  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      className={`transform transition-all duration-300 ${className} ${width} ${height} ${bgColor} ${
        loading || disabled
          ? "opacity-40 cursor-not-allowed"
          : `cursor-pointer ${bgHoverColor} hover:scale-[1.02]`
      }`}
      disabled={disabled || loading}
    >
      {loading ? <Loader className="animate-spin w-8 h-8" /> : children}
    </button>
  );

  return href ? (
    <Link href={href} className={`${width}`}>
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );
};

export default Button;
