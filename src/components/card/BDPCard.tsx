// src/components/card/BDPCard.tsx

import React from "react";
export interface CardProps {
  difficulty?: "easy" | "medium" | "hard";
  byBDP?: boolean;
  onClick: ()=> void;
  link:string;
}

export const BDPCard: React.FC<CardProps> = ({
  difficulty="easy",
  onClick,
  link
}) => {
  const baseStyles = "min-h";

  const className = `
  ${baseStyles}
  `.trim();

  return (
    <a href={link} className={className} onClick={onClick}>
     
    </a>
  );
};
