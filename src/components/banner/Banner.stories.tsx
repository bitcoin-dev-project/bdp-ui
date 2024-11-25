import React from "react";
import { Meta } from "@storybook/react";

import { Banner } from "./Banner";

export default {
  title: "Components/Banner",
  argTypes: {
    colorMode: {
      control: { type: "radio" },
      options: ["light", "dark"],
      defaultValue: "light",
    },
  },
} as Meta;

export const UnmodifiedBanner = (args: { colorMode: "light" | "dark" }) => {
  const { colorMode } = args;
  const isDark = colorMode === "dark";

  return (
    <div
      className={`${isDark ? "dark" : ""} bg-bdp-background w-full h-[90vh]`}
    >
      <Banner
        headingText="Start your career in bitcoin open source —"
        linkText="APPLY TODAY"
        linkTo="/"
        hasBoss
      />
    </div>
  );
};
