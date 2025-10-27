// src/components/Button/Button.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { LeavesProps, Leaf } from "./Leaves";

export default {
  title: "Components/Leaves",
  component: Leaf,
  argTypes: {
    variant: {
      control: { type: "select", options: [1, 2, 3] },
    },
    selected: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<LeavesProps> = (args) => <Leaf {...args} />;

export const OneLeaf = Template.bind({});
OneLeaf.args = {
  leavesCount: 1,
};

export const TwoLeaf = Template.bind({});
TwoLeaf.args = {
  leavesCount: 1,
  selected: true,
};
