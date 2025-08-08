import * as React from "react";
import { SVGProps } from "react";

const LinkedinIcon = ({
  width = 52,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  ...props
}: SVGProps<SVGSVGElement>) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x={2} y={9} width={4} height={12} />
    <circle cx={4} cy={4} r={2} />
  </svg>
);

export default LinkedinIcon;
