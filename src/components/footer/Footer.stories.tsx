import React from "react";
import { Meta } from "@storybook/react";

import { Footer } from "../footer";

export default {
  title: "Components/Footer",
  argTypes: {
    colorMode: {
      control: { type: "radio" },
      options: ["light", "dark"],
      defaultValue: "light",
    },
  },
} as Meta;

export const UnModifiedFooter = (args: {
  colorMode: "light" | "dark";
}) => {
  const { colorMode } = args;
  const isDark = colorMode === "dark";
  return (
    <div className={isDark ? "dark" : ""}>
      <Footer>
        <Footer.Socials
          platforms={[
            {
              entity: "github",
              entityLink: "https://github.com/bitcoindevs",
              iconProps: {
                className: "hover:text-orange-400",
              },
            },
            {
              entity: "discord",
              entityLink: "https://discord.gg/bitcoindev",
              iconProps: {
                className: "hover:text-orange-400",
              },
            },
            {
              entity: "twitter",
              entityLink: "https://twitter.com/bitcoindevs",
              iconProps: {
                className: "hover:text-orange-400",
              },
            },
            {
              entity: "nostr",
              entityLink: "https://discord.gg/bitcoindevs",
              iconProps: {
                className: "hover:text-orange-400",
              },
            },
          ]}
        />
        <Footer.Public dashboardLink="https://visits.bitcoindevs.xyz/share/0Beh7BUzocqrtgA5/bitcoin-search" />
        <Footer.About
          entityLink="https://bitcoindevs.xyz"
          entityName="Bitcoin Dev Project"
        />
        <Footer.Feedback feedbackLink="https://bitcoindevs.xyz/" />
      </Footer>
    </div>
  );
};
