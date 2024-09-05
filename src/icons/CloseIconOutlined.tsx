import * as React from "react";
import { SVGProps } from "react";
const CloseIconOutlined = ({
  width = 14,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  ...props
}: SVGProps<SVGSVGElement>) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    width={width}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L13 13M13 1L1 13"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default CloseIconOutlined;
