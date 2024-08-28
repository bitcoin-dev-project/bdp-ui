// src/components/button/Button.tsx
import React from "react";

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles/tailwind.output.css
styleInject('/*! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n  border: 0 solid #e5e7eb;\n}\n:after,\n:before {\n  --tw-content:"";\n}\n:host,\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family: ui-sans-serif, system-ui;\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  -webkit-tap-highlight-color: transparent;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: ui-monospace, SFMono-Regular;\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: initial;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-feature-settings: inherit;\n  font-variation-settings: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  letter-spacing: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\ninput:where([type=button]),\ninput:where([type=reset]),\ninput:where([type=submit]) {\n  -webkit-appearance: button;\n  background-color: initial;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: initial;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndd,\ndl,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n}\nfieldset,\nlegend {\n  padding: 0;\n}\nmenu,\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndialog {\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n[role=button],\nbutton {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\naudio,\ncanvas,\nembed,\niframe,\nimg,\nobject,\nsvg,\nvideo {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden] {\n  display: none;\n}\n*,\n::backdrop,\n:after,\n:before {\n  --tw-border-spacing-x:0;\n  --tw-border-spacing-y:0;\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness:proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:#3b82f680;\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n  --tw-shadow:0 0 #0000;\n  --tw-shadow-colored:0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n.relative {\n  position: relative;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-\\[6px\\] {\n  margin-bottom: 6px;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-24 {\n  height: 6rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-full {\n  height: 100%;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-\\[300px\\] {\n  width: 300px;\n}\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[24px\\] {\n  min-width: 24px;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.max-w-6xl {\n  max-width: 72rem;\n}\n.max-w-\\[1920px\\] {\n  max-width: 1920px;\n}\n.max-w-\\[40px\\] {\n  max-width: 40px;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.resize {\n  resize: both;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: .5rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-\\[20px\\] {\n  gap: 20px;\n}\n.gap-\\[24px\\] {\n  gap: 24px;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-scroll {\n  overflow: scroll;\n}\n.rounded {\n  border-radius: .25rem;\n}\n.rounded-\\[10px\\] {\n  border-radius: 10px;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: .5rem;\n}\n.rounded-md {\n  border-radius: .375rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-custom-stroke {\n  border-color: var(--stroke);\n}\n.border-gray-200 {\n  --tw-border-opacity:1;\n  border-color: rgb(229 231 235/var(--tw-border-opacity));\n}\n.border-gray-600 {\n  --tw-border-opacity:1;\n  border-color: rgb(75 85 99/var(--tw-border-opacity));\n}\n.bg-\\[\\#292929\\] {\n  --tw-bg-opacity:1;\n  background-color: rgb(41 41 41/var(--tw-bg-opacity));\n}\n.bg-\\[\\#ddd\\] {\n  --tw-bg-opacity:1;\n  background-color: rgb(221 221 221/var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity:1;\n  background-color: rgb(59 130 246/var(--tw-bg-opacity));\n}\n.bg-gray-300 {\n  --tw-bg-opacity:1;\n  background-color: rgb(209 213 219/var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity:1;\n  background-color: rgb(255 255 255/var(--tw-bg-opacity));\n}\n.p-2 {\n  padding: .5rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.py-2 {\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n}\n.py-4 {\n  padding-bottom: 1rem;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: .875rem;\n  line-height: 1.25rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.leading-none {\n  line-height: 1;\n}\n.text-\\[\\#FAFAFA\\] {\n  --tw-text-opacity:1;\n  color: rgb(250 250 250/var(--tw-text-opacity));\n}\n.text-\\[\\#ddd\\] {\n  --tw-text-opacity:1;\n  color: rgb(221 221 221/var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity:1;\n  color: rgb(0 0 0/var(--tw-text-opacity));\n}\n.text-custom-brightOrange-100 {\n  --tw-text-opacity:1;\n  color: rgb(236 128 47/var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity:1;\n  color: rgb(107 114 128/var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity:1;\n  color: rgb(75 85 99/var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity:1;\n  color: rgb(31 41 55/var(--tw-text-opacity));\n}\n.text-orange-500 {\n  --tw-text-opacity:1;\n  color: rgb(249 115 22/var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity:1;\n  color: rgb(255 255 255/var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.opacity-50 {\n  opacity: .5;\n}\n.shadow-md {\n  --tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;\n  --tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);\n}\n.shadow-md,\n.shadow-sm {\n  box-shadow:\n    var(--tw-ring-offset-shadow,0 0 #0000),\n    var(--tw-ring-shadow,0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow:0 1px 2px 0 #0000000d;\n  --tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  transition-duration: .15s;\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n:root {\n  --foreground-rgb:0,0,0;\n  --background-start-rgb:214,219,220;\n  --background-end-rgb:255,255,255;\n  --background:#fafafa;\n  --hover-primary:#f5f5f5;\n  --button:#333;\n  --hover-state:#fff0e0;\n  --stroke:#bfbfbf;\n  --secondary-text:#636366;\n  --primary-text:#292929;\n  --black:#292929;\n  --other-light-text:#999;\n  --accent:#f7931a;\n  --gradient:linear-gradient(\n      92.78deg,#e8782b,#f6a73f 101.1%);\n  --shadow-left:linear-gradient(\n      90deg,#fafafa 50.33%,#fafafa00);\n  --shadow-right:linear-gradient(\n      270deg,#fafafa 50.33%,#fafafa00);\n}\nhtml {\n  scroll-behavior: smooth !important;\n}\n.dark {\n  --background:#1c1c1e;\n  --hover-state:#2c2c2e;\n  --button:#8e8e93;\n  --stroke:#3a3a3c;\n  --secondary-text:#999;\n  --primary-text:#a4a4a8;\n  --black:#292929;\n  --other-light-text:#636366;\n  --accent:#f7931a;\n  --hover-primary:#2c2c2e;\n  --gradient:linear-gradient(\n      92.78deg,#e8782b,#f6a73f 101.1%);\n  --shadow-right:linear-gradient(\n      270deg,#1c1c1f 50.33%,#1c1c1f00);\n  --shadow-left:linear-gradient(\n      90deg,#1c1c1f 50.33%,#1c1c1f00);\n}\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity:1;\n  background-color: rgb(29 78 216/var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity:1;\n  background-color: rgb(243 244 246/var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-400:hover {\n  --tw-bg-opacity:1;\n  background-color: rgb(156 163 175/var(--tw-bg-opacity));\n}\n.hover\\:text-orange-400:hover {\n  --tw-text-opacity:1;\n  color: rgb(251 146 60/var(--tw-text-opacity));\n}\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: .5;\n}\n.disabled\\:hover\\:bg-transparent:hover:disabled {\n  background-color: initial;\n}\n.group:hover .group-hover\\:bg-black {\n  --tw-bg-opacity:1;\n  background-color: rgb(0 0 0/var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:text-\\[\\#fff\\] {\n  --tw-text-opacity:1;\n  color: rgb(255 255 255/var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-black {\n  --tw-text-opacity:1;\n  color: rgb(0 0 0/var(--tw-text-opacity));\n}\n.dark\\:border-gray-300:is(.dark *) {\n  --tw-border-opacity:1;\n  border-color: rgb(209 213 219/var(--tw-border-opacity));\n}\n.dark\\:bg-\\[\\#FAFAFA\\]:is(.dark *) {\n  --tw-bg-opacity:1;\n  background-color: rgb(250 250 250/var(--tw-bg-opacity));\n}\n.dark\\:bg-black:is(.dark *) {\n  --tw-bg-opacity:1;\n  background-color: rgb(0 0 0/var(--tw-bg-opacity));\n}\n.dark\\:text-\\[\\#292929\\]:is(.dark *) {\n  --tw-text-opacity:1;\n  color: rgb(41 41 41/var(--tw-text-opacity));\n}\n.dark\\:text-gray-300:is(.dark *) {\n  --tw-text-opacity:1;\n  color: rgb(209 213 219/var(--tw-text-opacity));\n}\n.dark\\:text-gray-400:is(.dark *) {\n  --tw-text-opacity:1;\n  color: rgb(156 163 175/var(--tw-text-opacity));\n}\n.dark\\:text-white:is(.dark *) {\n  --tw-text-opacity:1;\n  color: rgb(255 255 255/var(--tw-text-opacity));\n}\n.dark\\:hover\\:bg-gray-600:hover:is(.dark *) {\n  --tw-bg-opacity:1;\n  background-color: rgb(75 85 99/var(--tw-bg-opacity));\n}\n.disabled\\:dark\\:hover\\:bg-transparent:hover:is(.dark *):disabled {\n  background-color: initial;\n}\n@media (min-width:640px) {\n  .sm\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n  .sm\\:items-center {\n    align-items: center;\n  }\n  .sm\\:items-stretch {\n    align-items: stretch;\n  }\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width:768px) {\n  .md\\:mb-0 {\n    margin-bottom: 0;\n  }\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n  .md\\:items-center {\n    align-items: center;\n  }\n  .md\\:gap-4 {\n    gap: 1rem;\n  }\n  .md\\:gap-\\[24px\\] {\n    gap: 24px;\n  }\n  .md\\:font-semibold {\n    font-weight: 600;\n  }\n  .md\\:leading-tight {\n    line-height: 1.25;\n  }\n}\n@media (min-width:1024px) {\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n@media (min-width:1280px) {\n  .xl\\:block {\n    display: block;\n  }\n  .xl\\:h-6 {\n    height: 1.5rem;\n  }\n  .xl\\:border-2 {\n    border-width: 2px;\n  }\n}\n');

// src/components/button/Button.tsx
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
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className,
      onClick,
      disabled
    },
    label
  );
};

// src/components/footer/Footer.tsx
import React32 from "react";

// src/components/footer/FooterAbout.tsx
import React2 from "react";
var FooterAbout = (props) => {
  const { className: classname, children, entityLink, entityName, ...rest } = props;
  if (children) {
    /* @__PURE__ */ React2.createElement("div", { ...rest, className: classname }, props.children);
  }
  return /* @__PURE__ */ React2.createElement("div", { ...rest, className: `leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400 ${classname}` }, "Built with ", /* @__PURE__ */ React2.createElement("span", null, "\u{1F9E1}"), " by the", " ", /* @__PURE__ */ React2.createElement(
    "a",
    {
      href: entityLink != null ? entityLink : "https://bitcoindevs.xyz/",
      target: "_blank",
      rel: "noreferrer",
      className: "underline font-medium text-custom-brightOrange-100"
    },
    entityName != null ? entityName : "Bitcoin Dev Project"
  ));
};
FooterAbout.displayName = "FooterAbout";
var FooterAbout_default = FooterAbout;

// src/components/footer/FooterFeedback.tsx
import React3 from "react";
var FooterFeedback = (props) => {
  const { className: classname, children, feedbackLink, ...rest } = props;
  if (children) {
    /* @__PURE__ */ React3.createElement("div", { ...rest, className: props.className }, props.children);
  }
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      ...rest,
      className: `leading-none md:leading-tight flex flex-col sm:flex-row items-stretch sm:items-center text-sm text-gray-500 dark:text-gray-400 gap-[20px] md:gap-[24px] ${classname}`
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
import React30 from "react";

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

// src/icons/AuthorIcon.tsx
import * as React9 from "react";

// src/icons/BitcoinIcon.tsx
import * as React10 from "react";

// src/icons/BookmarkIcon.tsx
import * as React11 from "react";

// src/icons/CalendarIcon.tsx
import * as React12 from "react";

// src/icons/CloseIconOutlined.tsx
import * as React13 from "react";

// src/icons/DateIcon.tsx
import * as React14 from "react";

// src/icons/DayIcon.tsx
import * as React15 from "react";

// src/icons/DiceIcon.tsx
import * as React16 from "react";

// src/icons/DiscordIcon.tsx
import * as React17 from "react";
var DiscordIcon = ({
  width = 45,
  height,
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
import * as React18 from "react";

// src/icons/FilterCloseIcon.tsx
import * as React19 from "react";

// src/icons/GithubIcon.tsx
import * as React20 from "react";
var GithubIcon = ({
  width = 52,
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
import * as React21 from "react";

// src/icons/NightIcon.tsx
import * as React22 from "react";

// src/icons/NostrIcon.tsx
import * as React23 from "react";
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
    /* @__PURE__ */ React23.createElement("path", { d: "M31.5 13.5114V29.8827C31.5 30.4984 31.0041 30.998 30.3929 30.998H17.1081C16.4969 30.998 16.001 30.4984 16.001 29.8827V26.8339C16.0615 23.0966 16.454 19.5166 17.2779 17.8879C17.7719 16.9084 18.5861 16.3753 19.5214 16.0901C21.2884 15.5551 24.389 15.9209 25.705 15.858C25.705 15.858 29.6803 16.0173 29.6803 13.7494C29.6803 11.924 27.9035 12.0676 27.9035 12.0676C25.9451 12.1187 24.4534 11.985 23.4869 11.6014C21.8683 10.9602 21.8136 9.78388 21.8077 9.39048C21.7277 4.8467 15.0774 4.30184 9.21796 5.42893C2.81177 6.65635 9.28825 15.9072 9.28825 28.256V29.9044C9.27653 30.5102 8.79036 31 8.18508 31H1.60707C0.995937 31 0.5 30.5004 0.5 29.8847V1.56967C0.5 0.953998 0.995937 0.454378 1.60707 0.454378H7.79067C8.40181 0.454378 8.89775 0.953998 8.89775 1.56967C8.89775 2.48433 9.91891 2.99378 10.657 2.46072C12.8809 0.855648 15.7354 0 18.9297 0C26.0857 0 31.4961 4.20152 31.4961 13.5114H31.5ZM19.6209 10.1891C19.6209 8.87119 18.5607 7.80311 17.2525 7.80311C15.9444 7.80311 14.8841 8.87119 14.8841 10.1891C14.8841 11.507 15.9444 12.5751 17.2525 12.5751C18.5607 12.5751 19.6209 11.507 19.6209 10.1891Z", fill: "currentColor" })
  )
);
var NostrIcon_default = NostrIcon;

// src/icons/PlusIcon.tsx
import * as React24 from "react";

// src/icons/SearchIcon.tsx
import * as React25 from "react";

// src/icons/SortIcon.tsx
import * as React26 from "react";

// src/icons/SourceIcon.tsx
import * as React27 from "react";

// src/icons/TimeIcon.tsx
import * as React28 from "react";

// src/icons/TwitterXIcon.tsx
import * as React29 from "react";
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
var Platform = ({ platform }) => {
  const { entity, entityLink, icon, iconProps } = platform;
  const { className, ...rest } = iconProps != null ? iconProps : {};
  const getIcon = (entity2) => {
    if (icon) {
      return React30.cloneElement(icon, { ...rest, className });
    }
    if (entity2 === "twitter") {
      return /* @__PURE__ */ React30.createElement(TwitterXIcon_default, { className: `w-full ${className}`, ...rest });
    }
    if (entity2 === "github") {
      return /* @__PURE__ */ React30.createElement(GithubIcon_default, { className: `w-full ${className}`, ...rest });
    }
    if (entity2 === "discord") {
      return /* @__PURE__ */ React30.createElement(DiscordIcon_default, { className: `w-full ${className}`, ...rest });
    }
    if (entity2 === "nostr") {
      return /* @__PURE__ */ React30.createElement(NostrIcon_default, { className: `w-full ${className}`, ...rest });
    }
  };
  const iconElement = getIcon(entity);
  return /* @__PURE__ */ React30.createElement("div", { className: "flex items-center justify-center w-full max-w-[40px] min-w-[24px]" }, /* @__PURE__ */ React30.createElement(
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
    /* @__PURE__ */ React30.createElement("div", { ...rest, className: classname }, props.children);
  }
  return /* @__PURE__ */ React30.createElement(
    "div",
    {
      ...rest,
      className: `text-black mb-[6px] md:mb-0 dark:text-white flex w-fit max-w-full gap-[24px] ${classname}`
    },
    platforms.map((platform) => /* @__PURE__ */ React30.createElement(Platform, { key: platform.entity, platform }))
  );
};
FooterSocials.displayName = "FooterSocials";

// src/components/footer/FooterPublic.tsx
import React31 from "react";
var FooterPublic = ({ className: classname, dshboardLink, ...rest }) => {
  return /* @__PURE__ */ React31.createElement(
    "a",
    {
      href: dshboardLink,
      target: "_blank",
      rel: "noreferrer",
      className: `leading-none md:leading-tight text-sm text-gray-500 dark:text-gray-400 underline ${classname}`,
      ...rest
    },
    "View our public visitor count"
  );
};
var FooterPublic_default = FooterPublic;

// src/components/footer/Footer.tsx
var Separator = () => /* @__PURE__ */ React32.createElement("div", { className: "h-5 border xl:h-6 xl:border-2 border-custom-stroke hidden xl:block" });
var Footer = ({ children, className, separator, ...rest }) => {
  const viewSeparator = separator != null ? separator : /* @__PURE__ */ React32.createElement(Separator, null);
  const renderChildrenWithSeparator = () => {
    const newChildren = [];
    React32.Children.forEach(children, (child, index) => {
      if (React32.isValidElement(child)) {
        const displayName = child.type.displayName;
        newChildren.push(child);
        if (index < React32.Children.count(children) - 1) {
          newChildren.push(React32.cloneElement(viewSeparator, { key: `${displayName}-separator-${index}` }));
        }
      }
    });
    return newChildren;
  };
  return /* @__PURE__ */ React32.createElement("div", { className: `flex flex-col md:flex-row w-full justify-between sm:items-stretch md:items-center bg-white dark:bg-black gap-[20px] md:gap-[24px] mx-auto max-w-[1920px] p-2 ${className}`, ...rest }, renderChildrenWithSeparator());
};
Footer.About = FooterAbout_default;
Footer.Feedback = FooterFeedback_default;
Footer.Socials = FooterSocials;
Footer.Public = FooterPublic_default;

// src/components/carousel/Carousel.tsx
import React34, { useCallback, useLayoutEffect, useMemo, useRef } from "react";

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
import React33 from "react";
var CarouselContainer = ({ children, ...props }) => {
  const { className, ...rest } = props;
  const { containerRef } = useCarousel();
  return /* @__PURE__ */ React33.createElement("div", { ref: containerRef, className: `max-w-full h-full flex overflow-scroll gap-2  no-scrollbar ${className}`, ...rest }, children);
};
var CarouselItem = ({ children, ...props }) => {
  const { className, ...rest } = props;
  return /* @__PURE__ */ React33.createElement("div", { className: `flex-shrink-0 relative ${className}`, ...rest }, children);
};
var CarouselControls = ({ children, className, ...props }) => {
  return /* @__PURE__ */ React33.createElement("div", { className: `flex items-center gap-2 md:gap-4 w-fit mx-auto pt-4 ${className}`, ...props }, children);
};
var CarouselPreviousButton = ({ children, ...props }) => {
  const { goToPreviousSlide, possibleDirection } = useCarousel();
  if (children) {
    if (typeof children === "function") {
      return /* @__PURE__ */ React33.createElement(React33.Fragment, null, children(goToPreviousSlide, possibleDirection));
    } else {
      console.warn("CarouselPreviousButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is.");
      return /* @__PURE__ */ React33.createElement(React33.Fragment, null, children);
    }
  }
  const { icon, className, ...rest } = props;
  return /* @__PURE__ */ React33.createElement("button", { onClick: goToPreviousSlide, disabled: !possibleDirection.canGoToPreviousSlide, className: `w-10 h-10 flex items-center justify-center rounded-full border border-gray-600  dark:border-gray-300 p-2 text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent ${className}`, ...rest }, icon);
};
var CarouselNextButton = ({ children, ...props }) => {
  const { goToNextSlide, possibleDirection } = useCarousel();
  if (children) {
    if (typeof children === "function") {
      return /* @__PURE__ */ React33.createElement(React33.Fragment, null, children(goToNextSlide, possibleDirection));
    } else {
      console.warn("CarouselNextButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is.");
      return /* @__PURE__ */ React33.createElement(React33.Fragment, null, children);
    }
  }
  const { icon, className, ...rest } = props;
  return /* @__PURE__ */ React33.createElement("button", { onClick: goToNextSlide, disabled: !possibleDirection.canGoToNextSlide, className: `w-10 h-10 flex items-center justify-center rounded-full border border-gray-600  dark:border-gray-300 p-2 text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent ${className}`, ...rest }, icon);
};

// src/components/carousel/Carousel.tsx
var CarouselContext = React34.createContext(null);
var useCarousel = () => {
  const context = React34.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};
var CarouselProvider = ({ children, containerRef, config = DefaultCarouselConfig }) => {
  const { stepWidthInPercent } = config;
  const [carouselWidth, setCarouselWidth] = React34.useState(0);
  const [scrollableWidth, setScrollableWidth] = React34.useState(0);
  const [scrollLeft, setScrollLeft] = React34.useState(0);
  const possibleDirection = useMemo(() => {
    console.log("I ran update direction");
    if (!containerRef.current) return { canGoToNextSlide: false, canGoToPreviousSlide: false };
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
      var _a, _b, _c, _d, _e, _f, _g, _h;
      setCarouselWidth((_b = (_a = containerRef.current) == null ? void 0 : _a.clientWidth) != null ? _b : 0);
      setScrollableWidth((_d = (_c = containerRef.current) == null ? void 0 : _c.scrollWidth) != null ? _d : 0);
      setScrollLeft((_f = (_e = containerRef.current) == null ? void 0 : _e.scrollLeft) != null ? _f : 0);
      console.log("i updated size", "width", (_g = containerRef.current) == null ? void 0 : _g.clientWidth, "scrollable", (_h = containerRef.current) == null ? void 0 : _h.scrollWidth);
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
    console.log(containerRef.current);
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
    const scrollLeft2 = Math.max(0, containerRef.current.scrollLeft - responsiveStepWidth);
    containerRef.current.scrollTo({
      left: scrollLeft2,
      behavior: "smooth"
    });
  }, [containerRef, stepWidthInPercent]);
  return /* @__PURE__ */ React34.createElement(CarouselContext.Provider, { value: { containerRef, totalCarouselItems, goToNextSlide, goToPreviousSlide, possibleDirection } }, children);
};
var Carousel = ({ children, config }) => {
  const containerRef = useRef(null);
  return /* @__PURE__ */ React34.createElement(CarouselProvider, { containerRef, config }, children);
};
Carousel.Container = CarouselContainer;
Carousel.Item = CarouselItem;
Carousel.Controls = CarouselControls;
Carousel.PreviousButton = CarouselPreviousButton;
Carousel.NextButton = CarouselNextButton;
export {
  Button,
  Carousel,
  Footer,
  Separator
};
//# sourceMappingURL=index.mjs.map