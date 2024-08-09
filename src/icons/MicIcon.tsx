import * as React from "react";
import { SVGProps } from "react";

const MicIcon = ({
  width = 27,
  height,
  pathProps,
  ...props
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused

  <svg
    width={width}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.179 7.79078V12.1985C19.179 15.2414 16.7122 17.7082 13.6693 17.7082C10.6264 17.7082 8.15967 15.2414 8.15967 12.1985V7.79078C8.15967 4.74789 10.6264 2.28113 13.6693 2.28113C16.7122 2.28113 19.179 4.74789 19.179 7.79078Z"
      stroke="currentColor"
      stroke-width={1.6529 || pathProps?.strokeWidth}
    />
    <path
      d="M19.1793 7.79077H15.8735M19.1793 12.1985H15.8735"
      stroke="currentColor"
      stroke-width={1.6529 || pathProps?.strokeWidth}
      stroke-linecap="round"
    />
    <path
      d="M22.4849 12.1985C22.4849 17.0671 18.5381 21.0139 13.6695 21.0139M13.6695 21.0139C8.80081 21.0139 4.854 17.0671 4.854 12.1985M13.6695 21.0139V24.3197M13.6695 24.3197H16.9752M13.6695 24.3197H10.3637"
      stroke="currentColor"
      stroke-width={1.6529 || pathProps?.strokeWidth}
      stroke-linecap="round"
    />
  </svg>
);

export default MicIcon;
