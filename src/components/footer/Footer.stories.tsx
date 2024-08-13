// src/components/Button/Button.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
// import * as Footer from '../footer';

import Footer from "../footer";

export default {
  title: "Components/Footer",
};

export const UnModifiedFooter = () => {
  return (
    <Footer>
      <Footer.Socials
        platforms={[
          {
            entity: "github",
            entityLink: "https://github.com/bitcoindevs",
            enitityName: "Github",
            iconProps: {
              className: "hover:text-orange-400"
            }
          },
          {
            entity: "discord",
            entityLink: "https://discord.gg/bitcoindev",
            enitityName: "Discord",
            iconProps: {
              className: "hover:text-orange-400"
            }
          },
          {
            entity: "twitter",
            entityLink: "https://twitter.com/bitcoindevs",
            enitityName: "Twitter",
            iconProps: {
              className: "hover:text-orange-400"
            }
          },
          {
            entity: "nostr",
            entityLink: "https://discord.gg/bitcoindevs",
            enitityName: "Discord",
            iconProps: {
              className: "hover:text-orange-400"
            }
          },
        ]}
      />
      <Footer.Public dshboardLink="https://visits.bitcoindevs.xyz/share/0Beh7BUzocqrtgA5/bitcoin-search" />
      <Footer.About
        entityLink="https://bitcoindevs.xyz"
        entityName="Bitcoin Dev Project"
      />
      <Footer.Feedback />
    </Footer>
  );
};
