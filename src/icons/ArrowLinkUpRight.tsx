import * as React from "react";
import { SVGProps } from "react";

const ArrowLinkUpRight = ({
  width = 24,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      d="M17 7.5L6 18.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      {...pathProps}
    />
    <path
      d="M11 6.6315C11 6.6315 16.6335 6.15661 17.4885 7.01152C18.3434 7.86644 17.8684 13.5 17.8684 13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...pathProps}
    />
  </svg>
);

export default ArrowLinkUpRight;
