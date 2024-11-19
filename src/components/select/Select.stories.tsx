import React, { useState } from "react";
import { Meta } from "@storybook/react";

import { SingleSelect } from "./Dropdown";
import { OptionSelectHandler } from "./SingleSelectList";
import { MultiSelect } from "./MultiSelect";

export default {
  title: "Components/MultiSelect",
  argTypes: {
    colorMode: {
      control: { type: "radio" },
      options: ["light", "dark"],
      defaultValue: "light",
    },
  },
} as Meta;

const testOptions = [
  {
    label: "Option 1",
    count: 10,
    value: "option-1",
    selected: false,
  },
  {
    label: "Option 2",
    count: 20,
    value: "option-2",
    selected: false,
  },
  {
    label: "Option 3",
    count: 30,
    value: "option-3",
    selected: false,
  },
  {
    label: "Option 4",
    count: 40,
    value: "option-4",
    selected: false,
  },
];

export const UnModifiedSelect = (args: { colorMode: "light" | "dark" }) => {
  const { colorMode } = args;
  const isDark = colorMode === "dark";

  const [options, setOptions] = useState(testOptions);

  const [singleSelectValue, setSingleSelectValue] = useState<string>(
    options[0].value,
  );

  const markAsSelected = (
    _action: "select" | "deselect",
    value: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _event: React.MouseEvent,
  ) => {
    const duplicatedOptions = [...options];
    const optionIndex = duplicatedOptions.findIndex(
      (option) => option.value === value,
    );
    if (optionIndex !== -1) {
      duplicatedOptions[optionIndex].selected =
        !duplicatedOptions[optionIndex].selected;
    }
    setOptions(duplicatedOptions);
  };

  const handleSingleSelect: OptionSelectHandler = (option) => {
    setSingleSelectValue(option.value);
  };

  return (
    <div
      className={`${isDark ? "dark" : ""} bg-bdp-background w-full h-[90vh] flex pt-[20vh] gap-[10%] justify-center`}
    >
      <div className="w-[400px]">
        <MultiSelect isCollapsible={true}>
          <MultiSelect.Input defaultPlaceholder="Select options" />
          <MultiSelect.List
            options={options}
            label="Select options"
            onOptionSelect={({ action, value, event }) => {
              markAsSelected(action, value, event);
            }}
          />
        </MultiSelect>
      </div>
      <div className="w-[400px]">
        <SingleSelect>
          <SingleSelect.Trigger defaultPlaceholder="Select options" />
          <SingleSelect.List
            value={singleSelectValue}
            options={options}
            label="Select options"
            onOptionSelect={handleSingleSelect}
          />
        </SingleSelect>
        <div>something here</div>
      </div>
    </div>
  );
};
