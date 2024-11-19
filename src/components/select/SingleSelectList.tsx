import React, { useEffect } from "react";
import BaseSelectList, { SelectListProps } from "./BaseSelectList";
import { useSingleSelect } from "./Dropdown";

export type SingleSelectOption = {
  label: string;
  value: string;
};

export type OptionSelectHandler = (option: SingleSelectOption) => void;

export type SingleSelectListProps = Omit<
  SelectListProps,
  "selectContextData" | "options" | "onOptionSelect"
> & {
  options: SingleSelectOption[];
  value: string;
  onOptionSelect: OptionSelectHandler;
};

const SingleSelectList = (props: SingleSelectListProps) => {
  const {
    isListOpen,
    containerRef: containerRefProvider,
    setContainerRef,
    handleSelectOption,
    setSelectedOption,
  } = useSingleSelect();
  const containerRef = React.useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (!containerRefProvider && containerRef.current) {
      setContainerRef(containerRef);
    }
  }, []);

  const handleOption = ({
    value,
  }: {
    action: "select" | "deselect";
    value: string;
    event: React.MouseEvent;
  }) => {
    const option = props.options.find((option) => option.value === value);
    if (option) {
      handleSelectOption(option);
      props.onOptionSelect(option);
    }
  };

  const managedOptions = props.options.map((option) => ({
    ...option,
    selected: option.value === props.value,
  }));

  useEffect(() => {
    setSelectedOption(
      props.options.find((option) => option.value === props.value) || null,
    );
  }, [props.value, props.options]);

  return (
    <BaseSelectList
      {...props}
      options={managedOptions}
      onOptionSelect={handleOption}
      selectContextData={{
        isListOpen,
        containerRef,
        currentNavigateCheckbox: "",
      }}
      styles={{
        container: "absolute w-full bg-bdp-background",
        ...props.styles,
      }}
    />
  );
};

export default SingleSelectList;
