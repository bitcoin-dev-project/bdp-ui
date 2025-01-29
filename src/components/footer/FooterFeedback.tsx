import React from "react";
import { FooterPartsPrimitiveProps } from "./types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface FooterFeedbackProps
  extends FooterPartsPrimitiveProps<HTMLDivElement> {
  feedbackLink: string;
  enitityText?: string;
  entityCtaText?: string;
}

const FooterFeedback = (
  props: React.PropsWithChildren<FooterFeedbackProps>,
) => {
  const { className, children, feedbackLink, enitityText="We'd love to hear your feedback on this project?", entityCtaText="Give feedback", ...rest } = props;
  if (children) {
    <div {...rest} className={props.className}>
      {props.children}
    </div>;
  }
  return (
    <div
      {...rest}
      className={twMerge(
        clsx(
          "leading-none md:leading-tight flex flex-col sm:flex-row items-stretch sm:items-center text-sm text-gray-500 dark:text-gray-400 gap-[20px] md:gap-[24px]",
          className,
        ),
      )}
    >
      <span>{enitityText}</span>
      <a
        href={feedbackLink}
        target="_blank"
        rel="noreferrer"
        className="leading-none w-fit min-w-fit mx-auto text-base font-medium md:font-semibold py-4 px-5 rounded-[10px] text-[#FAFAFA] dark:text-[#292929] bg-[#292929] dark:bg-[#FAFAFA]"
      >
        {entityCtaText}
      </a>
    </div>
  );
};

FooterFeedback.displayName = "FooterFeedback";
export default FooterFeedback;
