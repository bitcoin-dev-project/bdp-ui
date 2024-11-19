"use client";

import React, { createContext, useCallback, useState } from "react";
import SingleSelectList, {
  SingleSelectListProps,
  SingleSelectOption,
} from "./SingleSelectList";
import SingleSelectTrigger, {
  SingleSelectTriggerProps,
} from "./SingleSelectInput";

type StyleConfig = {
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
  containerRef: React.MutableRefObject<HTMLDivElement> | null;
  setContainerRef: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<HTMLDivElement> | null>
  >;
  handleSelectOption: (option: SingleSelectOption) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
};

const SingleSelectContext = createContext<SelectContextType | null>(null);
export const useSingleSelect = () => {
  const context = React.useContext(SingleSelectContext);
  if (!context) {
    throw new Error(
      "useSingleSelect must be used within a SingleSelectProvider",
    );
  }
  return context;
};

type SingleSelectProviderProps = {
  children: React.ReactNode;
  triggerRef: React.RefObject<HTMLDivElement>;
  className?: string;
  styles?: StyleConfig;
  disabled?: boolean;
};

const SingleSelectProvider = ({
  children,
  triggerRef,
  disabled = false,
}: SingleSelectProviderProps) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [containerRef, setContainerRef] =
    useState<React.MutableRefObject<HTMLDivElement> | null>(null);
  const [selectedOption, setSelectedOption] =
    useState<SingleSelectOption | null>(null);

  const toggleListOpen = () => {
    if (!disabled) {
      setIsListOpen((prev) => !prev);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSelectOption = (_option: SingleSelectOption) => {
    setIsListOpen(false);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        containerRef?.current &&
        triggerRef?.current &&
        !containerRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsListOpen(false);
      }
    },
    [containerRef, isListOpen],
  );

  React.useEffect(() => {
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
    triggerRef,
  };

  return (
    <SingleSelectContext.Provider value={contextValue}>
      <div className="relative">{children}</div>
    </SingleSelectContext.Provider>
  );
};

export const SingleSelect: React.FC<
  Omit<SingleSelectProviderProps, "triggerRef">
> & {
  List: React.FC<SingleSelectListProps>;
  Trigger: React.FC<SingleSelectTriggerProps>;
} = ({
  children,
  disabled = false,
}: Omit<SingleSelectProviderProps, "triggerRef">) => {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  return (
    <SingleSelectProvider disabled={disabled} triggerRef={triggerRef}>
      {children}
    </SingleSelectProvider>
  );
};

SingleSelect.List = SingleSelectList;
SingleSelect.Trigger = SingleSelectTrigger;
