// src/components/Button/Button.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};
