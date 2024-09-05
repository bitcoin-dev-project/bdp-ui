import * as React from "react";
import { SVGProps } from "react";

const NightIcon = ({
  width = 12,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  pathProps,
  ...svgProps
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    width={width}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M11.3995 6.58487L11.3994 6.58653C11.0986 9.29321 8.79971 11.3991 6.01455 11.3991C4.57853 11.3991 3.20131 10.8286 2.18589 9.81317C1.17046 8.79775 0.6 7.42053 0.6 5.98451C0.6 3.19695 2.70595 0.901114 5.40619 0.601129C5.43566 0.599751 5.44864 0.606262 5.45316 0.608761C5.46036 0.612739 5.46925 0.620338 5.47679 0.633729C5.49367 0.663687 5.48983 0.691313 5.47637 0.711355L5.47624 0.711266L5.46876 0.722976C5.05448 1.37176 4.8131 2.15169 4.8131 2.97723L4.8131 2.97771C4.8137 3.73245 5.01715 4.47317 5.40216 5.12233C5.78717 5.77149 6.33959 6.30523 7.0016 6.6677C7.66361 7.03018 8.41088 7.20805 9.1652 7.18271C9.91757 7.15744 10.6494 6.93093 11.2844 6.52681C11.3123 6.5101 11.3278 6.50998 11.333 6.51013C11.3411 6.51036 11.3524 6.51299 11.3652 6.52137C11.3946 6.54069 11.4017 6.56622 11.3995 6.58487Z"
      fill="none"
      stroke="currentColor"
      {...pathProps}
      strokeWidth="1"
    />
  </svg>
);

export default NightIcon;
