import * as React from "react";
import { SVGProps } from "react";

const ArrowLinkRight = ({
  width = 24,
  height,
  pathProps,
  ...props
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    width={width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 12.5H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...pathProps}
    />
    <path
      d="M15 17.5C15 17.5 20 13.8176 20 12.5C20 11.1824 15 7.5 15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...pathProps}
    />
  </svg>
);

export default ArrowLinkRight;
