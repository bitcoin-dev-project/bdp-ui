// src/components/button/Button.tsx
import React from "react";
var Button = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false
}) => {
  const baseStyles = "font-bold py-2 px-4 rounded";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800"
  };
  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
  };
  const className = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `.trim();
  return /* @__PURE__ */ React.createElement("button", { className, onClick, disabled }, label);
};

// src/components/footer/Footer.tsx
import React34 from "react";

// src/components/footer/FooterAbout.tsx
import React2 from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
var FooterAbout = (props) => {
  const { className, children, entityLink, entityName, ...rest } = props;
  if (children) {
    /* @__PURE__ */ React2.createElement("div", { ...rest, className }, props.children);
  }
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      ...rest,
      className: twMerge(
        clsx(
          "leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400",
          className
        )
      )
    },
    "Built with ",
    /* @__PURE__ */ React2.createElement("span", null, "\u{1F9E1}"),
    " by the",
    " ",
    /* @__PURE__ */ React2.createElement(
      "a",
      {
        href: entityLink != null ? entityLink : "https://bitcoindevs.xyz/",
        target: "_blank",
        rel: "noreferrer",
        className: "underline font-medium text-bdp-brightOrange-100"
      },
      entityName != null ? entityName : "Bitcoin Dev Project"
    )
  );
};
FooterAbout.displayName = "FooterAbout";
var FooterAbout_default = FooterAbout;

// src/components/footer/FooterFeedback.tsx
import React3 from "react";
import { twMerge as twMerge2 } from "tailwind-merge";
import clsx2 from "clsx";
var FooterFeedback = (props) => {
  const { className, children, feedbackLink, ...rest } = props;
  if (children) {
    /* @__PURE__ */ React3.createElement("div", { ...rest, className: props.className }, props.children);
  }
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      ...rest,
      className: twMerge2(
        clsx2(
          "leading-none md:leading-tight flex flex-col sm:flex-row items-stretch sm:items-center text-sm text-gray-500 dark:text-gray-400 gap-[20px] md:gap-[24px]",
          className
        )
      )
    },
    /* @__PURE__ */ React3.createElement("span", null, "We'd love to hear your feedback on this project?"),
    /* @__PURE__ */ React3.createElement(
      "a",
      {
        href: feedbackLink,
        target: "_blank",
        rel: "noreferrer",
        className: "leading-none w-fit min-w-fit mx-auto text-base font-medium md:font-semibold py-4 px-5 rounded-[10px] text-[#FAFAFA] dark:text-[#292929] bg-[#292929] dark:bg-[#FAFAFA]"
      },
      "Give Feedback"
    )
  );
};
FooterFeedback.displayName = "FooterFeedback";
var FooterFeedback_default = FooterFeedback;

// src/components/footer/FooterSocials.tsx
import React32 from "react";

// src/icons/AppsIcon.tsx
import * as React4 from "react";

// src/icons/ArrowLeft.tsx
import * as React5 from "react";

// src/icons/ArrowLinkRight.tsx
import * as React6 from "react";

// src/icons/ArrowLinkUpRight.tsx
import * as React7 from "react";

// src/icons/ArrowRight.tsx
import * as React8 from "react";
var ArrowRight = ({
  width = 7,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  pathProps,
  ...props
}) => {
  return /* @__PURE__ */ React8.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 7 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React8.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.64522 5.17724C6.8724 5.39365 7 5.687 7 5.99287C7 6.29873 6.8724 6.59208 6.64522 6.8085L2.07091 11.1621C1.84333 11.3785 1.53471 11.5001 1.21295 11.5C0.891176 11.4999 0.582617 11.3782 0.355145 11.1617C0.127674 10.9452 -7.58015e-05 10.6516 3.37439e-08 10.3454C7.5869e-05 10.0393 0.127971 9.74573 0.35555 9.52931L4.07257 5.99287L0.35555 2.45642C0.134458 2.23884 0.0120353 1.94734 0.0146483 1.64471C0.0172613 1.34208 0.144701 1.05254 0.36952 0.83844C0.594339 0.624342 0.898547 0.50282 1.21663 0.500049C1.5347 0.497277 1.8412 0.613478 2.0701 0.823624L6.64603 5.17647L6.64522 5.17724Z",
        fill: "currentColor",
        ...pathProps
      }
    )
  );
};
var ArrowRight_default = ArrowRight;

// src/icons/ArrowUp.tsx
import * as React9 from "react";

// src/icons/AuthorIcon.tsx
import * as React10 from "react";

// src/icons/BitcoinIcon.tsx
import * as React11 from "react";

// src/icons/BookmarkIcon.tsx
import * as React12 from "react";

// src/icons/CalendarIcon.tsx
import * as React13 from "react";

// src/icons/CloseIconOutlined.tsx
import * as React14 from "react";

// src/icons/DateIcon.tsx
import * as React15 from "react";

// src/icons/DayIcon.tsx
import * as React16 from "react";

// src/icons/DiceIcon.tsx
import * as React17 from "react";

// src/icons/DiscordIcon.tsx
import * as React18 from "react";
var DiscordIcon = ({
  width = 45,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pathProps,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused
  /* @__PURE__ */ React18.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 41 33",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React18.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.9997 0.916504C11.652 0.916504 9.12018 1.48117 6.34634 2.84334C6.1873 2.9212 6.05422 3.04346 5.96318 3.19534C4.05834 6.37067 0.33301 15.2092 0.33301 25.6665C0.332528 25.9044 0.424568 26.1332 0.589676 26.3045C2.33501 28.103 3.92084 29.4267 5.62218 30.3617C7.33268 31.3003 9.11468 31.8228 11.223 32.0758C11.3988 32.0972 11.577 32.0672 11.7361 31.9894C11.8952 31.9117 12.0284 31.7895 12.1195 31.6377L13.0545 30.0757C11.6923 29.599 10.3008 28.9665 9.44284 28.1085C9.31158 27.9816 9.2069 27.8298 9.13492 27.662C9.06293 27.4943 9.02509 27.3138 9.02359 27.1312C9.02209 26.9487 9.05697 26.7676 9.12618 26.5987C9.1954 26.4297 9.29757 26.2763 9.42673 26.1472C9.55589 26.0182 9.70946 25.9161 9.87848 25.8471C10.0475 25.778 10.2286 25.7433 10.4111 25.745C10.5937 25.7467 10.7741 25.7847 10.9418 25.8568C11.1096 25.929 11.2612 26.0338 11.388 26.1652C11.8555 26.6327 12.9537 27.1643 14.5047 27.6612C15.7862 27.9967 18.0173 28.4165 20.4997 28.4165C22.982 28.4165 25.2132 27.9967 26.4947 27.6612C28.0457 27.1643 29.1438 26.6308 29.6113 26.1652C29.7372 26.0301 29.889 25.9217 30.0577 25.8466C30.2264 25.7714 30.4084 25.731 30.5931 25.7278C30.7777 25.7245 30.9611 25.7585 31.1323 25.8276C31.3035 25.8968 31.459 25.9997 31.5896 26.1303C31.7201 26.2608 31.8231 26.4164 31.8922 26.5876C31.9614 26.7588 31.9953 26.9422 31.9921 27.1268C31.9888 27.3114 31.9484 27.4935 31.8733 27.6622C31.7981 27.8308 31.6898 27.9826 31.5547 28.1085C30.6985 28.9665 29.307 29.599 27.943 30.0757L28.8798 31.6377C28.9707 31.7898 29.1038 31.9124 29.2629 31.9905C29.422 32.0686 29.6004 32.0989 29.7763 32.0777C31.8847 31.8228 33.6667 31.3003 35.3772 30.3617C37.0785 29.4267 38.6643 28.103 40.4078 26.3045C40.5736 26.1335 40.6663 25.9047 40.6663 25.6665C40.6663 15.2092 36.941 6.37067 35.0362 3.19534C34.9451 3.04346 34.812 2.9212 34.653 2.84334C31.8792 1.48117 29.3473 0.916504 25.9997 0.916504C25.8074 0.91665 25.62 0.977275 25.464 1.0898C25.3081 1.20232 25.1914 1.36105 25.1307 1.5435L24.5147 3.3915C23.2175 2.97154 21.8631 2.75508 20.4997 2.74984C19.1362 2.75508 17.7818 2.97154 16.4847 3.3915L15.8687 1.5435C15.8079 1.36105 15.6913 1.20232 15.5353 1.0898C15.3794 0.977275 15.192 0.91665 14.9997 0.916504ZM16.833 17.8748C16.833 19.6458 15.601 21.0832 14.083 21.0832C12.565 21.0832 11.333 19.6458 11.333 17.8748C11.333 16.1038 12.565 14.6665 14.083 14.6665C15.601 14.6665 16.833 16.1038 16.833 17.8748ZM26.9163 21.0832C28.4343 21.0832 29.6663 19.6458 29.6663 17.8748C29.6663 16.1038 28.4343 14.6665 26.9163 14.6665C25.3983 14.6665 24.1663 16.1038 24.1663 17.8748C24.1663 19.6458 25.3983 21.0832 26.9163 21.0832Z",
        fill: "currentColor"
      }
    )
  )
);
var DiscordIcon_default = DiscordIcon;

// src/icons/FilterIcon.tsx
import * as React19 from "react";

// src/icons/FilterCloseIcon.tsx
import * as React20 from "react";

// src/icons/GithubIcon.tsx
import * as React21 from "react";
var GithubIcon = ({
  width = 52,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  /* @__PURE__ */ React21.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React21.createElement(
      "path",
      {
        d: "M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z",
        fill: "currentColor"
      }
    )
  )
);
var GithubIcon_default = GithubIcon;

// src/icons/LightningIconSolid.tsx
import * as React22 from "react";
var LightningIconSolid = ({
  width = 14,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  pathProps,
  ...props
}) => {
  return /* @__PURE__ */ React22.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 14 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React22.createElement(
      "path",
      {
        d: "M13.0778 7.33566L4.44176 16.2157C4.20176 16.4617 3.80376 16.1767 3.95976 15.8707L7.03376 9.80466C7.05704 9.75888 7.06818 9.70788 7.06611 9.65656C7.06404 9.60524 7.04883 9.55531 7.02193 9.51156C6.99504 9.4678 6.95736 9.43168 6.9125 9.40666C6.86765 9.38164 6.81712 9.36855 6.76576 9.36866H0.299757C0.240699 9.36861 0.182969 9.35113 0.133802 9.31841C0.0846347 9.2857 0.046218 9.23919 0.0233668 9.18473C0.000515729 9.13028 -0.00575341 9.07028 0.00534526 9.01228C0.0164439 8.95427 0.0444169 8.90083 0.0857577 8.85866L8.09576 0.743657C8.32776 0.508657 8.71376 0.766657 8.58476 1.07166L6.28776 6.48666C6.26831 6.53256 6.26061 6.5826 6.26535 6.63223C6.2701 6.68186 6.28714 6.72952 6.31493 6.77092C6.34272 6.81231 6.38039 6.84612 6.42454 6.8693C6.46868 6.89247 6.5179 6.90428 6.56776 6.90366L12.8588 6.82566C12.9181 6.8247 12.9764 6.84139 13.0263 6.8736C13.0762 6.90581 13.1154 6.95209 13.139 7.00659C13.1625 7.0611 13.1694 7.12136 13.1587 7.17976C13.1479 7.23816 13.1201 7.29207 13.0788 7.33466L13.0778 7.33566Z",
        fill: "currentColor",
        ...pathProps
      }
    )
  );
};
var LightningIconSolid_default = LightningIconSolid;

// src/icons/MicIcon.tsx
import * as React23 from "react";

// src/icons/NightIcon.tsx
import * as React24 from "react";

// src/icons/NostrIcon.tsx
import * as React25 from "react";
var NostrIcon = ({
  width = 31,
  height,
  pathProps,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused
  /* @__PURE__ */ React25.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 31 31",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React25.createElement(
      "path",
      {
        d: "M31.5 13.5114V29.8827C31.5 30.4984 31.0041 30.998 30.3929 30.998H17.1081C16.4969 30.998 16.001 30.4984 16.001 29.8827V26.8339C16.0615 23.0966 16.454 19.5166 17.2779 17.8879C17.7719 16.9084 18.5861 16.3753 19.5214 16.0901C21.2884 15.5551 24.389 15.9209 25.705 15.858C25.705 15.858 29.6803 16.0173 29.6803 13.7494C29.6803 11.924 27.9035 12.0676 27.9035 12.0676C25.9451 12.1187 24.4534 11.985 23.4869 11.6014C21.8683 10.9602 21.8136 9.78388 21.8077 9.39048C21.7277 4.8467 15.0774 4.30184 9.21796 5.42893C2.81177 6.65635 9.28825 15.9072 9.28825 28.256V29.9044C9.27653 30.5102 8.79036 31 8.18508 31H1.60707C0.995937 31 0.5 30.5004 0.5 29.8847V1.56967C0.5 0.953998 0.995937 0.454378 1.60707 0.454378H7.79067C8.40181 0.454378 8.89775 0.953998 8.89775 1.56967C8.89775 2.48433 9.91891 2.99378 10.657 2.46072C12.8809 0.855648 15.7354 0 18.9297 0C26.0857 0 31.4961 4.20152 31.4961 13.5114H31.5ZM19.6209 10.1891C19.6209 8.87119 18.5607 7.80311 17.2525 7.80311C15.9444 7.80311 14.8841 8.87119 14.8841 10.1891C14.8841 11.507 15.9444 12.5751 17.2525 12.5751C18.5607 12.5751 19.6209 11.507 19.6209 10.1891Z",
        fill: "currentColor"
      }
    )
  )
);
var NostrIcon_default = NostrIcon;

// src/icons/PlusIcon.tsx
import * as React26 from "react";

// src/icons/SearchIcon.tsx
import * as React27 from "react";
var SearchIcon = ({
  width = 20,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  /* @__PURE__ */ React27.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React27.createElement(
      "path",
      {
        d: "M9.00001 17C13.4183 17 17 13.4183 17 9.00001C17 4.58173 13.4183 1 9.00001 1C4.58173 1 1 4.58173 1 9.00001C1 13.4183 4.58173 17 9.00001 17Z",
        stroke: "currentColor",
        strokeWidth: 2
      }
    ),
    /* @__PURE__ */ React27.createElement(
      "path",
      {
        d: "M18.9992 19.0002L14.6992 14.7002",
        stroke: "currentColor",
        strokeWidth: 2
      }
    )
  )
);
var SearchIcon_default = SearchIcon;

// src/icons/SortIcon.tsx
import * as React28 from "react";

// src/icons/SourceIcon.tsx
import * as React29 from "react";

// src/icons/TimeIcon.tsx
import * as React30 from "react";

// src/icons/TwitterXIcon.tsx
import * as React31 from "react";
var TwitterXIcon = ({
  width = 37,
  height,
  pathProps,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused
  /* @__PURE__ */ React31.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 37 37",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React31.createElement(
      "path",
      {
        d: "M28.5659 3.46875H33.6657L22.5241 16.2029L35.6313 33.5312H25.3685L17.3302 23.0217L8.13271 33.5312H3.0298L14.9469 19.9106L2.37305 3.46875H12.8965L20.1623 13.0749L28.5659 3.46875ZM26.776 30.4788H29.6019L11.361 6.36092H8.3285L26.776 30.4788Z",
        fill: "currentColor"
      }
    )
  )
);
var TwitterXIcon_default = TwitterXIcon;

// src/components/footer/FooterSocials.tsx
import { twMerge as twMerge3 } from "tailwind-merge";
import clsx3 from "clsx";
var Platform = ({ platform }) => {
  const { entity, entityLink, icon, iconProps } = platform;
  const { className, ...rest } = iconProps != null ? iconProps : {};
  const getIcon = (entity2) => {
    if (icon) {
      return React32.cloneElement(icon, { ...rest, className });
    }
    if (entity2 === "twitter") {
      return /* @__PURE__ */ React32.createElement(
        TwitterXIcon_default,
        {
          className: twMerge3(clsx3("w-full", className)),
          ...rest
        }
      );
    }
    if (entity2 === "github") {
      return /* @__PURE__ */ React32.createElement(GithubIcon_default, { className: twMerge3(clsx3("w-full", className)), ...rest });
    }
    if (entity2 === "discord") {
      return /* @__PURE__ */ React32.createElement(DiscordIcon_default, { className: twMerge3(clsx3("w-full", className)), ...rest });
    }
    if (entity2 === "nostr") {
      return /* @__PURE__ */ React32.createElement(NostrIcon_default, { className: twMerge3(clsx3("w-full", className)), ...rest });
    }
  };
  const iconElement = getIcon(entity);
  return /* @__PURE__ */ React32.createElement("div", { className: "flex items-center justify-center w-full max-w-[40px] min-w-[24px]" }, /* @__PURE__ */ React32.createElement(
    "a",
    {
      href: entityLink,
      target: "_blank",
      rel: "noreferrer",
      className: "underline font-medium"
    },
    iconElement
  ));
};
var FooterSocials = (props) => {
  const { className: classname, children, platforms, ...rest } = props;
  if (children) {
    /* @__PURE__ */ React32.createElement("div", { ...rest, className: classname }, props.children);
  }
  const resolvedClassName = twMerge3(
    clsx3(
      "text-black mb-[6px] md:mb-0 dark:text-white flex w-fit max-w-full gap-[24px]",
      classname
    )
  );
  return /* @__PURE__ */ React32.createElement("div", { ...rest, className: resolvedClassName }, platforms.map((platform) => /* @__PURE__ */ React32.createElement(Platform, { key: platform.entity, platform })));
};
FooterSocials.displayName = "FooterSocials";

// src/components/footer/FooterPublic.tsx
import React33 from "react";
import { twMerge as twMerge4 } from "tailwind-merge";
import clsx4 from "clsx";
var FooterPublic = ({
  className,
  dashboardLink,
  ...rest
}) => {
  return /* @__PURE__ */ React33.createElement(
    "a",
    {
      href: dashboardLink,
      target: "_blank",
      rel: "noreferrer",
      className: twMerge4(
        clsx4(
          "leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400 underline",
          className
        )
      ),
      ...rest
    },
    "View our public visitor count"
  );
};
var FooterPublic_default = FooterPublic;

// src/components/footer/Footer.tsx
import { twMerge as twMerge5 } from "tailwind-merge";
import clsx5 from "clsx";
var Separator = () => /* @__PURE__ */ React34.createElement("div", { className: "h-5 border xl:h-6 xl:border-2 border-bdp-stroke hidden xl:block" });
var Footer = ({ children, className, separator, ...rest }) => {
  const viewSeparator = separator != null ? separator : /* @__PURE__ */ React34.createElement(Separator, null);
  const renderChildrenWithSeparator = () => {
    const newChildren = [];
    React34.Children.forEach(children, (child, index) => {
      if (React34.isValidElement(child)) {
        const displayName = child.type.displayName;
        newChildren.push(child);
        if (index < React34.Children.count(children) - 1) {
          newChildren.push(
            React34.cloneElement(viewSeparator, {
              key: `${displayName}-separator-${index}`
            })
          );
        }
      }
    });
    return newChildren;
  };
  return /* @__PURE__ */ React34.createElement(
    "div",
    {
      className: twMerge5(
        clsx5(
          "flex flex-col md:flex-row w-full justify-between sm:items-stretch md:items-center bg-white dark:bg-black gap-[20px] md:gap-[24px] mx-auto max-w-[1920px] p-2",
          className
        )
      ),
      ...rest
    },
    renderChildrenWithSeparator()
  );
};
Footer.About = FooterAbout_default;
Footer.Feedback = FooterFeedback_default;
Footer.Socials = FooterSocials;
Footer.Public = FooterPublic_default;

// src/components/carousel/Carousel.tsx
import React36, { useCallback, useLayoutEffect, useMemo, useRef } from "react";

// src/components/carousel/defaults.ts
var DefaultCarouselConfig = {
  stepWidthInPercent: 100
};

// src/utils/index.ts
function throttledDebounce(func, limit) {
  let inThrottle = false;
  let lastArgs = null;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs) {
          func.apply(context, lastArgs);
          lastArgs = null;
        }
      }, limit);
    } else {
      lastArgs = args;
    }
  };
}
var numberFormat = new Intl.NumberFormat("en-US", {
  compactDisplay: "short",
  notation: "compact"
});

// src/components/carousel/CarouselComponents.tsx
import React35 from "react";
import { twMerge as twMerge6 } from "tailwind-merge";
import clsx6 from "clsx";
var CarouselContainer = ({
  children,
  ...props
}) => {
  const { className, ...rest } = props;
  const { containerRef } = useCarousel();
  return /* @__PURE__ */ React35.createElement(
    "div",
    {
      ref: containerRef,
      className: twMerge6(
        clsx6(
          "max-w-full h-full flex overflow-scroll gap-2 no-scrollbar",
          className
        )
      ),
      ...rest
    },
    children
  );
};
var CarouselItem = ({
  children,
  ...props
}) => {
  const { className, ...rest } = props;
  return /* @__PURE__ */ React35.createElement(
    "div",
    {
      className: twMerge6(clsx6("flex-shrink-0 relative", className)),
      ...rest
    },
    children
  );
};
var CarouselControls = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ React35.createElement(
    "div",
    {
      className: twMerge6(
        clsx6("flex items-center gap-2 md:gap-4 w-fit mx-auto pt-4", className)
      ),
      ...props
    },
    children
  );
};
var CarouselPreviousButton = ({
  children,
  ...props
}) => {
  const { goToPreviousSlide, possibleDirection } = useCarousel();
  if (children) {
    if (typeof children === "function") {
      return /* @__PURE__ */ React35.createElement(React35.Fragment, null, children(goToPreviousSlide, possibleDirection));
    } else {
      console.warn(
        "CarouselPreviousButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is."
      );
      return /* @__PURE__ */ React35.createElement(React35.Fragment, null, children);
    }
  }
  const { icon, className, ...rest } = props;
  return /* @__PURE__ */ React35.createElement(
    "button",
    {
      onClick: goToPreviousSlide,
      disabled: !possibleDirection.canGoToPreviousSlide,
      className: twMerge6(
        clsx6(
          "w-10 h-10 flex items-center justify-center rounded-full border border-gray-600  dark:border-gray-300 p-2 text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent",
          className
        )
      ),
      ...rest
    },
    icon
  );
};
var CarouselNextButton = ({
  children,
  ...props
}) => {
  const { goToNextSlide, possibleDirection } = useCarousel();
  if (children) {
    if (typeof children === "function") {
      return /* @__PURE__ */ React35.createElement(React35.Fragment, null, children(goToNextSlide, possibleDirection));
    } else {
      console.warn(
        "CarouselNextButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is."
      );
      return /* @__PURE__ */ React35.createElement(React35.Fragment, null, children);
    }
  }
  const { icon, className, ...rest } = props;
  return /* @__PURE__ */ React35.createElement(
    "button",
    {
      onClick: goToNextSlide,
      disabled: !possibleDirection.canGoToNextSlide,
      className: twMerge6(
        clsx6(
          "w-10 h-10 flex items-center justify-center rounded-full border border-gray-600  dark:border-gray-300 p-2 text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent",
          className
        )
      ),
      ...rest
    },
    icon
  );
};

// src/components/carousel/Carousel.tsx
var CarouselContext = React36.createContext(null);
var useCarousel = () => {
  const context = React36.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};
var CarouselProvider = ({
  children,
  containerRef,
  config = DefaultCarouselConfig
}) => {
  const { stepWidthInPercent } = config;
  const [carouselWidth, setCarouselWidth] = React36.useState(0);
  const [scrollableWidth, setScrollableWidth] = React36.useState(0);
  const [scrollLeft, setScrollLeft] = React36.useState(0);
  const possibleDirection = useMemo(() => {
    if (!containerRef.current)
      return { canGoToNextSlide: false, canGoToPreviousSlide: false };
    const canGoToNextSlide = scrollLeft < scrollableWidth - carouselWidth;
    const canGoToPreviousSlide = scrollLeft > 0;
    return { canGoToNextSlide, canGoToPreviousSlide };
  }, [containerRef, scrollableWidth, carouselWidth, scrollLeft]);
  const handleScroll = throttledDebounce(() => {
    var _a, _b;
    if (!containerRef.current) return;
    setScrollLeft((_b = (_a = containerRef.current) == null ? void 0 : _a.scrollLeft) != null ? _b : 0);
  }, 200);
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const updateSize = throttledDebounce(() => {
      var _a, _b, _c, _d, _e, _f;
      setCarouselWidth((_b = (_a = containerRef.current) == null ? void 0 : _a.clientWidth) != null ? _b : 0);
      setScrollableWidth((_d = (_c = containerRef.current) == null ? void 0 : _c.scrollWidth) != null ? _d : 0);
      setScrollLeft((_f = (_e = containerRef.current) == null ? void 0 : _e.scrollLeft) != null ? _f : 0);
    }, 200);
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);
    updateSize();
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);
  useLayoutEffect(() => {
    var _a;
    if (!containerRef.current) return;
    (_a = containerRef.current) == null ? void 0 : _a.addEventListener("scroll", handleScroll);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const totalCarouselItems = useMemo(() => {
    var _a, _b;
    return (_b = (_a = containerRef.current) == null ? void 0 : _a.children.length) != null ? _b : 0;
  }, [containerRef]);
  const goToNextSlide = useCallback(() => {
    if (!containerRef.current) return;
    const stepWidth = containerRef.current.clientWidth * stepWidthInPercent / 100;
    const responsiveStepWidth = stepWidth < containerRef.current.children[0].clientWidth ? containerRef.current.clientWidth : stepWidth;
    const scrollLeft2 = containerRef.current.scrollLeft + responsiveStepWidth;
    containerRef.current.scrollTo({
      left: scrollLeft2,
      behavior: "smooth"
    });
  }, [containerRef, stepWidthInPercent]);
  const goToPreviousSlide = useCallback(() => {
    if (!containerRef.current) return;
    const stepWidth = containerRef.current.clientWidth * stepWidthInPercent / 100;
    const responsiveStepWidth = stepWidth < containerRef.current.children[0].clientWidth ? containerRef.current.clientWidth : stepWidth;
    const scrollLeft2 = Math.max(
      0,
      containerRef.current.scrollLeft - responsiveStepWidth
    );
    containerRef.current.scrollTo({
      left: scrollLeft2,
      behavior: "smooth"
    });
  }, [containerRef, stepWidthInPercent]);
  return /* @__PURE__ */ React36.createElement(
    CarouselContext.Provider,
    {
      value: {
        containerRef,
        totalCarouselItems,
        goToNextSlide,
        goToPreviousSlide,
        possibleDirection
      }
    },
    children
  );
};
var Carousel = ({ children, config }) => {
  const containerRef = useRef(null);
  return /* @__PURE__ */ React36.createElement(CarouselProvider, { containerRef, config }, children);
};
Carousel.Container = CarouselContainer;
Carousel.Item = CarouselItem;
Carousel.Controls = CarouselControls;
Carousel.PreviousButton = CarouselPreviousButton;
Carousel.NextButton = CarouselNextButton;

// src/components/select/MultiSelect.tsx
import React40, { useState as useState2 } from "react";

// src/components/select/useSelectNavigate.tsx
import { useEffect, useRef as useRef2, useState } from "react";

// src/utils/navigation.ts
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// src/components/select/useSelectNavigate.tsx
var useCheckboxNavigate = ({
  checkboxContainer,
  searchEl,
  options
}) => {
  const checkboxNavIndex = useRef2(null);
  const [currentNavigateCheckbox, setcurrentNavigateCheckbox] = useState("");
  const refocus = useRef2(false);
  const toggleRefocus = () => {
    refocus.current = !refocus.current;
  };
  useEffect(() => {
    if (!checkboxContainer || !searchEl) return;
    const multiCheckboxWrapper = checkboxContainer.current;
    const multiCheckboxList = multiCheckboxWrapper && Array.from(multiCheckboxWrapper == null ? void 0 : multiCheckboxWrapper.children);
    const searchInput = searchEl.current;
    if (refocus.current) {
      if (searchInput) {
        searchInput.focus();
      }
      toggleRefocus();
    }
    let currentCheckboxNavIndex = checkboxNavIndex.current;
    const handleOptionNavigation = (e) => {
      var _a, _b, _c;
      if (currentNavigateCheckbox && currentCheckboxNavIndex === null) {
        const isPrevCheckInListIdx = multiCheckboxList.findIndex(
          (label) => {
            var _a2;
            return ((_a2 = label == null ? void 0 : label.dataset) == null ? void 0 : _a2.checkbox) === currentNavigateCheckbox;
          }
        );
        if (isPrevCheckInListIdx !== -1) {
          currentCheckboxNavIndex = isPrevCheckInListIdx;
        }
      }
      switch (e.key) {
        // downArrow
        case "ArrowDown":
          e.preventDefault();
          if (currentCheckboxNavIndex === null) {
            currentCheckboxNavIndex = 0;
          } else {
            if (currentCheckboxNavIndex >= multiCheckboxList.length - 1) {
              currentCheckboxNavIndex = 0;
            } else {
              currentCheckboxNavIndex += 1;
            }
          }
          break;
        // upArrow
        case "ArrowUp":
          e.preventDefault();
          if (currentCheckboxNavIndex === null) {
            currentCheckboxNavIndex = multiCheckboxList.length - 1;
          } else {
            if (currentCheckboxNavIndex === 0) {
              currentCheckboxNavIndex = multiCheckboxList.length - 1;
            } else {
              currentCheckboxNavIndex -= 1;
            }
          }
          break;
        // Enter
        case "Enter": {
          e.preventDefault();
          if (currentCheckboxNavIndex) {
            const input = (_a = multiCheckboxList[currentCheckboxNavIndex]) == null ? void 0 : _a.querySelector(
              '[role="button"]'
            );
            if (input) {
              input.click();
            }
          }
          break;
        }
        default:
          break;
      }
      const currentLabel = typeof currentCheckboxNavIndex === "number" ? multiCheckboxList[currentCheckboxNavIndex] : null;
      if (currentLabel) {
        const inViewPort = isInViewport(currentLabel);
        if (!inViewPort) {
          currentLabel.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
        }
      }
      setcurrentNavigateCheckbox((_c = (_b = currentLabel == null ? void 0 : currentLabel.dataset) == null ? void 0 : _b.checkbox) != null ? _c : "");
    };
    if (searchInput) {
      searchInput.addEventListener("keydown", handleOptionNavigation);
      searchInput.addEventListener(
        "focusout",
        () => setcurrentNavigateCheckbox("")
      );
    }
    return () => {
      if (searchInput) {
        searchInput.removeEventListener("keydown", handleOptionNavigation);
        searchInput.removeEventListener(
          "focusout",
          () => setcurrentNavigateCheckbox("")
        );
      }
    };
  }, [options, checkboxContainer, searchEl, currentNavigateCheckbox]);
  return { currentNavigateCheckbox, toggleRefocus };
};
var useSelectNavigate_default = useCheckboxNavigate;

// src/components/select/SelectInput.tsx
import React37, { useEffect as useEffect2, useRef as useRef3 } from "react";

// src/utils/cn.ts
import { twMerge as twMerge7 } from "tailwind-merge";
import { clsx as clsx7 } from "clsx";
function cn(...inputs) {
  return twMerge7(clsx7(inputs));
}

// src/components/select/SelectInput.tsx
var defaultStyles = {
  container: "relative text-bdp-primary-text",
  input: "bg-transparent text-base 2xl:text-base font-medium w-full pl-12 pr-10 py-4 rounded-xl border-[1px] border-bdp-stroke focus:outline-none focus:outline-bdp-secondary-text focus:outline-offset-0 leading-none",
  searchIcon: "stroke-bdp-secondary-text w-[16px] h-[16px]",
  searchIconWrapper: "absolute top-1/2 -translate-y-1/2 left-[18px]",
  arrowIcon: "",
  arrowIconWrapper: "absolute p-2 cursor-pointer top-1/2 -translate-y-1/2 right-[18px] rotate-90 data-[is-open=false]:-rotate-90 transition-transform"
};
var SelectInput = ({
  defaultPlaceholder,
  className,
  styles = {}
}) => {
  const selectContextData = useMultiSelect();
  const searchRef = useRef3(null);
  const {
    currentNavigateCheckbox,
    toggleListOpen,
    isListOpen,
    onSearch,
    searchInputRef,
    setSearchInputRef
  } = selectContextData;
  useEffect2(() => {
    if (searchRef.current && !searchInputRef) {
      setSearchInputRef(searchRef);
    }
  }, []);
  return /* @__PURE__ */ React37.createElement("div", { className: cn(defaultStyles.container, styles.container, className) }, /* @__PURE__ */ React37.createElement(
    "input",
    {
      className: cn(defaultStyles.input, styles.input),
      type: "text",
      placeholder: currentNavigateCheckbox || defaultPlaceholder,
      onChange: (e) => {
        onSearch(e.target.value);
      },
      ref: searchRef
    }
  ), /* @__PURE__ */ React37.createElement(
    "span",
    {
      className: cn(
        defaultStyles.searchIconWrapper,
        styles.searchIconWrapper
      )
    },
    /* @__PURE__ */ React37.createElement(
      SearchIcon_default,
      {
        className: cn(defaultStyles.searchIcon, styles.searchIcon)
      }
    )
  ), /* @__PURE__ */ React37.createElement(
    "span",
    {
      "data-is-open": isListOpen,
      onClick: toggleListOpen,
      className: cn(defaultStyles.arrowIconWrapper, styles.arrowIconWrapper)
    },
    /* @__PURE__ */ React37.createElement(ArrowRight_default, { className: cn(defaultStyles.arrowIcon, styles.arrowIcon) })
  ));
};
var SelectInput_default = SelectInput;

// src/components/select/SelectList.tsx
import React39, { useEffect as useEffect3, useMemo as useMemo2, useRef as useRef4 } from "react";

// src/utils/filter.ts
function matchCharactersWithRegex(word, searchTerm) {
  const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regexPattern = escapedSearchTerm.split("").map((char) => `(?=.*${char})`).join("");
  const regex = new RegExp(regexPattern, "i");
  return regex.test(word);
}

// src/components/select/BaseSelectList.tsx
import React38 from "react";
var defaultStyles2 = {
  container: "scroller font-medium mt-2 max-h-[300px] py-[6px] overflow-auto border border-bdp-stroke rounded-xl data-[is-open='false']:hidden",
  optionWrapper: `flex gap-1 py-1 2xl:py-2 px-[14px] group/checkOption hover:bg-bdp-hover-state data-[current-navigated=true]:bg-bdp-hover-state
                  group-hover/container:data-[current-navigated=true]:bg-transparent
                  group-hover/container:data-[current-navigated=true]:hover:bg-bdp-hover-state
                  data-[selected=true]:text-bdp-accent text-bdp-primary-text`,
  optionInner: "selectable-option flex grow items-center gap-3",
  icon: "shrink-0 group-data-[selected=false]/checkOption:invisible w-[12px] 2xl:w-[16px] h-auto",
  label: "grow capitalize text-sm 2xl:text-base group-data-[selected=true]/checkOption:font-bold",
  count: "shrink-0 group-data-[selected=true]/checkOption:font-medium",
  noResults: "w-full text-sm 2xl:text-base text-center px-2"
};
var BaseSelectList = ({
  options,
  label,
  onOptionSelect,
  className,
  styles = {},
  noResultsMessage = "No matching options",
  selectContextData
}) => {
  const { isListOpen, currentNavigateCheckbox, containerRef } = selectContextData;
  return /* @__PURE__ */ React38.createElement(
    "div",
    {
      "data-is-open": isListOpen,
      ref: containerRef,
      className: cn(
        defaultStyles2.container,
        // "data-[is-open='false']:hidden",
        styles.container,
        className
      )
    },
    options.length < 1 && /* @__PURE__ */ React38.createElement("p", { className: cn(defaultStyles2.noResults, styles.noResults) }, noResultsMessage),
    options == null ? void 0 : options.map((option) => {
      const checked = option.selected;
      const value = option.value;
      return /* @__PURE__ */ React38.createElement(
        "label",
        {
          key: option.label,
          htmlFor: `checkbox-${label}-${option.label}`,
          "data-checkbox": option.label
        },
        /* @__PURE__ */ React38.createElement(
          "div",
          {
            "data-selected": checked,
            "data-current-navigated": option.label === currentNavigateCheckbox,
            className: cn(defaultStyles2.optionWrapper, styles.optionWrapper),
            onClick: (event) => onOptionSelect({ action: "select", value, event }),
            role: "button",
            "aria-label": `${checked ? "uncheck" : "check"} filter ${label}:${option.label}`
          },
          /* @__PURE__ */ React38.createElement(
            "div",
            {
              className: cn(defaultStyles2.optionInner, styles.optionInner),
              id: `example_facet_${label}${option.label}`
            },
            /* @__PURE__ */ React38.createElement(
              LightningIconSolid_default,
              {
                className: cn(defaultStyles2.icon, styles.icon)
              }
            ),
            /* @__PURE__ */ React38.createElement("span", { className: cn(defaultStyles2.label, styles.label) }, option.label)
          ),
          option.count ? /* @__PURE__ */ React38.createElement("span", { className: cn(defaultStyles2.count, styles.count) }, numberFormat.format(option.count)) : null
        )
      );
    })
  );
};
var BaseSelectList_default = BaseSelectList;

// src/components/select/SelectList.tsx
var SelectList = (props) => {
  const selectContextData = useMultiSelect();
  const containerRef = useRef4(null);
  const {
    containerRef: containerRefProvider,
    setContainerRef,
    isListOpen,
    currentNavigateCheckbox,
    inputValue: searchTerm
  } = selectContextData;
  useEffect3(() => {
    if (!containerRefProvider && containerRef.current) {
      setContainerRef(containerRef);
    }
  }, []);
  const filteredOptions = useMemo2(() => {
    if (searchTerm.trim()) {
      return props.options.filter((option) => {
        return matchCharactersWithRegex(option.label, searchTerm.trim());
      });
    }
    return props.options;
  }, [props.options, searchTerm]);
  return /* @__PURE__ */ React39.createElement(
    BaseSelectList_default,
    {
      ...props,
      options: filteredOptions,
      selectContextData: { isListOpen, containerRef, currentNavigateCheckbox }
    }
  );
};
var SelectList_default = SelectList;

// src/components/select/MultiSelect.tsx
var SelectContext = React40.createContext(null);
var useMultiSelect = () => {
  const context = React40.useContext(SelectContext);
  if (!context) {
    throw new Error("useMultiSelect must be used within a MultiSelectProvider");
  }
  return context;
};
var MultiSelectProvider = ({
  children,
  isCollapsible = true
}) => {
  const [containerRef, setContainerRef] = useState2(null);
  const [searchInputRef, setSearchInputRef] = useState2(null);
  const [isListOpen, setIsListOpen] = useState2(true);
  const toggleListOpen = () => {
    if (!isCollapsible) return;
    setIsListOpen((prev) => !prev);
  };
  const [inputValue, setInputValue] = useState2("");
  const { currentNavigateCheckbox, toggleRefocus } = useSelectNavigate_default({
    checkboxContainer: containerRef,
    searchEl: searchInputRef,
    options: []
  });
  const onSearch = (value) => {
    const newValue = value.trim();
    setInputValue(newValue);
  };
  return /* @__PURE__ */ React40.createElement(
    SelectContext.Provider,
    {
      value: {
        containerRef,
        setContainerRef,
        searchInputRef,
        setSearchInputRef,
        isListOpen,
        toggleListOpen,
        currentNavigateCheckbox,
        toggleRefocus,
        onSearch,
        inputValue
      }
    },
    children
  );
};
var MultiSelect = ({ children, isCollapsible = true }) => {
  return /* @__PURE__ */ React40.createElement(MultiSelectProvider, { isCollapsible }, children);
};
MultiSelect.Input = SelectInput_default;
MultiSelect.List = SelectList_default;

// src/components/select/Dropdown.tsx
import React43, { createContext, useCallback as useCallback2, useState as useState3 } from "react";

// src/components/select/SingleSelectList.tsx
import React41, { useEffect as useEffect4 } from "react";
var SingleSelectList = (props) => {
  const {
    isListOpen,
    containerRef: containerRefProvider,
    setContainerRef,
    handleSelectOption,
    setSelectedOption
  } = useSingleSelect();
  const containerRef = React41.useRef(null);
  useEffect4(() => {
    if (!containerRefProvider && containerRef.current) {
      setContainerRef(containerRef);
    }
  }, []);
  const handleOption = ({
    value
  }) => {
    const option = props.options.find((option2) => option2.value === value);
    if (option) {
      handleSelectOption(option);
      props.onOptionSelect(option);
    }
  };
  const managedOptions = props.options.map((option) => ({
    ...option,
    selected: option.value === props.value
  }));
  useEffect4(() => {
    setSelectedOption(
      props.options.find((option) => option.value === props.value) || null
    );
  }, [props.value, props.options]);
  return /* @__PURE__ */ React41.createElement(
    BaseSelectList_default,
    {
      ...props,
      options: managedOptions,
      onOptionSelect: handleOption,
      selectContextData: {
        isListOpen,
        containerRef,
        currentNavigateCheckbox: ""
      },
      styles: {
        container: "absolute w-full bg-bdp-background",
        ...props.styles
      }
    }
  );
};
var SingleSelectList_default = SingleSelectList;

// src/components/select/SingleSelectInput.tsx
import React42 from "react";
var defaultStyles3 = {
  container: "relative text-bdp-primary-text",
  trigger: "block bg-transparent text-base text-bdp-accent 2xl:text-base font-medium w-full pl-6 py-4 rounded-xl border-[1px] border-bdp-stroke focus:outline-none focus:outline-bdp-secondary-text focus:outline-offset-0 leading-none",
  arrowIcon: "",
  arrowIconWrapper: "absolute p-2 cursor-pointer top-1/2 -translate-y-1/2 right-[18px] rotate-90 data-[is-open=false]:-rotate-90 transition-transform"
};
var SingleSelectTrigger = ({
  defaultPlaceholder,
  className,
  styles = {}
}) => {
  const { selectedOption, toggleListOpen, isListOpen, triggerRef } = useSingleSelect();
  return /* @__PURE__ */ React42.createElement(
    "div",
    {
      ref: triggerRef,
      className: cn(defaultStyles3.container, styles.container, className),
      onClick: toggleListOpen
    },
    /* @__PURE__ */ React42.createElement("label", { className: cn(defaultStyles3.trigger, styles.trigger) }, (selectedOption == null ? void 0 : selectedOption.label) || defaultPlaceholder),
    /* @__PURE__ */ React42.createElement(
      "span",
      {
        "data-is-open": isListOpen,
        className: cn(defaultStyles3.arrowIconWrapper, styles.arrowIconWrapper)
      },
      /* @__PURE__ */ React42.createElement(ArrowRight_default, { className: cn(defaultStyles3.arrowIcon, styles.arrowIcon) })
    )
  );
};
var SingleSelectInput_default = SingleSelectTrigger;

// src/components/select/Dropdown.tsx
var SingleSelectContext = createContext(null);
var useSingleSelect = () => {
  const context = React43.useContext(SingleSelectContext);
  if (!context) {
    throw new Error(
      "useSingleSelect must be used within a SingleSelectProvider"
    );
  }
  return context;
};
var SingleSelectProvider = ({
  children,
  triggerRef,
  disabled = false
}) => {
  const [isListOpen, setIsListOpen] = useState3(false);
  const [containerRef, setContainerRef] = useState3(null);
  const [selectedOption, setSelectedOption] = useState3(null);
  const toggleListOpen = () => {
    if (!disabled) {
      setIsListOpen((prev) => !prev);
    }
  };
  const handleSelectOption = (_option) => {
    setIsListOpen(false);
  };
  const handleClickOutside = useCallback2(
    (event) => {
      if ((containerRef == null ? void 0 : containerRef.current) && (triggerRef == null ? void 0 : triggerRef.current) && !containerRef.current.contains(event.target) && !triggerRef.current.contains(event.target)) {
        setIsListOpen(false);
      }
    },
    [containerRef, isListOpen]
  );
  React43.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);
  const contextValue = {
    isListOpen,
    toggleListOpen,
    selectedOption,
    setSelectedOption,
    handleSelectOption,
    containerRef,
    setContainerRef,
    triggerRef
  };
  return /* @__PURE__ */ React43.createElement(SingleSelectContext.Provider, { value: contextValue }, /* @__PURE__ */ React43.createElement("div", { className: "relative" }, children));
};
var SingleSelect = ({
  children,
  disabled = false
}) => {
  const triggerRef = React43.useRef(null);
  return /* @__PURE__ */ React43.createElement(SingleSelectProvider, { disabled, triggerRef }, children);
};
SingleSelect.List = SingleSelectList_default;
SingleSelect.Trigger = SingleSelectInput_default;

// src/components/banner/Banner.tsx
import React44 from "react";
import { useState as useState4 } from "react";
var defaultStyles4 = {
  container: "dark:text-bdp-white dark:shadow-dark-light gap-2 flex items-center justify-between w-full px-2 sm:px-4 shadow-md transition-all duration-200 ease-in-out text-center h-auto opacity-100 max-h-[200px]",
  bannerInfoContainer: `flex flex-col flex-[1_1_auto]`,
  headingText: "font-semibold text-sm md:text-lg",
  bodyText: "text-sm md:text-base",
  link: "text-bdp-accent underline font-semibold text-xs md:text-sm",
  icon: "text-bdp-lightGrey hover:text-red-500 transition-all duration-200 ease-in-out",
  boss: "text-bdp-accent text-base md:text-lg"
};
function Banner({
  bodyText,
  headingText,
  styles = {},
  hasBoss,
  ...rest
}) {
  const [showBanner, setShowBanner] = useState4(true);
  return /* @__PURE__ */ React44.createElement(
    "div",
    {
      "data-show-banner": showBanner,
      "data-has-heading": Boolean(headingText),
      className: cn(
        defaultStyles4.container,
        "data-[show-banner='false']:max-h-[0] overflow-hidden",
        styles.container
      )
    },
    /* @__PURE__ */ React44.createElement(
      "div",
      {
        className: cn(
          defaultStyles4.bannerInfoContainer,
          "py-2",
          // padding here because it cannot be set on the parent due to transitioning height
          styles.bannerInfoContainer
        )
      },
      !!headingText && /* @__PURE__ */ React44.createElement("h3", { className: cn(defaultStyles4.headingText, styles.headingText) }, headingText, hasBoss && /* @__PURE__ */ React44.createElement("span", { className: cn(defaultStyles4.boss, styles.boss) }, " \u20BFOSS")),
      !!bodyText && /* @__PURE__ */ React44.createElement("p", { className: cn(defaultStyles4.bodyText, styles.bodyText) }, bodyText),
      !!rest.linkText && /* @__PURE__ */ React44.createElement(
        "a",
        {
          onClick: () => setShowBanner(false),
          className: cn(defaultStyles4.link, styles.link),
          href: rest.linkTo,
          target: "_blank",
          rel: "noreferrer"
        },
        rest.linkText
      )
    ),
    /* @__PURE__ */ React44.createElement(
      "button",
      {
        onClick: () => setShowBanner(false),
        "data-show-banner": showBanner,
        className: cn(
          defaultStyles4.icon,
          "opacity-1",
          "data-[show-banner='false']:opacity-0",
          styles.icon
        )
      },
      /* @__PURE__ */ React44.createElement(
        "svg",
        {
          className: "h-[20px] w-[20px] md:h-6 md:w-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          width: "24",
          height: "24"
        },
        /* @__PURE__ */ React44.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "3",
            d: "M6 18L18 6M6 6l12 12"
          }
        )
      )
    )
  );
}
export {
  Banner,
  Button,
  Carousel,
  Footer,
  MultiSelect,
  MultiSelectProvider,
  Separator,
  SingleSelect,
  useMultiSelect,
  useSingleSelect
};
//# sourceMappingURL=index.mjs.map