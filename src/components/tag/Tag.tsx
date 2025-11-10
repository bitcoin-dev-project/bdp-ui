import React, { useState } from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import BookIcon from "../../icons/BookIcon";
import MicIcon from "../../icons/MicIcon";
import ToolIcon from "../../icons/ToolIcon";
import TapCursorIcon from "../../icons/TapCursorIcon";

export type TagType = "guide" | "seminar" | "tool" | "interactive";
export type TagState = "default" | "hover" | "selected";

export interface TagProps {
  type: TagType;
  state?: TagState;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  selected?: boolean;
  onSelectChange?: (selected: boolean) => void;
}

const tagConfig = {
  guide: {
    color: "#EC4182", // Pink
    lightColor: "#F5D7E2", // Light Pink
    icon: BookIcon,
  },
  seminar: {
    color: "#7762B9", // Purple
    lightColor: "#CABFEF", // Light Purple
    icon: MicIcon,
  },
  tool: {
    color: "#396BEB", // Blue
    lightColor: "#D1E2F3", // Light Blue
    icon: ToolIcon,
  },
  interactive: {
    color: "#CC7400", // Yellow/Orange
    lightColor: "#ECD4B5", // Light Yellow
    icon: TapCursorIcon,
  },
} as const;

export const Tag: React.FC<TagProps> = ({
  type,
  state,
  onClick,
  className,
  children,
  selected: controlledSelected,
  onSelectChange,
}) => {
  const config = tagConfig[type];
  const Icon = config.icon;

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

  const renderIconColor =
    effectiveState === "selected" ? "white" : config.color;
  const renderBackgroundColor =
    effectiveState === "selected"
      ? config.color
      : effectiveState === "hover"
        ? config.lightColor
        : "transparent";
  const renderBorderColor = config.color;

  return (
    <div
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 transition-all duration-200 cursor-pointer border text-sm rounded-[6px]",
        "hover:brightness-95",
        className,
      )}
      data-state={effectiveState}
      data-type={type}
      style={{
        backgroundColor: renderBackgroundColor,
        borderColor: renderBorderColor,
        borderWidth: "1px",
        ...(!isForcedState && {
          "--hover-bg": config.lightColor,
          "--hover-border": config.color,
        }),
      }}
      onMouseEnter={(e) => {
        if (!isForcedState && !isSelected) {
          const target = e.currentTarget;
          target.style.backgroundColor = config.lightColor;
          target.style.borderColor = config.color;
        }
      }}
      onMouseLeave={(e) => {
        if (!isForcedState && !isSelected) {
          const target = e.currentTarget;
          target.style.backgroundColor = renderBackgroundColor;
          target.style.borderColor = renderBorderColor;
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
      <Icon width={16} style={{ color: renderIconColor }} />
      <span style={{ color: renderIconColor }}>{children}</span>
    </div>
  );
};
