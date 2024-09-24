"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Carousel: () => Carousel,
  Footer: () => Footer,
  Separator: () => Separator
});
module.exports = __toCommonJS(src_exports);

// src/components/button/Button.tsx
var import_react = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react.default.createElement("button", { className, onClick, disabled }, label);
};

// src/components/footer/Footer.tsx
var import_react6 = __toESM(require("react"));

// src/components/footer/FooterAbout.tsx
var import_react2 = __toESM(require("react"));
var import_tailwind_merge = require("tailwind-merge");
var import_clsx = __toESM(require("clsx"));
var FooterAbout = (props) => {
  const { className, children, entityLink, entityName, ...rest } = props;
  if (children) {
    /* @__PURE__ */ import_react2.default.createElement("div", { ...rest, className }, props.children);
  }
  return /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      ...rest,
      className: (0, import_tailwind_merge.twMerge)(
        (0, import_clsx.default)(
          "leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400",
          className
        )
      )
    },
    "Built with ",
    /* @__PURE__ */ import_react2.default.createElement("span", null, "\u{1F9E1}"),
    " by the",
    " ",
    /* @__PURE__ */ import_react2.default.createElement(
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
var import_react3 = __toESM(require("react"));
var import_tailwind_merge2 = require("tailwind-merge");
var import_clsx2 = __toESM(require("clsx"));
var FooterFeedback = (props) => {
  const { className, children, feedbackLink, ...rest } = props;
  if (children) {
    /* @__PURE__ */ import_react3.default.createElement("div", { ...rest, className: props.className }, props.children);
  }
  return /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      ...rest,
      className: (0, import_tailwind_merge2.twMerge)(
        (0, import_clsx2.default)(
          "leading-none md:leading-tight flex flex-col sm:flex-row items-stretch sm:items-center text-sm text-gray-500 dark:text-gray-400 gap-[20px] md:gap-[24px]",
          className
        )
      )
    },
    /* @__PURE__ */ import_react3.default.createElement("span", null, "We'd love to hear your feedback on this project?"),
    /* @__PURE__ */ import_react3.default.createElement(
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
var import_react4 = __toESM(require("react"));

// src/icons/AppsIcon.tsx
var React4 = __toESM(require("react"));

// src/icons/ArrowLeft.tsx
var React5 = __toESM(require("react"));

// src/icons/ArrowLinkRight.tsx
var React6 = __toESM(require("react"));

// src/icons/ArrowLinkUpRight.tsx
var React7 = __toESM(require("react"));

// src/icons/ArrowRight.tsx
var React8 = __toESM(require("react"));

// src/icons/AuthorIcon.tsx
var React9 = __toESM(require("react"));

// src/icons/BitcoinIcon.tsx
var React10 = __toESM(require("react"));

// src/icons/BookmarkIcon.tsx
var React11 = __toESM(require("react"));

// src/icons/CalendarIcon.tsx
var React12 = __toESM(require("react"));

// src/icons/CloseIconOutlined.tsx
var React13 = __toESM(require("react"));

// src/icons/DateIcon.tsx
var React14 = __toESM(require("react"));

// src/icons/DayIcon.tsx
var React15 = __toESM(require("react"));

// src/icons/DiceIcon.tsx
var React16 = __toESM(require("react"));

// src/icons/DiscordIcon.tsx
var React17 = __toESM(require("react"));
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
  /* @__PURE__ */ React17.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 41 33",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React17.createElement(
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
var React18 = __toESM(require("react"));

// src/icons/FilterCloseIcon.tsx
var React19 = __toESM(require("react"));

// src/icons/GithubIcon.tsx
var React20 = __toESM(require("react"));
var GithubIcon = ({
  width = 52,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  height,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  /* @__PURE__ */ React20.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React20.createElement(
      "path",
      {
        d: "M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z",
        fill: "currentColor"
      }
    )
  )
);
var GithubIcon_default = GithubIcon;

// src/icons/MicIcon.tsx
var React21 = __toESM(require("react"));

// src/icons/NightIcon.tsx
var React22 = __toESM(require("react"));

// src/icons/NostrIcon.tsx
var React23 = __toESM(require("react"));
var NostrIcon = ({
  width = 31,
  height,
  pathProps,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused
  /* @__PURE__ */ React23.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 31 31",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React23.createElement(
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
var React24 = __toESM(require("react"));

// src/icons/SearchIcon.tsx
var React25 = __toESM(require("react"));

// src/icons/SortIcon.tsx
var React26 = __toESM(require("react"));

// src/icons/SourceIcon.tsx
var React27 = __toESM(require("react"));

// src/icons/TimeIcon.tsx
var React28 = __toESM(require("react"));

// src/icons/TwitterXIcon.tsx
var React29 = __toESM(require("react"));
var TwitterXIcon = ({
  width = 37,
  height,
  pathProps,
  ...props
}) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused
  /* @__PURE__ */ React29.createElement(
    "svg",
    {
      width,
      viewBox: "0 0 37 37",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React29.createElement(
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
var import_tailwind_merge3 = require("tailwind-merge");
var import_clsx3 = __toESM(require("clsx"));
var Platform = ({ platform }) => {
  const { entity, entityLink, icon, iconProps } = platform;
  const { className, ...rest } = iconProps != null ? iconProps : {};
  const getIcon = (entity2) => {
    if (icon) {
      return import_react4.default.cloneElement(icon, { ...rest, className });
    }
    if (entity2 === "twitter") {
      return /* @__PURE__ */ import_react4.default.createElement(
        TwitterXIcon_default,
        {
          className: (0, import_tailwind_merge3.twMerge)((0, import_clsx3.default)("w-full", className)),
          ...rest
        }
      );
    }
    if (entity2 === "github") {
      return /* @__PURE__ */ import_react4.default.createElement(GithubIcon_default, { className: (0, import_tailwind_merge3.twMerge)((0, import_clsx3.default)("w-full", className)), ...rest });
    }
    if (entity2 === "discord") {
      return /* @__PURE__ */ import_react4.default.createElement(DiscordIcon_default, { className: (0, import_tailwind_merge3.twMerge)((0, import_clsx3.default)("w-full", className)), ...rest });
    }
    if (entity2 === "nostr") {
      return /* @__PURE__ */ import_react4.default.createElement(NostrIcon_default, { className: (0, import_tailwind_merge3.twMerge)((0, import_clsx3.default)("w-full", className)), ...rest });
    }
  };
  const iconElement = getIcon(entity);
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex items-center justify-center w-full max-w-[40px] min-w-[24px]" }, /* @__PURE__ */ import_react4.default.createElement(
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
    /* @__PURE__ */ import_react4.default.createElement("div", { ...rest, className: classname }, props.children);
  }
  const resolvedClassName = (0, import_tailwind_merge3.twMerge)(
    (0, import_clsx3.default)(
      "text-black mb-[6px] md:mb-0 dark:text-white flex w-fit max-w-full gap-[24px]",
      classname
    )
  );
  return /* @__PURE__ */ import_react4.default.createElement("div", { ...rest, className: resolvedClassName }, platforms.map((platform) => /* @__PURE__ */ import_react4.default.createElement(Platform, { key: platform.entity, platform })));
};
FooterSocials.displayName = "FooterSocials";

// src/components/footer/FooterPublic.tsx
var import_react5 = __toESM(require("react"));
var import_tailwind_merge4 = require("tailwind-merge");
var import_clsx4 = __toESM(require("clsx"));
var FooterPublic = ({
  className,
  dashboardLink,
  ...rest
}) => {
  return /* @__PURE__ */ import_react5.default.createElement(
    "a",
    {
      href: dashboardLink,
      target: "_blank",
      rel: "noreferrer",
      className: (0, import_tailwind_merge4.twMerge)(
        (0, import_clsx4.default)(
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
var import_tailwind_merge5 = require("tailwind-merge");
var import_clsx5 = __toESM(require("clsx"));
var Separator = () => /* @__PURE__ */ import_react6.default.createElement("div", { className: "h-5 border xl:h-6 xl:border-2 border-bdp-stroke hidden xl:block" });
var Footer = ({ children, className, separator, ...rest }) => {
  const viewSeparator = separator != null ? separator : /* @__PURE__ */ import_react6.default.createElement(Separator, null);
  const renderChildrenWithSeparator = () => {
    const newChildren = [];
    import_react6.default.Children.forEach(children, (child, index) => {
      if (import_react6.default.isValidElement(child)) {
        const displayName = child.type.displayName;
        newChildren.push(child);
        if (index < import_react6.default.Children.count(children) - 1) {
          newChildren.push(
            import_react6.default.cloneElement(viewSeparator, {
              key: `${displayName}-separator-${index}`
            })
          );
        }
      }
    });
    return newChildren;
  };
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      className: (0, import_tailwind_merge5.twMerge)(
        (0, import_clsx5.default)(
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
var import_react8 = __toESM(require("react"));

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

// src/components/carousel/CarouselComponents.tsx
var import_react7 = __toESM(require("react"));
var import_tailwind_merge6 = require("tailwind-merge");
var import_clsx6 = __toESM(require("clsx"));
var CarouselContainer = ({
  children,
  ...props
}) => {
  const { className, ...rest } = props;
  const { containerRef } = useCarousel();
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      ref: containerRef,
      className: (0, import_tailwind_merge6.twMerge)(
        (0, import_clsx6.default)(
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
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      className: (0, import_tailwind_merge6.twMerge)((0, import_clsx6.default)("flex-shrink-0 relative", className)),
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
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      className: (0, import_tailwind_merge6.twMerge)(
        (0, import_clsx6.default)("flex items-center gap-2 md:gap-4 w-fit mx-auto pt-4", className)
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
      return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children(goToPreviousSlide, possibleDirection));
    } else {
      console.warn(
        "CarouselPreviousButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is."
      );
      return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children);
    }
  }
  const { icon, className, ...rest } = props;
  return /* @__PURE__ */ import_react7.default.createElement(
    "button",
    {
      onClick: goToPreviousSlide,
      disabled: !possibleDirection.canGoToPreviousSlide,
      className: (0, import_tailwind_merge6.twMerge)(
        (0, import_clsx6.default)(
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
      return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children(goToNextSlide, possibleDirection));
    } else {
      console.warn(
        "CarouselNextButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is."
      );
      return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children);
    }
  }
  const { icon, className, ...rest } = props;
  return /* @__PURE__ */ import_react7.default.createElement(
    "button",
    {
      onClick: goToNextSlide,
      disabled: !possibleDirection.canGoToNextSlide,
      className: (0, import_tailwind_merge6.twMerge)(
        (0, import_clsx6.default)(
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
var CarouselContext = import_react8.default.createContext(null);
var useCarousel = () => {
  const context = import_react8.default.useContext(CarouselContext);
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
  const [carouselWidth, setCarouselWidth] = import_react8.default.useState(0);
  const [scrollableWidth, setScrollableWidth] = import_react8.default.useState(0);
  const [scrollLeft, setScrollLeft] = import_react8.default.useState(0);
  const possibleDirection = (0, import_react8.useMemo)(() => {
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
  (0, import_react8.useLayoutEffect)(() => {
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
  (0, import_react8.useLayoutEffect)(() => {
    var _a;
    if (!containerRef.current) return;
    (_a = containerRef.current) == null ? void 0 : _a.addEventListener("scroll", handleScroll);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const totalCarouselItems = (0, import_react8.useMemo)(() => {
    var _a, _b;
    return (_b = (_a = containerRef.current) == null ? void 0 : _a.children.length) != null ? _b : 0;
  }, [containerRef]);
  const goToNextSlide = (0, import_react8.useCallback)(() => {
    if (!containerRef.current) return;
    const stepWidth = containerRef.current.clientWidth * stepWidthInPercent / 100;
    const responsiveStepWidth = stepWidth < containerRef.current.children[0].clientWidth ? containerRef.current.clientWidth : stepWidth;
    const scrollLeft2 = containerRef.current.scrollLeft + responsiveStepWidth;
    containerRef.current.scrollTo({
      left: scrollLeft2,
      behavior: "smooth"
    });
  }, [containerRef, stepWidthInPercent]);
  const goToPreviousSlide = (0, import_react8.useCallback)(() => {
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
  return /* @__PURE__ */ import_react8.default.createElement(
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
  const containerRef = (0, import_react8.useRef)(null);
  return /* @__PURE__ */ import_react8.default.createElement(CarouselProvider, { containerRef, config }, children);
};
Carousel.Container = CarouselContainer;
Carousel.Item = CarouselItem;
Carousel.Controls = CarouselControls;
Carousel.PreviousButton = CarouselPreviousButton;
Carousel.NextButton = CarouselNextButton;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Carousel,
  Footer,
  Separator
});
//# sourceMappingURL=index.js.map