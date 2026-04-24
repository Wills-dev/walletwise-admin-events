"use client";

import Image from "next/image";

interface InputProps {
  icon?: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({
  placeholder = "",
  onChange,
  value,
  type,
  icon,
  name,
}: InputProps) => {
  return (
    <input
      style={{ fontSize: "16px" }}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className="border-b border-[#b1aca7] focus:border-[#f4b06f] transition-all duration-300 w-full outline-none placeholder:text-white/40 placeholder:font-light text-white/70 h-9.75 text-[14px] md:text-[15px] leading-none tracking-[0.4px] md:tracking-[0.6px]"
      placeholder={placeholder}
    />
  );
};

export default Input;
