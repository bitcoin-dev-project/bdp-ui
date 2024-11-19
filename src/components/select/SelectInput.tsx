import React, { useEffect, useRef } from "react";
import { SearchIcon, ArrowRight } from "../../icons";
import { cn } from "../../utils/cn";
import { useMultiSelect } from "./MultiSelect";

type StyleConfig = {
  container?: string;
  input?: string;
  searchIcon?: string;
  searchIconWrapper?: string;
  arrowIcon?: string;
  arrowIconWrapper?: string;
};

export type SelectInputProps = {
  defaultPlaceholder: string;
  className?: string;
  styles?: StyleConfig;
};

const defaultStyles = {
  container: "relative text-bdp-primary-text",
  input:
    "bg-transparent text-base 2xl:text-base font-medium w-full pl-12 pr-10 py-4 rounded-xl border-[1px] border-bdp-stroke focus:outline-none focus:outline-bdp-secondary-text focus:outline-offset-0 leading-none",
  searchIcon: "stroke-bdp-secondary-text w-[16px] h-[16px]",
  searchIconWrapper: "absolute top-1/2 -translate-y-1/2 left-[18px]",
  arrowIcon: "",
  arrowIconWrapper:
    "absolute p-2 cursor-pointer top-1/2 -translate-y-1/2 right-[18px] rotate-90 data-[is-open=false]:-rotate-90 transition-transform",
} as const;

const SelectInput = ({
  defaultPlaceholder,
  className,
  styles = {},
}: SelectInputProps) => {
  const selectContextData = useMultiSelect();

  const searchRef = useRef<HTMLInputElement>(null!);
  const {
    currentNavigateCheckbox,
    toggleListOpen,
    isListOpen,
    onSearch,
    searchInputRef,
    setSearchInputRef,
  } = selectContextData;

  useEffect(() => {
    if (searchRef.current && !searchInputRef) {
      setSearchInputRef(searchRef);
    }
  }, []);

  return (
    <div className={cn(defaultStyles.container, styles.container, className)}>
      <input
        className={cn(defaultStyles.input, styles.input)}
        type="text"
        placeholder={currentNavigateCheckbox || defaultPlaceholder}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        ref={searchRef}
      />
      <span
        className={cn(
          defaultStyles.searchIconWrapper,
          styles.searchIconWrapper,
        )}
      >
        <SearchIcon
          className={cn(defaultStyles.searchIcon, styles.searchIcon)}
        />
      </span>
      <span
        data-is-open={isListOpen}
        onClick={toggleListOpen}
        className={cn(defaultStyles.arrowIconWrapper, styles.arrowIconWrapper)}
      >
        <ArrowRight className={cn(defaultStyles.arrowIcon, styles.arrowIcon)} />
      </span>
    </div>
  );
};

export default SelectInput;
