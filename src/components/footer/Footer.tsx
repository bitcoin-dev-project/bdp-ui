import React from "react";
import FooterAbout, { FooterAboutProps } from "./FooterAbout";
import FooterFeedback, { FooterFeedbackProps } from "./FooterFeedback";
import { FooterSocials, FooterSocialsProps } from "./FooterSocials";
import FooterPublic, { FooterPublicProps } from "./FooterPublic";
import { FooterPartsPrimitiveProps } from "./types";

export interface FooterRootProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
  separator?: React.ReactElement;
}

const Separator = () => (
  <div className="h-5 border xl:h-6 xl:border-2 border-custom-stroke hidden xl:block" />
);

const Footer: React.FC<FooterRootProps> & {
  About: React.FC<FooterAboutProps>;
  Feedback: React.FC<FooterFeedbackProps>;
  Socials: React.FC<FooterSocialsProps>;
  Public: React.FC<FooterPublicProps>;
} = ({ children, className, separator, ...rest}) => {

  const viewSeparator = separator ?? <Separator />;

  const renderChildrenWithSeparator = () => {
    const newChildren: React.ReactNode[] = [];
    React.Children.forEach(children, (child, index) => {
      if (React.isValidElement(child)) {
        const displayName = (child.type as any).displayName;
        newChildren.push(child);
        if (index < React.Children.count(children) - 1) {
          newChildren.push(React.cloneElement(viewSeparator, { key: `${displayName}-separator-${index}` }));
        }
      }
    });
    return newChildren;
  };

  return (
    <div className={`flex flex-col md:flex-row w-full justify-between sm:items-stretch md:items-center bg-white dark:bg-black gap-[20px] md:gap-[24px] mx-auto max-w-[1920px] p-2 ${className}`} {...rest}>
      {renderChildrenWithSeparator()}
    </div>
  );
};

Footer.About = FooterAbout;
Footer.Feedback = FooterFeedback;
Footer.Socials = FooterSocials;
Footer.Public = FooterPublic;

export { Footer, Separator };
