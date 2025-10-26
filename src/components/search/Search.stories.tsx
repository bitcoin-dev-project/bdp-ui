import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";

const meta = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "default", "large"],
      description: "Size of the search input",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the search icon",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    style: { width: "269px" },
  },
};

export const Hover: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    style: { width: "269px" },
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focused: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    defaultValue: "Bitc",
    autoFocus: true,
    style: { width: "269px" },
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Search...",
    defaultValue: "Bitcoin technology",
    style: { width: "269px" },
  },
};

export const WithoutIcon: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    showIcon: false,
    style: { width: "269px" },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    disabled: true,
    style: { width: "269px" },
  },
};

export const Small: Story = {
  args: {
    placeholder: "Search...",
    size: "small",
    style: { width: "200px" },
  },
};

export const Large: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    size: "large",
    style: { width: "350px" },
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    containerClassName: "w-full",
    style: { width: "500px" },
  },
};

export const CustomStyling: Story = {
  args: {
    placeholder: "Custom styled search...",
    inputClassName: "bg-bdp-hover-primary",
    iconClassName: "text-bdp-accent",
    style: { width: "300px" },
  },
};

export const AllStates: Story = {
  args: {
    placeholder: "Decoding Bitcoin....",
    style: { width: "269px" },
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story shows the search component in its default state. You can interact with it to see hover and focus states.",
      },
    },
  },
};
