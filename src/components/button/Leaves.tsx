// src/components/Button/Leaves.tsx

import LeafIcon from "../../icons/LeafIcon";
import React from "react";

export interface LeavesProps {
  leavesCount: number;
  onClick?: () => void;
  disabled?: boolean;
  withBorder?: boolean;
  selected?: boolean;
  showLeftOvers?: boolean;
}

export const Leaf: React.FC<LeavesProps> = ({
  leavesCount = 1,
  selected = false,
  withBorder,
  showLeftOvers,
}) => {
  const baseStyles = `rounded-md  w-max py-1 px-2 flex gap-1 `;
  const allStyles = `
  ${baseStyles}
  ${selected ? "bg-brand-green text-white" : " text-brand-green"}
  ${withBorder ? "border border-brand-green" : "border-0"}
  ${showLeftOvers ? "bg-none! hover:bg-none" : "hover:bg-brand-green/30 active:bg-brand-green active:text-white"}
  `.trim();

  const leaves = showLeftOvers
    ? Array.from({ length: 3 }).map((_, i) => ({
        active: i + 1 <= leavesCount,
      }))
    : [];
  return (
    <div className={allStyles} role="button" tabIndex={0}>
      {!showLeftOvers &&
        Array.from({ length: leavesCount }).map((_, i) => <LeafIcon key={i} />)}

      {showLeftOvers &&
        leaves.map((leave, i) => (
          <LeafIcon
            key={i}
            className={`${leave.active ? "text-brand-green" : "text-[#A9A49B99]"}`}
          />
        ))}
    </div>
  );
};
