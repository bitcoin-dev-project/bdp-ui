import React, { useState } from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export type PillState = "default" | "hover" | "selected";

export interface PillProps {
  state?: PillState;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  selected?: boolean;
  onSelectChange?: (selected: boolean) => void;
}

// Figma design colors
const pillColors = {
  default: {
    backgroundColor: "transparent",
    textColor: "rgba(32, 30, 30, 0.6)", // #201E1E at 60% opacity
    borderColor: "rgba(32, 30, 30, 0.6)", // #201E1E at 60% opacity
  },
  hover: {
    backgroundColor: "rgba(169, 164, 155, 0.3)", // #A9A49B at 30% opacity
    textColor: "rgba(32, 30, 30, 0.6)", // #201E1E at 60% opacity
    borderColor: "rgba(32, 30, 30, 0.6)", // #201E1E at 60% opacity
  },
  selected: {
    backgroundColor: "#201E1E", // Solid dark color
    textColor: "#F6F0E6", // Light beige text
    borderColor: "#201E1E", // Solid dark border
  },
} as const;

export const Pill: React.FC<PillProps> = ({
  state,
  onClick,
  className,
  children,
  selected: controlledSelected,
  onSelectChange,
}) => {
  const [internalSelected, setInternalSelected] = useState(false);

  const isSelected =
    controlledSelected !== undefined ? controlledSelected : internalSelected;

  const effectiveState = state ?? (isSelected ? "selected" : "default");
  const isForcedState =
    effectiveState === "selected" || effectiveState === "hover";

  const handleClick = () => {
    if (state === undefined) {
      const newSelected = !isSelected;
      setInternalSelected(newSelected);
      onSelectChange?.(newSelected);
    }
    onClick?.();
  };

  const colors = pillColors[effectiveState];

  return (
    <div
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center px-2 py-1 transition-all duration-200 cursor-pointer border text-sm font-medium",
        className,
      )}
      style={{
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        color: colors.textColor,
        borderWidth: "1px",
        borderRadius: "12px",
      }}
      data-state={effectiveState}
      onMouseEnter={(e) => {
        if (!isForcedState && !isSelected) {
          const target = e.currentTarget;
          target.style.backgroundColor = pillColors.hover.backgroundColor;
          target.style.borderColor = pillColors.hover.borderColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!isForcedState && !isSelected) {
          const target = e.currentTarget;
          target.style.backgroundColor = colors.backgroundColor;
          target.style.borderColor = colors.borderColor;
        }
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <span>{children}</span>
    </div>
  );
};

Pill.propTypes = {
  state: PropTypes.oneOf(["default", "hover", "selected"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.bool,
  onSelectChange: PropTypes.func,
};
