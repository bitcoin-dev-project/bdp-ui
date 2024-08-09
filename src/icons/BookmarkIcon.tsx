import * as React from "react";
import { SVGProps } from "react";

const BookmarkIcon = ({ width = 25, height, ...props }: SVGProps<SVGSVGElement>) => (
  // height is destructed and unused, scaling is defined by width
  <svg
    width={width}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.75195 20.5604V14.7496C3.75195 10.7459 3.75195 8.74403 4.96226 7.50023C6.17257 6.25644 8.12053 6.25644 12.0164 6.25644C15.9123 6.25644 17.8603 6.25644 19.0707 7.50023C20.2809 8.74403 20.2809 10.7459 20.2809 14.7496V20.5604C20.2809 23.1013 20.2809 24.3717 19.4826 24.8265C17.9365 25.7071 15.0363 22.7691 13.659 21.8845C12.8602 21.3714 12.4608 21.1149 12.0164 21.1149C11.572 21.1149 11.1726 21.3714 10.3739 21.8845C8.9966 22.7691 6.09646 25.7071 4.55035 24.8265C3.75195 24.3717 3.75195 23.1013 3.75195 20.5604Z" stroke="currentColor" stroke-width="1.6529" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.3638 2.95062H12.5676C17.7621 2.95062 20.3595 2.95062 21.9732 4.56437C23.5869 6.1781 23.5869 8.77538 23.5869 13.9699V20.5815" stroke="currentColor" stroke-width="1.6529" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default BookmarkIcon;
