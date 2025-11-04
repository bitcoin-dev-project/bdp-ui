// src/components/Card/BDPCard.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BDPCard, CardProps } from "./BDPCard";

export default {
  title: "Components/Card",
  component: BDPCard,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<CardProps> = (args) => <BDPCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  bannerColor: "#D5BBA4",
  logo: "whitepaper.png",
  difficulty: "easy",
  title: "Bitcoin TLDR",
  description:
    "The foundational document that introduced Bitcoin, explaining its decentralized, P2P, electronic cash system.",
  tagList: ["guide", "interactive"],
};
export const MediumDifficulty = Template.bind({});

MediumDifficulty.args = {
  bannerColor: "#0E9158",
  logo: "good-first-issues.png",
  difficulty: "medium",
  title: "Good first issues",
  byBDP: true,
  description:
    "Discover beginner-friendly issues from BOSS projects to start contributing today.",
  tagList: ["tool"],
};
