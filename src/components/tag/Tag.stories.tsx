import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["guide", "seminar", "tool", "interactive"],
      description: "Type of tag (guide, seminar, tool, interactive)",
    },
    state: {
      control: "select",
      options: ["default", "hover", "selected"],
      description: "Visual state of the tag",
    },
    children: {
      control: "text",
      description: "Tag label text",
    },
    onClick: {
      action: "clicked",
      description: "Callback function when tag is clicked",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guide: Story = {
  args: {
    type: "guide",
    state: "default",
    children: "Guide",
  },
};

export const Seminar: Story = {
  args: {
    type: "seminar",
    state: "default",
    children: "Seminar",
  },
};

export const Tool: Story = {
  args: {
    type: "tool",
    state: "default",
    children: "Tool",
  },
};

export const Interactive: Story = {
  args: {
    type: "interactive",
    state: "default",
    children: "Interactive",
  },
};

export const AllDefault: Story = {
  args: { type: "guide" },
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag type="guide" state="default">
        Guide
      </Tag>
      <Tag type="seminar" state="default">
        Seminar
      </Tag>
      <Tag type="tool" state="default">
        Tool
      </Tag>
      <Tag type="interactive" state="default">
        Interactive
      </Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All tag types in their default state with white background and colored border.",
      },
    },
  },
};

export const AllHover: Story = {
  args: { type: "guide" },
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag type="guide" state="hover">
        Guide
      </Tag>
      <Tag type="seminar" state="hover">
        Seminar
      </Tag>
      <Tag type="tool" state="hover">
        Tool
      </Tag>
      <Tag type="interactive" state="hover">
        Interactive
      </Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All tag types in hover state with light colored background.",
      },
    },
  },
};

export const AllSelected: Story = {
  args: { type: "guide" },
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag type="guide" state="selected">
        Guide
      </Tag>
      <Tag type="seminar" state="selected">
        Seminar
      </Tag>
      <Tag type="tool" state="selected">
        Tool
      </Tag>
      <Tag type="interactive" state="selected">
        Interactive
      </Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All tag types in selected state with solid colored background and white text.",
      },
    },
  },
};

export const AllStatesComparison: Story = {
  args: { type: "guide" },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Default State</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag type="guide" state="default">
            Guide
          </Tag>
          <Tag type="seminar" state="default">
            Seminar
          </Tag>
          <Tag type="tool" state="default">
            Tool
          </Tag>
          <Tag type="interactive" state="default">
            Interactive
          </Tag>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Hover State</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag type="guide" state="hover">
            Guide
          </Tag>
          <Tag type="seminar" state="hover">
            Seminar
          </Tag>
          <Tag type="tool" state="hover">
            Tool
          </Tag>
          <Tag type="interactive" state="hover">
            Interactive
          </Tag>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Selected State</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag type="guide" state="selected">
            Guide
          </Tag>
          <Tag type="seminar" state="selected">
            Seminar
          </Tag>
          <Tag type="tool" state="selected">
            Tool
          </Tag>
          <Tag type="interactive" state="selected">
            Interactive
          </Tag>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Side-by-side comparison of all tag types across their three states: default (white background with colored border), hover (light colored background), and selected (solid colored background with white text).",
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: { type: "guide" },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600">Click to see the state change:</p>
        <Tag type="guide" state="default" onClick={() => alert("Tag clicked!")}>
          Clickable Tag
        </Tag>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tag with onClick handler to demonstrate interactivity.",
      },
    },
  },
};
