import React from "react";
import { FooterPartsPrimitiveProps } from "./types";
import { TwitterXIcon, GithubIcon, DiscordIcon, NostrIcon } from "../../icons";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type SupportedSocialMedia = "twitter" | "github" | "discord" | "nostr";

type ManadatorySocialMediaProps<T> = {
  entityLink: string;
  iconProps?: React.SVGProps<SVGSVGElement>;
} & T;


type SocialMediaProps =
  | ManadatorySocialMediaProps<{
      entity: SupportedSocialMedia;
      icon?: React.ReactElement;
    }>
  | ManadatorySocialMediaProps<{
      entity: Exclude<string, SupportedSocialMedia>;
      icon: React.ReactElement;
    }>;

export interface FooterSocialsProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
  platforms: SocialMediaProps[];
}

const Platform = ({ platform }: { platform: SocialMediaProps }) => {
  const { entity, entityLink, icon, iconProps } = platform;
  const { className, ...rest } = iconProps ?? {};
  const getIcon = (entity: SocialMediaProps["entity"]) => {
    if (icon) {
      return React.cloneElement(icon, { ...rest, className });
    }
    if (entity === "twitter") {
      return <TwitterXIcon className={twMerge(clsx('w-full', className))} {...rest} />;
    }
    if (entity === "github") {
      return <GithubIcon className={twMerge(clsx('w-full', className))} {...rest} />;
    }
    if (entity === "discord") {
      return <DiscordIcon className={twMerge(clsx('w-full', className))} {...rest} />;
    }
    if (entity === "nostr") {
      return <NostrIcon className={twMerge(clsx('w-full', className))} {...rest} />;
    }
  };
  const iconElement = getIcon(entity);

  return (
    <div className="flex items-center justify-center w-full max-w-[40px] min-w-[24px]">
      <a
        href={entityLink}
        target="_blank"
        rel="noreferrer"
        className="underline font-medium"
      >
        {iconElement}
      </a>
    </div>
  );
};

/**
 * FooterSocials Component
 * @description Renders social media icons with links in the footer.
 * @param {FooterSocialsProps} props - The component props
 * @param {SocialMediaProps[]} props.platforms - Array of social media platform configurations
 * @remarks
 * Provides corresponding icons for twitter, github, discord, and nostr entities.
 * If a custom string is passed as entity, the icon prop is required.
 */

export const FooterSocials = (
  props: React.PropsWithChildren<FooterSocialsProps>
) => {
  const { className: classname, children, platforms, ...rest } = props;
  if (children) {
    <div {...rest} className={classname}>
      {props.children}
    </div>;
  }
  const resolvedClassName = twMerge(clsx('text-black mb-[6px] md:mb-0 dark:text-white flex w-fit max-w-full gap-[24px]', classname));
  return (
    <div
      {...rest}
      className={resolvedClassName} 
    >
      {platforms.map((platform) => (
        <Platform key={platform.entity} platform={platform} />
      ))}
    </div>
  );
};

FooterSocials.displayName = "FooterSocials";
