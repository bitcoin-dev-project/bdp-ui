import React from "react";
import { ArrowRight } from "../../icons";
import { cn } from "../../utils/cn";
import { useSingleSelect } from "./Dropdown";

type StyleConfig = {
  container?: string;
  trigger?: string;
  arrowIcon?: string;
  arrowIconWrapper?: string;
};

export type SingleSelectTriggerProps = {
  defaultPlaceholder: string;
  className?: string;
  styles?: StyleConfig;
};

const defaultStyles = {
  container: "relative text-bdp-primary-text",
  trigger:
    "block bg-transparent text-base text-bdp-accent 2xl:text-base font-medium w-full pl-6 py-4 rounded-xl border-[1px] border-bdp-stroke focus:outline-none focus:outline-bdp-secondary-text focus:outline-offset-0 leading-none",
  arrowIcon: "",
  arrowIconWrapper:
    "absolute p-2 cursor-pointer top-1/2 -translate-y-1/2 right-[18px] rotate-90 data-[is-open=false]:-rotate-90 transition-transform",
} as const;

const SingleSelectTrigger = ({
  defaultPlaceholder,
  className,
  styles = {},
}: SingleSelectTriggerProps) => {
  const { selectedOption, toggleListOpen, isListOpen, triggerRef } =
    useSingleSelect();

  return (
    <div
      ref={triggerRef}
      className={cn(defaultStyles.container, styles.container, className)}
      onClick={toggleListOpen}
    >
      <label className={cn(defaultStyles.trigger, styles.trigger)}>
        {selectedOption?.label || defaultPlaceholder}
      </label>
      <span
        data-is-open={isListOpen}
        className={cn(defaultStyles.arrowIconWrapper, styles.arrowIconWrapper)}
      >
        <ArrowRight className={cn(defaultStyles.arrowIcon, styles.arrowIcon)} />
      </span>
    </div>
  );
};

export default SingleSelectTrigger;
