// src/components/Button/Button.tsx
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
styleInject('/*! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n  border: 0 solid #e5e7eb;\n}\n:after,\n:before {\n  --tw-content:"";\n}\n:host,\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    Apple Color Emoji,\n    Segoe UI Emoji,\n    Segoe UI Symbol,\n    Noto Color Emoji;\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  -webkit-tap-highlight-color: transparent;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    Liberation Mono,\n    Courier New,\n    monospace;\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: initial;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-feature-settings: inherit;\n  font-variation-settings: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  letter-spacing: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\ninput:where([type=button]),\ninput:where([type=reset]),\ninput:where([type=submit]) {\n  -webkit-appearance: button;\n  background-color: initial;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: initial;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndd,\ndl,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n}\nfieldset,\nlegend {\n  padding: 0;\n}\nmenu,\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndialog {\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n[role=button],\nbutton {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\naudio,\ncanvas,\nembed,\niframe,\nimg,\nobject,\nsvg,\nvideo {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden] {\n  display: none;\n}\n*,\n::backdrop,\n:after,\n:before {\n  --tw-border-spacing-x:0;\n  --tw-border-spacing-y:0;\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness:proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:#3b82f680;\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n  --tw-shadow:0 0 #0000;\n  --tw-shadow-colored:0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-24 {\n  height: 6rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.max-w-6xl {\n  max-width: 72rem;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded {\n  border-radius: .25rem;\n}\n.rounded-lg {\n  border-radius: .5rem;\n}\n.bg-\\[\\#ddd\\] {\n  --tw-bg-opacity:1;\n  background-color: rgb(221 221 221/var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity:1;\n  background-color: rgb(59 130 246/var(--tw-bg-opacity));\n}\n.bg-gray-300 {\n  --tw-bg-opacity:1;\n  background-color: rgb(209 213 219/var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity:1;\n  background-color: rgb(255 255 255/var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.py-2 {\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: .875rem;\n  line-height: 1.25rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.text-\\[\\#ddd\\] {\n  --tw-text-opacity:1;\n  color: rgb(221 221 221/var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity:1;\n  color: rgb(31 41 55/var(--tw-text-opacity));\n}\n.text-orange-500 {\n  --tw-text-opacity:1;\n  color: rgb(249 115 22/var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity:1;\n  color: rgb(255 255 255/var(--tw-text-opacity));\n}\n.opacity-50 {\n  opacity: .5;\n}\n.shadow-md {\n  --tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;\n  --tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow,0 0 #0000),\n    var(--tw-ring-shadow,0 0 #0000),\n    var(--tw-shadow);\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  transition-duration: .15s;\n}\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity:1;\n  background-color: rgb(29 78 216/var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-400:hover {\n  --tw-bg-opacity:1;\n  background-color: rgb(156 163 175/var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:bg-black {\n  --tw-bg-opacity:1;\n  background-color: rgb(0 0 0/var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:text-\\[\\#fff\\] {\n  --tw-text-opacity:1;\n  color: rgb(255 255 255/var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-black {\n  --tw-text-opacity:1;\n  color: rgb(0 0 0/var(--tw-text-opacity));\n}\n@media (min-width:640px) {\n  .sm\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width:768px) {\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n@media (min-width:1024px) {\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n');

// src/components/Button/Button.tsx
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
export {
  Button
};
//# sourceMappingURL=index.mjs.map