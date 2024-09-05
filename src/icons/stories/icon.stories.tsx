import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import * as Icons from "../../icons";
import { IconItem, IconShowcase } from "./IconShowcase";

const meta: Meta<typeof Icons> = {
  title: "Icons/All Icons",
  argTypes: {
    width: {
      control: "number",
    },
    color: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
} as Meta;

export default meta;

type SVGIcon = React.SVGProps<SVGSVGElement> & {
  pathProps?: React.SVGProps<SVGPathElement>;
};
type IconComponent = React.ComponentType<SVGIcon>;

type Story = StoryObj<IconComponent>;

const IconGrid = ({ width, color, ...args }: SVGIcon) => (
  <IconShowcase>
    {Object.entries(Icons).map(([name, Icon]) => {
      const IconComponent = Icon as IconComponent;
      IconComponent.defaultProps = {
        width,
        color,
        ...args,
      };
      return <IconItem key={name} IconComponent={IconComponent} name={name} />;
    })}
  </IconShowcase>
);

export const AllIcons: Story = {
  args: {
    width: 24,
    className: "text-orange-500",
    pathProps: {
      strokeWidth: 1.5,
    },
  },
  render: (args) => <IconGrid {...args} />,
};
