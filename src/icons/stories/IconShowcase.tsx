import React from "react";

export const IconShowcase = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {children}
      </div>
    </div>
  );
};

export const IconItem = ({
  IconComponent,
  name,
}: {
  IconComponent: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      pathProps?: React.SVGProps<SVGPathElement>;
    }
  >;
  name: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="flex items-center justify-center h-24 bg-[#ddd] group-hover:bg-black transition-colors">
        <IconComponent className="w-10 h-10 group-hover:text-[#fff] transition-colors" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-center text-[#ddd] group-hover:text-black transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
};
