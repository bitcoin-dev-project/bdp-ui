import React, { useEffect, useMemo, useRef } from "react";
import { matchCharactersWithRegex } from "../../utils/filter";
import BaseSelectList, { SelectListProps } from "./BaseSelectList";
import { useMultiSelect } from "./MultiSelect";

export type MultiSelectListProps = Omit<SelectListProps, "selectContextData">;

const SelectList = (props: MultiSelectListProps) => {
  const selectContextData = useMultiSelect();

  const containerRef = useRef<HTMLDivElement>(null!);
  const {
    containerRef: containerRefProvider,
    setContainerRef,
    isListOpen,
    currentNavigateCheckbox,
    inputValue: searchTerm,
  } = selectContextData;

  useEffect(() => {
    if (!containerRefProvider && containerRef.current) {
      setContainerRef(containerRef);
    }
  }, []);

  const filteredOptions = useMemo(() => {
    if (searchTerm.trim()) {
      return props.options.filter((option) => {
        return matchCharactersWithRegex(option.label, searchTerm.trim());
      });
    }
    return props.options;
  }, [props.options, searchTerm]);

  return (
    <BaseSelectList
      {...props}
      options={filteredOptions}
      selectContextData={{ isListOpen, containerRef, currentNavigateCheckbox }}
    />
  );
};

export default SelectList;
