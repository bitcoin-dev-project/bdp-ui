import React from "react";
import { FooterPartsPrimitiveProps } from "./types";

export interface FooterPublicProps extends FooterPartsPrimitiveProps<HTMLAnchorElement> {
  dshboardLink: string;
}


const FooterPublic = ({ className: classname, dshboardLink, ...rest }: FooterPublicProps) => {
  return (
    <a
      href={dshboardLink}
      target="_blank"
      rel="noreferrer"
      className={`leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400 underline ${classname}`}
      {...rest}
    >
      View our public visitor count
    </a>
  );
};

export default FooterPublic;
