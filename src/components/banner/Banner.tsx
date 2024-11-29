"use client";
import React from "react";
import { useState } from "react";
import { cn } from "../../utils/cn";

type StyleConfig = {
  container?: string;
  bannerInfoContainer?: string;
  bodyText?: string;
  headingText?: string;
  link?: string;
  icon?: string;
  boss?: string;
};
type Links = {
  linkText: string;
  linkTo: string;
};
type Props = Links & {
  bodyText?: string;
  headingText: string;
  styles?: StyleConfig;
  hasBoss?: boolean;
};

const defaultStyles = {
  container:
    "dark:text-bdp-white dark:shadow-dark-light gap-2 flex items-center justify-between w-full px-2 sm:px-4 shadow-md transition-all duration-200 ease-in-out text-center h-auto opacity-100 max-h-[200px]",
  bannerInfoContainer: `flex flex-col flex-[1_1_auto]`,
  headingText: "font-semibold text-sm md:text-lg",
  bodyText: "text-sm md:text-base",
  link: "text-bdp-accent underline font-semibold text-xs md:text-sm",
  icon: "text-bdp-lightGrey hover:text-red-500 transition-all duration-200 ease-in-out",
  boss: "text-bdp-accent text-base md:text-lg",
} as const;

export function Banner({
  bodyText,
  headingText,
  styles = {},
  hasBoss,
  ...rest
}: Props) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div
      data-show-banner={showBanner}
      data-has-heading={Boolean(headingText)}
      className={cn(
        defaultStyles.container,
        "data-[show-banner='false']:max-h-[0] overflow-hidden",
        styles.container,
      )}
    >
      <div
        className={cn(
          defaultStyles.bannerInfoContainer,
          "py-2", // padding here because it cannot be set on the parent due to transitioning height
          styles.bannerInfoContainer,
        )}
      >
        {!!headingText && (
          <h3 className={cn(defaultStyles.headingText, styles.headingText)}>
            {headingText}
            {hasBoss && (
              <span className={cn(defaultStyles.boss, styles.boss)}> ₿OSS</span>
            )}
          </h3>
        )}
        {!!bodyText && (
          <p className={cn(defaultStyles.bodyText, styles.bodyText)}>
            {bodyText}
          </p>
        )}
        {!!rest.linkText && (
          <a
            onClick={() => setShowBanner(false)}
            className={cn(defaultStyles.link, styles.link)}
            href={rest.linkTo}
            target="_blank"
            rel="noreferrer"
          >
            {rest.linkText}
          </a>
        )}
      </div>
      <button
        onClick={() => setShowBanner(false)}
        data-show-banner={showBanner}
        className={cn(
          defaultStyles.icon,
          "opacity-1",
          "data-[show-banner='false']:opacity-0",
          styles.icon,
        )}
      >
        <svg
          className="h-[20px] w-[20px] md:h-6 md:w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
}
