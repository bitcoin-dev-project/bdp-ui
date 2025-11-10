// src/components/card/BDPCard.tsx

import React from "react";
import { ByBDPBadge } from "../badge";
import { Leaf } from "../button";
import { Tag, TagType } from "../tag";
export interface CardProps {
  title: string;
  description: string;
  bannerColor: string;
  onClick: () => void;
  logo: string;
  link: string;
  difficulty: Difficulty;
  tagList: TagType[];
  byBDP?: boolean;
}
export type Difficulty = "easy" | "medium" | "hard";
enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const BDPCard: React.FC<CardProps> = ({
  difficulty = "easy",
  logo,
  onClick,
  title,
  description,
  bannerColor,
  link,
  tagList,
  byBDP,
}) => {
  const baseStyles = `border border-brand-stroke-on-base p-2 
  flex min-h-[290px] w-full md:max-w-[374px] rounded-2xl  bg-brand-card-bg`;

  const className = `
  ${baseStyles}
  `.trim();

  const convertToLeavesCount = (level: string) => {
    switch (level) {
      case DIFFICULTY.EASY:
        return 1;
      case DIFFICULTY.MEDIUM:
        return 2;
      case DIFFICULTY.HARD:
        return 3;
      default:
        return 0;
    }
  };
  return (
    <a
      href={link}
      target="_blank"
      className={className}
      onClick={onClick}
      rel="noreferrer"
    >
      <div className="flex flex-col rounded-xl border border-brand-stroke-on-base w-full min-h-full bg-brand-card-bg">
        <div
          className={`min-h-[126px] flex border border-l-0 border-r-0 border-t-0
             border-brand-stroke-on-base rounded-lg relative z-0 flex-col items-center justify-center`}
          style={{ backgroundColor: bannerColor }}
        >
          <div>
            <img
              className="w-fit h-fit object-contain max-w-[100px]"
              src={logo}
            />
          </div>

          {byBDP && (
            <div className="absolute bottom-3 left-3">
              <ByBDPBadge />
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="flex flex-col w-full h-full p-2 md:p-3 gap-1.5 md:gap-2 justify-between">
          <div className="flex flex-col gap-1.5 md:gap-2">
            <div className="w-full flex items-start justify-between">
              <h6 className="font-montserrat text-base md:text-lg font-semibold">
                {title}
              </h6>
              <Leaf
                showLeftOvers
                leavesCount={convertToLeavesCount(difficulty)}
              />
            </div>
            <p className="font-light text-sm md:text-base font-quicksand">
              {description}
            </p>
          </div>
          <div className="flex gap-[9px] flex-wrap">
            {tagList &&
              tagList.map((tag) => (
                <Tag className="capitalize" key={tag} type={tag}>
                  {tag}
                </Tag>
              ))}
          </div>
        </div>
      </div>
    </a>
  );
};
