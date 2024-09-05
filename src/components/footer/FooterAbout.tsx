import React from "react";
import { FooterPartsPrimitiveProps } from "./types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface FooterAboutProps
  extends FooterPartsPrimitiveProps<HTMLDivElement> {
  entityLink?: string;
  entityName?: string;
}

const FooterAbout = (props: React.PropsWithChildren<FooterAboutProps>) => {
  const { className, children, entityLink, entityName, ...rest } = props;
  if (children) {
    <div {...rest} className={className}>
      {props.children}
    </div>;
  }

  return (
    <div
      {...rest}
      className={twMerge(
        clsx(
          "leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400",
          className,
        ),
      )}
    >
      Built with <span>🧡</span> by the{" "}
      <a
        href={entityLink ?? "https://bitcoindevs.xyz/"}
        target="_blank"
        rel="noreferrer"
        className="underline font-medium text-custom-brightOrange-100"
      >
        {entityName ?? "Bitcoin Dev Project"}
      </a>
    </div>
  );
};

FooterAbout.displayName = "FooterAbout";
export default FooterAbout;
