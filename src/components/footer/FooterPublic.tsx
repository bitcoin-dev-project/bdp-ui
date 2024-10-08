import React from "react";
import { FooterPartsPrimitiveProps } from "./types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface FooterPublicProps
  extends FooterPartsPrimitiveProps<HTMLAnchorElement> {
  dashboardLink: string;
}

const FooterPublic = ({
  className,
  dashboardLink,
  ...rest
}: FooterPublicProps) => {
  return (
    <a
      href={dashboardLink}
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        clsx(
          "leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400 underline",
          className,
        ),
      )}
      {...rest}
    >
      View our public visitor count
    </a>
  );
};

export default FooterPublic;
