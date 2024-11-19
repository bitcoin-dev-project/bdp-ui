import * as React from "react";
import { SVGProps } from "react";
const ArrowUp = ({
  width = 12,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  pathProps,
  ...props
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => {
  // height is destructed and unused, scaling is defined by width
  return (
    <svg
      width={width}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2385 0.854784C7.01816 0.627604 6.71947 0.5 6.40804 0.5C6.09662 0.5 5.79793 0.627604 5.57759 0.854784L1.14482 5.42909C0.924461 5.65667 0.800708 5.96529 0.800781 6.28705C0.800855 6.60882 0.924748 6.91738 1.14521 7.14485C1.36567 7.37233 1.66463 7.50008 1.97634 7.5C2.28804 7.49992 2.58695 7.37203 2.8073 7.14445L6.40804 3.42743L10.0088 7.14445C10.2303 7.36554 10.5271 7.48796 10.8353 7.48535C11.1434 7.48274 11.4382 7.3553 11.6562 7.13048C11.8742 6.90566 11.9979 6.60145 12.0007 6.28337C12.0036 5.9653 11.8852 5.6588 11.6713 5.4299L7.23929 0.853974L7.2385 0.854784Z"
        fill="currentColor"
        {...pathProps}
      />
    </svg>
  );
};
export default ArrowUp;
