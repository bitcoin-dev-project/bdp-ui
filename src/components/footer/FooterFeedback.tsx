import React from "react";
import { FooterPartsPrimitiveProps } from "./types";

interface FooterFeedbackProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
  entityLink?: string;
}

const FooterFeedback = (
  props: React.PropsWithChildren<FooterFeedbackProps>
) => {
  const { className: classname, children, entityLink, ...rest } = props;
  if (children) {
    <div {...rest} className={props.classname}>
      {props.children}
    </div>;
  }
  return (
    <div
      {...rest}
      className={`flex items-center text-sm text-gray-500 dark:text-gray-400 gap-3 ${classname}`}
    >
      <span>We&apos;d love to hear your feedback on this project?</span>
        <a
          href={entityLink ?? "https://bitcoindevs.xyz/"}
          target="_blank"
          rel="noreferrer"
          className="text-md font-semibold py-4 px-5 rounded-lg text-[#FAFAFA] dark:text-[#292929] bg-[#292929] dark:bg-[#FAFAFA]"
          >
          Give Feedback
        </a>
    </div>
  );
};

FooterFeedback.displayName = "FooterFeedback";
export default FooterFeedback;
