import React__default from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "navigation" | "rebrand";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    className?: string;
}
declare const Button: React__default.FC<ButtonProps>;

interface LeavesProps {
    leavesCount: number;
    onClick?: () => void;
    disabled?: boolean;
    withBorder?: boolean;
    selected?: boolean;
    showLeftOvers?: boolean;
}
declare const Leaf: React__default.FC<LeavesProps>;

interface FooterPartsPrimitiveProps<T> extends React.HTMLAttributes<T> {
    className?: string;
}

interface FooterAboutProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
    entityLink?: string;
    entityName?: string;
    entityText?: string;
}

interface FooterFeedbackProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
    feedbackLink: string;
    entityText?: string;
    entityCtaText?: string;
}

type SupportedSocialMedia = "twitter" | "github" | "discord" | "nostr" | "linkedin";
type MandatorySocialMediaProps<T> = {
    entityLink: string;
    iconProps?: React__default.SVGProps<SVGSVGElement>;
} & T;
type SocialMediaProps = MandatorySocialMediaProps<{
    entity: SupportedSocialMedia;
    icon?: React__default.ReactElement;
}> | MandatorySocialMediaProps<{
    entity: Exclude<string, SupportedSocialMedia>;
    icon: React__default.ReactElement;
}>;
interface FooterSocialsProps extends FooterPartsPrimitiveProps<HTMLDivElement> {
    platforms: SocialMediaProps[];
}

interface FooterPublicProps extends FooterPartsPrimitiveProps<HTMLAnchorElement> {
    dashboardLink: string;
    entityText?: string;
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

type CarouselConfig = {
    stepWidthInPercent: number;
};

interface ComponentStylePrimitiveProps<T> extends React.HTMLAttributes<T> {
    className?: string;
}

interface CarouselContainerProps extends ComponentStylePrimitiveProps<HTMLDivElement> {
    children: React__default.ReactNode;
}
type CarouselItemProps = CarouselContainerProps;
interface CarouselControlProps extends ComponentStylePrimitiveProps<HTMLDivElement> {
    children: React__default.ReactNode;
}
interface CarouselButtonProps extends Omit<ComponentStylePrimitiveProps<HTMLButtonElement>, "children"> {
    children?: React__default.ReactNode | ((goToPreviousSlide: () => void, possibleDirection: CarouselContextType["possibleDirection"]) => React__default.ReactNode);
    icon: React__default.ReactNode;
}

interface CarouselContextType {
    containerRef: React__default.RefObject<HTMLDivElement>;
    totalCarouselItems: number;
    goToNextSlide: () => void;
    goToPreviousSlide: () => void;
    possibleDirection: {
        canGoToNextSlide: boolean;
        canGoToPreviousSlide: boolean;
    };
}
interface CarouselProviderProps {
    children: React__default.ReactNode;
    containerRef: React__default.RefObject<HTMLDivElement>;
    config?: CarouselConfig;
}
declare const Carousel: React__default.FC<Omit<CarouselProviderProps, "containerRef">> & {
    Container: React__default.FC<CarouselContainerProps>;
    Item: React__default.FC<CarouselItemProps>;
    Controls: React__default.FC<CarouselControlProps>;
    PreviousButton: React__default.FC<CarouselButtonProps>;
    NextButton: React__default.FC<CarouselButtonProps>;
};

type StyleConfig$4 = {
    container?: string;
    input?: string;
    searchIcon?: string;
    searchIconWrapper?: string;
    arrowIcon?: string;
    arrowIconWrapper?: string;
};
type SelectInputProps = {
    defaultPlaceholder: string;
    className?: string;
    styles?: StyleConfig$4;
};

type BaseSelectContextTypeForList = {
    isListOpen: boolean;
    currentNavigateCheckbox: string;
    containerRef: React__default.MutableRefObject<HTMLDivElement> | null;
};
type SelectOption = {
    label: string;
    count?: number;
    value: string;
    selected: boolean;
};
type StyleConfig$3 = {
    container?: string;
    optionWrapper?: string;
    selectedOption?: string;
    optionInner?: string;
    icon?: string;
    label?: string;
    count?: string;
    noResults?: string;
};
type OnOptionSelect = ({ action, value, event, }: {
    action: "select" | "deselect";
    value: string;
    event: React__default.MouseEvent;
}) => void;
type SelectListProps = {
    options: SelectOption[];
    label: string;
    onOptionSelect: OnOptionSelect;
    className?: string;
    styles?: StyleConfig$3;
    noResultsMessage?: string;
    selectContextData: BaseSelectContextTypeForList;
};

type MultiSelectListProps = Omit<SelectListProps, "selectContextData">;

type SelectContextType$1 = {
    containerRef: React__default.MutableRefObject<HTMLDivElement> | null;
    setContainerRef: React__default.Dispatch<React__default.SetStateAction<React__default.MutableRefObject<HTMLDivElement> | null>>;
    searchInputRef: React__default.MutableRefObject<HTMLInputElement> | null;
    setSearchInputRef: React__default.Dispatch<React__default.SetStateAction<React__default.MutableRefObject<HTMLInputElement> | null>>;
    isListOpen: boolean;
    toggleListOpen: () => void;
    currentNavigateCheckbox: string;
    toggleRefocus: () => void;
    onSearch: (value: string) => void;
    inputValue: string;
};
type SelectProviderProps = {
    children: React__default.ReactNode;
    isCollapsible?: boolean;
};
declare const useMultiSelect: () => SelectContextType$1;
declare const MultiSelectProvider: ({ children, isCollapsible, }: SelectProviderProps) => React__default.JSX.Element;
declare const MultiSelect: React__default.FC<SelectProviderProps> & {
    Input: React__default.FC<SelectInputProps>;
    List: React__default.FC<MultiSelectListProps>;
};

type SingleSelectOption = {
    label: string;
    value: string;
};
type OptionSelectHandler = (option: SingleSelectOption) => void;
type SingleSelectListProps = Omit<SelectListProps, "selectContextData" | "options" | "onOptionSelect"> & {
    options: SingleSelectOption[];
    value: string;
    onOptionSelect: OptionSelectHandler;
};

type StyleConfig$2 = {
    container?: string;
    trigger?: string;
    arrowIcon?: string;
    arrowIconWrapper?: string;
};
type SingleSelectTriggerProps = {
    defaultPlaceholder: string;
    className?: string;
    styles?: StyleConfig$2;
};

type StyleConfig$1 = {
    container?: string;
    input?: string;
    list?: string;
    option?: string;
};
type SelectContextType = {
    isListOpen: boolean;
    toggleListOpen: () => void;
    selectedOption: SingleSelectOption | null;
    setSelectedOption: (option: SingleSelectOption | null) => void;
    containerRef: React__default.MutableRefObject<HTMLDivElement> | null;
    setContainerRef: React__default.Dispatch<React__default.SetStateAction<React__default.MutableRefObject<HTMLDivElement> | null>>;
    handleSelectOption: (option: SingleSelectOption) => void;
    triggerRef: React__default.RefObject<HTMLDivElement>;
};
declare const useSingleSelect: () => SelectContextType;
type SingleSelectProviderProps = {
    children: React__default.ReactNode;
    triggerRef: React__default.RefObject<HTMLDivElement>;
    className?: string;
    styles?: StyleConfig$1;
    disabled?: boolean;
};
declare const SingleSelect: React__default.FC<Omit<SingleSelectProviderProps, "triggerRef">> & {
    List: React__default.FC<SingleSelectListProps>;
    Trigger: React__default.FC<SingleSelectTriggerProps>;
};

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
declare function Banner({ bodyText, headingText, styles, hasBoss, ...rest }: Props): React__default.JSX.Element;

interface SearchProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    containerClassName?: string;
    inputClassName?: string;
    iconClassName?: string;
    showIcon?: boolean;
    size?: "small" | "default" | "large";
}
declare const Search: React__default.ForwardRefExoticComponent<SearchProps & React__default.RefAttributes<HTMLInputElement>>;

type TagType = "guide" | "seminar" | "tool" | "interactive";
type TagState = "default" | "hover" | "selected";
interface TagProps {
    type: TagType;
    state?: TagState;
    onClick?: () => void;
    className?: string;
    children?: React__default.ReactNode;
    selected?: boolean;
    onSelectChange?: (selected: boolean) => void;
}
declare const Tag: React__default.FC<TagProps>;

type PillState = "default" | "hover" | "selected";
interface PillProps {
    state?: PillState;
    onClick?: () => void;
    className?: string;
    children?: React__default.ReactNode;
    selected?: boolean;
    onSelectChange?: (selected: boolean) => void;
}
declare const Pill: React__default.FC<PillProps>;

declare const ByBDPBadge: () => React__default.JSX.Element;

interface CardProps {
    title: string;
    description: string;
    bannerColor: string;
    onClick: () => void;
    logo: string;
    link: string;
    difficulty: Difficulty;
    tagList: TagType[];
    byBDP?: boolean;
}
type Difficulty = "easy" | "medium" | "hard";
declare const BDPCard: React__default.FC<CardProps>;

export { BDPCard, Banner, Button, type ButtonProps, ByBDPBadge, Carousel, type CarouselContextType, Footer, type FooterRootProps, Leaf, type LeavesProps, MultiSelect, MultiSelectProvider, Pill, type PillProps, type PillState, Search, type SearchProps, type SelectContextType$1 as SelectContextType, Separator, SingleSelect, Tag, type TagProps, type TagState, type TagType, useMultiSelect, useSingleSelect };
