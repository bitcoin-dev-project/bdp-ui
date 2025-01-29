import React from "react";
import { FooterPartsPrimitiveProps } from "./types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface FooterPublicProps
  extends FooterPartsPrimitiveProps<HTMLAnchorElement> {
  dashboardLink: string;
  entityText?: string;
}

const FooterPublic = ({
  className,
  dashboardLink,
  entityText = "View our public visitor count",
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
      {entityText}
    </a>
  );
};

export default FooterPublic;
