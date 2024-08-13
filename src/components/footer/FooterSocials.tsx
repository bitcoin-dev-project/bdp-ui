import React from "react"
import { FooterPartsPrimitiveProps } from "./types"
import { TwitterXIcon, GithubIcon, DiscordIcon, NostrIcon } from "../../icons"

type SupportedSocialMedia = "twitter" | "github" | "discord" | "nostr"
type SocialMediaProps = {
  entity: SupportedSocialMedia
  entityLink: string
  enitityName: string
  icon?: React.ReactSVGElement
  iconProps?: React.SVGProps<SVGSVGElement>
}
interface FooterSocialsProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
  platforms: SocialMediaProps[]
}

const Platform = ({platform}: {platform: SocialMediaProps}) => {
  const { entity, entityLink, enitityName, icon, iconProps } = platform
  const getIcon = (entity: SupportedSocialMedia) => {
    const { className, ...rest } = iconProps ?? {}
    if (icon) {
      return icon
    }
    if (entity === "twitter") {
      return <TwitterXIcon className={`w-[34px] ${className}`} {...rest} />
    }
    if (entity === "github") {
      return <GithubIcon className={`w-[34px] ${className}`} {...rest} />
    }
    if (entity === "discord") {
      return <DiscordIcon className={`w-[36px] ${className}`} {...rest} />
    }
    if (entity === "nostr") {
      return <NostrIcon className={`w-[32px] ${className}`} {...rest} />
    }
  }
  const iconElement = icon ? React.cloneElement(icon, { ...iconProps }) : getIcon(entity)

  return (
    <div className="flex items-center justify-center">
      <a href={entityLink} target="_blank" rel="noreferrer" className="underline font-medium">
        {iconElement}
      </a>
    </div>
  )
}

export const FooterSocials = (props: React.PropsWithChildren<FooterSocialsProps>) => {
  const { className: classname, children, platforms, ...rest } = props
  if (children) {
    <div {...rest} className={props.classname}>
      {props.children}
    </div>
  }
  return (
    <div {...rest} className={`text-black dark:text-black flex gap-[24px] ${classname}`}>
      {platforms.map((platform, index) => (
        <Platform key={platform.entity} platform={platform} />
      ))}
    </div>
  )
}

FooterSocials.displayName = "FooterSocials"