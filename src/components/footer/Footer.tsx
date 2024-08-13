import React from "react";
import { FooterPartsPrimitiveProps } from "./types";

interface FooterRootProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
  separator?: React.ReactElement;
}

export const Separator = () => (
  <div className="h-5 border xl:h-6 xl:border-2 border-custom-stroke hidden xl:block" />
);

const Footer = ({ children, className, separator, ...rest}: React.PropsWithChildren<FooterRootProps>) => {

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
    <div>
      <div className="flex w-full justify-between items-center">
        {renderChildrenWithSeparator()}
      </div>
    </div>
  );
};

export default Footer;