import * as React from "react";
import { SVGProps } from "react";
const ArrowLeft = ({
  width = 7,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  pathProps,
  ...props
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => {
  // height is destructed and unused, scaling is defined by width
  return (
    <svg
      width={width}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.354784 5.17724C0.127604 5.39365 0 5.687 0 5.99287C0 6.29873 0.127604 6.59208 0.354784 6.8085L4.92909 11.1621C5.15667 11.3785 5.46529 11.5001 5.78705 11.5C6.10882 11.4999 6.41738 11.3782 6.64485 11.1617C6.87233 10.9452 7.00008 10.6516 7 10.3454C6.99992 10.0393 6.87203 9.74573 6.64445 9.52931L2.92743 5.99287L6.64445 2.45642C6.86554 2.23884 6.98796 1.94734 6.98535 1.64471C6.98274 1.34208 6.8553 1.05254 6.63048 0.83844C6.40566 0.624342 6.10145 0.50282 5.78337 0.500049C5.4653 0.497277 5.1588 0.613478 4.9299 0.823624L0.353974 5.17647L0.354784 5.17724Z"
        fill="currentColor"
        {...pathProps}
      />
    </svg>
  );
};
export default ArrowLeft;
