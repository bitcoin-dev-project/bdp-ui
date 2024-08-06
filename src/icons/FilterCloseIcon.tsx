import * as React from "react";
import { SVGProps } from "react";
const FilterCloseIcon = ({ width = 20, height, ...props }: SVGProps<SVGSVGElement>) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    width={width}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.93317 16.6L3.33317 10L9.93317 3.4L11.1082 4.58333L6.52484 9.16666H18.3332V10.8333H6.52484L11.1165 15.4167L9.93317 16.6ZM3.33317 10V1.66666H1.6665V18.3333H3.33317V10Z"
      fill="currentColor"
    />
  </svg>
);
export default FilterCloseIcon;
