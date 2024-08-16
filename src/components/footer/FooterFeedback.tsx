import React from "react";
import { FooterPartsPrimitiveProps } from "./types";

interface FooterFeedbackProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
  feedbackLink: string;
}

const FooterFeedback = (
  props: React.PropsWithChildren<FooterFeedbackProps>
) => {
  const { className: classname, children, feedbackLink, ...rest } = props;
  if (children) {
    <div {...rest} className={props.className}>
      {props.children}
    </div>;
  }
  return (
    <div
      {...rest}
      className={`flex flex-col md:flex-row items-stretch md:items-center text-sm text-gray-500 dark:text-gray-400 gap-[24px] md:gap-3 ${classname}`}
    >
      <span>We&apos;d love to hear your feedback on this project?</span>
      <a
        href={feedbackLink}
        target="_blank"
        rel="noreferrer"
        className="leading-none w-fit min-w-fit mx-auto text-base font-semibold py-4 px-5 rounded-[10px] text-[#FAFAFA] dark:text-[#292929] bg-[#292929] dark:bg-[#FAFAFA]"
        >
        Give Feedback
      </a>
    </div>
  );
};

FooterFeedback.displayName = "FooterFeedback";
export default FooterFeedback;
