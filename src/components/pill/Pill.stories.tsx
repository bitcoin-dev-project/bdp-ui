import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./Pill";

const meta = {
  title: "Components/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "hover", "selected"],
      description: "Visual state of the pill",
    },
    children: {
      control: "text",
      description: "Pill label text",
    },
    onClick: {
      action: "clicked",
      description: "Callback function when pill is clicked",
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
    children: "Learn",
  },
};

export const Hover: Story = {
  args: {
    state: "hover",
    children: "Learn",
  },
};

export const Selected: Story = {
  args: {
    state: "selected",
    children: "Learn",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Pill : default</h3>
        <Pill state="default">Learn</Pill>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Pill : hover</h3>
        <Pill state="hover">Learn</Pill>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Pill : Selected</h3>
        <Pill state="selected">Learn</Pill>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All pill states: default (light background), hover (medium background), and selected (dark background with white text).",
      },
    },
  },
};

export const AllStatesInline: Story = {
  render: () => (
    <div className="flex gap-4 items-center p-8">
      <Pill state="default">Learn</Pill>
      <Pill state="hover">Learn</Pill>
      <Pill state="selected">Learn</Pill>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All pill states displayed in a row for comparison.",
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600">Click to toggle the state:</p>
      <Pill onClick={() => console.log("Pill clicked!")}>Clickable Pill</Pill>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive pill that changes state when clicked. Try hovering and clicking!",
      },
    },
  },
};

export const MultiplePills: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Pill>Learn</Pill>
      <Pill>Discover</Pill>
      <Pill>Explore</Pill>
      <Pill>Build</Pill>
      <Pill>Create</Pill>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple pills with different text labels.",
      },
    },
  },
};

export const WithCustomText: Story = {
  args: {
    children: "Custom Text",
  },
};
