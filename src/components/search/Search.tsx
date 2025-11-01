import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { RebrandSearchIcon } from "../../icons";

export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  containerClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  showIcon?: boolean;
  size?: "small" | "default" | "large";
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      containerClassName,
      inputClassName,
      iconClassName,
      showIcon = true,
      size = "default",
      placeholder = "Decoding Bitcoin....",
      className,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const sizeStyles = {
      small: {
        container: "h-7",
        input: "pl-7 pr-2 py-1 text-sm",
        icon: "w-3.5 h-3.5 left-2",
      },
      default: {
        container: "h-8",
        input: "pl-8 pr-2.5 py-2 text-base",
        icon: "w-4 h-4 left-2",
      },
      large: {
        container: "h-10",
        input: "pl-10 pr-3 py-2.5 text-lg",
        icon: "w-5 h-5 left-2.5",
      },
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={cn(
          "relative inline-flex items-center",
          sizeStyles[size].container,
          containerClassName,
        )}
      >
        {showIcon && (
          <RebrandSearchIcon
            className={cn(
              "absolute pointer-events-none",
              sizeStyles[size].icon,
              iconClassName,
            )}
            style={{ filter: "brightness(0)" }}
          />
        )}
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "w-full h-full rounded-lg",
            "font-normal leading-none",
            "font-quicksand",
            "text-[#6C6C6C] placeholder:text-[#6C6C6C]",
            isFocused ? "text-black placeholder:text-[#6C6C6C]" : "",
            "border border-[#E1DBD0]",
            "outline-none",
            "bg-[#EFE9DE]",
            "hover:bg-[#E1DBD0]",
            isFocused ? "bg-[#E1DBD0]" : "",
            "transition-colors duration-200",
            showIcon ? sizeStyles[size].input : "px-3 py-2",
            inputClassName,
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Search.displayName = "Search";

Search.propTypes = {
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  showIcon: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default", "large"]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
