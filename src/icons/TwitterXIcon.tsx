import * as React from "react";
import { SVGProps } from "react";

const TwitterXIcon = ({
  width = 37,
  height,
  pathProps,
  ...props
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused

  <svg
    width={width}
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.5659 3.46875H33.6657L22.5241 16.2029L35.6313 33.5312H25.3685L17.3302 23.0217L8.13271 33.5312H3.0298L14.9469 19.9106L2.37305 3.46875H12.8965L20.1623 13.0749L28.5659 3.46875ZM26.776 30.4788H29.6019L11.361 6.36092H8.3285L26.776 30.4788Z"
      fill="currentColor"
    />
  </svg>
);

export default TwitterXIcon;
