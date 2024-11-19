import React, { useState } from "react";
import useCheckboxNavigate from "./useSelectNavigate";
import SelectInput, { SelectInputProps } from "./SelectInput";
import SelectList, { MultiSelectListProps } from "./SelectList";

export type SelectContextType = {
  containerRef: React.MutableRefObject<HTMLDivElement> | null;
  setContainerRef: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<HTMLDivElement> | null>
  >;
  searchInputRef: React.MutableRefObject<HTMLInputElement> | null;
  setSearchInputRef: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<HTMLInputElement> | null>
  >;
  isListOpen: boolean;
  toggleListOpen: () => void;
  currentNavigateCheckbox: string;
  toggleRefocus: () => void;
  onSearch: (value: string) => void;
  inputValue: string;
};

type SelectProviderProps = {
  children: React.ReactNode;
  isCollapsible?: boolean;
};

const SelectContext = React.createContext<SelectContextType | null>(null);
export const useMultiSelect = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("useMultiSelect must be used within a MultiSelectProvider");
  }
  return context;
};

export const MultiSelectProvider = ({
  children,
  isCollapsible = true,
}: SelectProviderProps) => {
  const [containerRef, setContainerRef] =
    useState<React.MutableRefObject<HTMLDivElement> | null>(null);
  const [searchInputRef, setSearchInputRef] =
    useState<React.MutableRefObject<HTMLInputElement> | null>(null);

  const [isListOpen, setIsListOpen] = useState(true);

  const toggleListOpen = () => {
    if (!isCollapsible) return;
    setIsListOpen((prev) => !prev);
  };

  const [inputValue, setInputValue] = useState("");

  const { currentNavigateCheckbox, toggleRefocus } = useCheckboxNavigate({
    checkboxContainer: containerRef,
    searchEl: searchInputRef,
    options: [],
  });

  // const [currentNavigateCheckbox, setcurrentNavigateCheckbox] = useState("")
  const onSearch = (value: string) => {
    const newValue = value.trim();
    setInputValue(newValue);
  };

  return (
    <SelectContext.Provider
      value={{
        containerRef,
        setContainerRef,
        searchInputRef,
        setSearchInputRef,
        isListOpen,
        toggleListOpen,
        currentNavigateCheckbox,
        toggleRefocus,
        onSearch,
        inputValue,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export const MultiSelect: React.FC<SelectProviderProps> & {
  Input: React.FC<SelectInputProps>;
  List: React.FC<MultiSelectListProps>;
} = ({ children, isCollapsible = true }: SelectProviderProps) => {
  return (
    <MultiSelectProvider isCollapsible={isCollapsible}>
      {children}
    </MultiSelectProvider>
  );
};

MultiSelect.Input = SelectInput;
MultiSelect.List = SelectList;
