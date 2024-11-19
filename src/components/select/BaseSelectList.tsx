import { LightningIconSolid } from "../../icons";
import { numberFormat } from "../../utils";
import { cn } from "../../utils/cn";
import React from "react";

export type BaseSelectContextTypeForList = {
  isListOpen: boolean;
  currentNavigateCheckbox: string;
  containerRef: React.MutableRefObject<HTMLDivElement> | null;
};

export type SelectOption = {
  label: string;
  count?: number;
  value: string;
  selected: boolean;
};

type StyleConfig = {
  container?: string;
  optionWrapper?: string;
  selectedOption?: string;
  optionInner?: string;
  icon?: string;
  label?: string;
  count?: string;
  noResults?: string;
};

export type OnOptionSelect = ({
  action,
  value,
  event,
}: {
  action: "select" | "deselect";
  value: string;
  event: React.MouseEvent;
}) => void;

export type SelectListProps = {
  options: SelectOption[];
  label: string;
  onOptionSelect: OnOptionSelect;
  className?: string;
  styles?: StyleConfig;
  noResultsMessage?: string; // New: Customizable empty state
  selectContextData: BaseSelectContextTypeForList;
};

const defaultStyles = {
  container:
    "scroller font-medium mt-2 max-h-[300px] py-[6px] overflow-auto border border-bdp-stroke rounded-xl data-[is-open='false']:hidden",
  optionWrapper: `flex gap-1 py-1 2xl:py-2 px-[14px] group/checkOption hover:bg-bdp-hover-state data-[current-navigated=true]:bg-bdp-hover-state
                  group-hover/container:data-[current-navigated=true]:bg-transparent
                  group-hover/container:data-[current-navigated=true]:hover:bg-bdp-hover-state
                  data-[selected=true]:text-bdp-accent text-bdp-primary-text`,
  optionInner: "selectable-option flex grow items-center gap-3",
  icon: "shrink-0 group-data-[selected=false]/checkOption:invisible w-[12px] 2xl:w-[16px] h-auto",
  label:
    "grow capitalize text-sm 2xl:text-base group-data-[selected=true]/checkOption:font-bold",
  count: "shrink-0 group-data-[selected=true]/checkOption:font-medium",
  noResults: "w-full text-sm 2xl:text-base text-center px-2",
} as const;

const BaseSelectList = ({
  options,
  label,
  onOptionSelect,
  className,
  styles = {},
  noResultsMessage = "No matching options",
  selectContextData,
}: SelectListProps) => {
  const { isListOpen, currentNavigateCheckbox, containerRef } =
    selectContextData;
  return (
    <div
      data-is-open={isListOpen}
      ref={containerRef}
      className={cn(
        defaultStyles.container,
        // "data-[is-open='false']:hidden",
        styles.container,
        className,
      )}
    >
      {options.length < 1 && (
        <p className={cn(defaultStyles.noResults, styles.noResults)}>
          {noResultsMessage}
        </p>
      )}
      {options?.map((option) => {
        const checked = option.selected;
        const value = option.value;
        return (
          <label
            key={option.label}
            htmlFor={`checkbox-${label}-${option.label}`}
            data-checkbox={option.label}
          >
            <div
              data-selected={checked}
              data-current-navigated={option.label === currentNavigateCheckbox}
              className={cn(defaultStyles.optionWrapper, styles.optionWrapper)}
              onClick={(event) =>
                onOptionSelect({ action: "select", value, event })
              }
              role="button"
              aria-label={`${
                checked ? "uncheck" : "check"
              } filter ${label}:${option.label}`}
            >
              <div
                className={cn(defaultStyles.optionInner, styles.optionInner)}
                id={`example_facet_${label}${option.label}`}
              >
                <LightningIconSolid
                  className={cn(defaultStyles.icon, styles.icon)}
                />
                <span className={cn(defaultStyles.label, styles.label)}>
                  {option.label}
                </span>
              </div>
              {option.count ? (
                <span className={cn(defaultStyles.count, styles.count)}>
                  {numberFormat.format(option.count)}
                </span>
              ) : null}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default BaseSelectList;
