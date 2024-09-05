import * as React from "react";
import { SVGProps } from "react";

const CalendarIcon = ({
  width = 23,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pathProps,
  ...props
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused

  <svg
    width={width}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.2283 2.2829V4.11945M6.20898 2.2829V4.11945"
      stroke="currentColor"
      strokeWidth="1.6529"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7144 12.3839H11.7226M11.7144 16.057H11.7226M15.3834 12.3839H15.3916M8.04541 12.3839H8.05365M8.04541 16.057H8.05365"
      stroke="currentColor"
      strokeWidth="2.20386"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.91309 7.7926H19.5238"
      stroke="currentColor"
      strokeWidth="1.6529"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.99463 11.689C2.99463 7.68781 2.99463 5.6872 4.14442 4.44419C5.29421 3.20117 7.14477 3.20117 10.8459 3.20117H12.5906C16.2917 3.20117 18.1423 3.20117 19.2921 4.44419C20.4419 5.6872 20.4419 7.68781 20.4419 11.689V12.1606C20.4419 16.1618 20.4419 18.1624 19.2921 19.4054C18.1423 20.6484 16.2917 20.6484 12.5906 20.6484H10.8459C7.14477 20.6484 5.29421 20.6484 4.14442 19.4054C2.99463 18.1624 2.99463 16.1618 2.99463 12.1606V11.689Z"
      stroke="currentColor"
      strokeWidth="1.6529"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.4541 7.7926H19.9831"
      stroke="currentColor"
      strokeWidth="1.6529"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CalendarIcon;
