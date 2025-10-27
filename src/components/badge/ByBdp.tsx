import React from "react";
import { Pangolins } from "../../icons";

export const ByBDPBadge = () => {
  return (
    <div className="shadow-by-bdp text-brand-dark-100 border border-[#A9A49B] w-fit flex gap-1 p-1 rounded-md items-center bg-[#F6F0E6]">
      <Pangolins />
      <span className="font-quicksand font-bold text-[11px] ">By BDP</span>
    </div>
  );
};
