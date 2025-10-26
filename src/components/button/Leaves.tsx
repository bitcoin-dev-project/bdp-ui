// src/components/Button/Leaves.tsx

import LeafIcon from "../../icons/LeafIcon";
import React from "react";

export interface LeavesProps {
  onClick?: () => void;
  disabled?: boolean;
  withBorder?: boolean;
  leavesCount: number;
  selected?: boolean;
}

export const Leaf: React.FC<LeavesProps> = ({ leavesCount = 1, selected=false }) => {
  const baseStyles = `rounded-md border border-brand-green w-max py-1 px-2 flex gap-1 hover:bg-brand-green/30 active:bg-brand-green active:text-white`
  const allStyles =  `
  ${baseStyles}
  ${selected ? "bg-brand-green text-white": " text-brand-green"}
  `.trim();

  return <div className={allStyles} role="button" tabIndex={0}>
    {Array.from({length:leavesCount}).map((_,i)=>
        <LeafIcon key={i} />
    )}
  </div>;
};

