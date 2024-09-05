import * as React from "react";
import { SVGProps } from "react";

const AuthorIcon = ({
  width = 20,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  ...props
}: SVGProps<SVGSVGElement>) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    width={width}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.0052 9.77354C11.8049 9.77354 13.3535 8.1664 13.3535 6.07354C13.3535 4.00639 11.7963 2.47461 10.0052 2.47461C8.21382 2.47461 6.65703 4.03997 6.65703 6.09068C6.65703 8.1664 8.21417 9.77354 10.0052 9.77354ZM4.74846 17.5246H15.262C16.5763 17.5246 17.0449 17.1482 17.0449 16.4114C17.0449 14.2518 14.3413 11.2721 10.0052 11.2721C5.66096 11.2721 2.95703 14.2518 2.95703 16.4114C2.95703 17.1482 3.42596 17.5246 4.74846 17.5246Z"
      fill="currentColor"
    />
  </svg>
);

export default AuthorIcon;
