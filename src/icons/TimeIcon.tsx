import * as React from "react";
import { SVGProps } from "react";

const TimeIcon = ({ width = 14, height, ...props }: SVGProps<SVGSVGElement>) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    width={width}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.9987 0.333984C10.6807 0.333984 13.6654 3.31865 13.6654 7.00065C13.6654 10.6826 10.6807 13.6673 6.9987 13.6673C3.3167 13.6673 0.332031 10.6826 0.332031 7.00065C0.332031 3.31865 3.3167 0.333984 6.9987 0.333984ZM6.9987 1.66732C5.58421 1.66732 4.22766 2.22922 3.22746 3.22941C2.22727 4.22961 1.66536 5.58616 1.66536 7.00065C1.66536 8.41514 2.22727 9.77169 3.22746 10.7719C4.22766 11.7721 5.58421 12.334 6.9987 12.334C8.41319 12.334 9.76974 11.7721 10.7699 10.7719C11.7701 9.77169 12.332 8.41514 12.332 7.00065C12.332 5.58616 11.7701 4.22961 10.7699 3.22941C9.76974 2.22922 8.41319 1.66732 6.9987 1.66732ZM6.9987 3.00065C7.16199 3.00067 7.31959 3.06062 7.44161 3.16913C7.56363 3.27763 7.64159 3.42715 7.6607 3.58932L7.66536 3.66732V6.72465L9.47003 8.52932C9.58959 8.64929 9.65901 8.81027 9.66418 8.97957C9.66935 9.14887 9.60989 9.31379 9.49786 9.44083C9.38584 9.56788 9.22966 9.64752 9.06105 9.66358C8.89243 9.67964 8.72402 9.63092 8.59003 9.52732L8.52736 9.47198L6.52736 7.47198C6.42375 7.36828 6.35721 7.23332 6.33803 7.08798L6.33203 7.00065V3.66732C6.33203 3.49051 6.40227 3.32094 6.52729 3.19591C6.65232 3.07089 6.82189 3.00065 6.9987 3.00065Z"
      fill="#292929"
    />
  </svg>
);
export default TimeIcon;
