import React__default from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
}
declare const Button: React__default.FC<ButtonProps>;

interface FooterPartsPrimitiveProps<T> extends React.HTMLAttributes<T> {
    className?: string;
}

interface FooterAboutProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
    entityLink?: string;
    entityName?: string;
}

interface FooterFeedbackProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
    feedbackLink: string;
}

type SupportedSocialMedia = "twitter" | "github" | "discord" | "nostr";
type ManadatorySocialMediaProps<T> = {
    entityLink: string;
    iconProps?: React__default.SVGProps<SVGSVGElement>;
} & T;
type SocialMediaProps = ManadatorySocialMediaProps<{
    entity: SupportedSocialMedia;
    icon?: React__default.ReactElement;
}> | ManadatorySocialMediaProps<{
    entity: Exclude<string, SupportedSocialMedia>;
    icon: React__default.ReactElement;
}>;
interface FooterSocialsProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
    platforms: SocialMediaProps[];
}

interface FooterPublicProps extends FooterPartsPrimitiveProps<HTMLAnchorElement> {
    dshboardLink: string;
}

interface FooterRootProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
    separator?: React__default.ReactElement;
}
declare const Separator: () => React__default.JSX.Element;
declare const Footer: React__default.FC<FooterRootProps> & {
    About: React__default.FC<FooterAboutProps>;
    Feedback: React__default.FC<FooterFeedbackProps>;
    Socials: React__default.FC<FooterSocialsProps>;
    Public: React__default.FC<FooterPublicProps>;
};

export { Button, type ButtonProps, Footer, type FooterRootProps, Separator };
