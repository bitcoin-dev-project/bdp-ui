import React from "react"
import { FooterPartsPrimitiveProps } from "./types"

interface FooterLegalProps extends FooterPartsPrimitiveProps<HTMLDivElement> {}

const FooterLegal = (props: React.PropsWithChildren<FooterLegalProps>) => {
  const { className: classname, children, ...rest } = props
  if (children) {
    return (
      <div className={`${props.className} text-sm text-gray-500 dark:text-gray-400`}>
        {props.children}
      </div>
    )
  }
  return (
    <div {...rest} className={`text-sm text-gray-500 dark:text-gray-400 flex gap-2 justify-between ${classname}`}>
      <p>© {new Date().getFullYear()} ChaincodeLabs</p>
      <p>Privacy Policy</p>
      <p>Terms of Use</p>
    </div>
  )
}
FooterLegal.displayName = "FooterLegal"
export default FooterLegal