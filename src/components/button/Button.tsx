// src/components/Button/Button.tsx

import React from "react";
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "navigation" | "rebrand";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className: customClass,
}) => {
  const baseStyles = "font-bold";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 py-2 px-4 text-gray-800",
    navigation: `border-brand-gray-100/60 rounded-lg bg-transparent border py-1 px-2 text-brand-gray-100/60
    hover:bg-brand-gray-200/20 active:bg-brand-gray-100/60 active:text-brand-gray-400 active:border-0
    `,
    rebrand:
      "bg-brand-orange-100 text-brand-light-100 px-2 py-2.5 rounded-lg font-bold hover:bg-brand-dark-100 w-full",
    custom: `${customClass}`,
  };
  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const className = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `.trim();

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
