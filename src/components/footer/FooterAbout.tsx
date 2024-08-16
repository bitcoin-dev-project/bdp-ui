import React from "react"
import { FooterPartsPrimitiveProps } from "./types"

interface FooterAboutProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
  entityLink?: string
  entityName?: string
}

const FooterAbout = (props: React.PropsWithChildren<FooterAboutProps>) => {
  const { className: classname, children, entityLink, entityName, ...rest } = props
  if (children) {
    <div {...rest} className={classname}>
      {props.children}
    </div>
  }
  return (
    <div {...rest} className={`text-sm text-gray-500 dark:text-gray-400 ${classname}`}>
      Built with <span>🧡</span> by the{" "}
          <a
            href={entityLink ?? "https://bitcoindevs.xyz/"}
            target="_blank"
            rel="noreferrer"
            className="underline font-medium text-custom-brightOrange-100"
          >
            {entityName ?? "Bitcoin Dev Project"}
          </a>
    </div>
  )
}

FooterAbout.displayName = "FooterAbout"
export default FooterAbout