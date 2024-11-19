import { useEffect, useRef, useState } from "react";
import { isInViewport } from "../../utils/navigation";

type ChekboxNavigateProps = {
  checkboxContainer: React.MutableRefObject<HTMLDivElement> | null;
  searchEl: React.MutableRefObject<HTMLInputElement> | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
};

const useCheckboxNavigate = ({
  checkboxContainer,
  searchEl,
  options,
}: ChekboxNavigateProps) => {
  const checkboxNavIndex = useRef<number>(null);

  const [currentNavigateCheckbox, setcurrentNavigateCheckbox] = useState("");

  const refocus = useRef(false);

  const toggleRefocus = () => {
    refocus.current = !refocus.current;
  };

  useEffect(() => {
    if (!checkboxContainer || !searchEl) return;
    const multiCheckboxWrapper = checkboxContainer.current;
    const multiCheckboxList =
      multiCheckboxWrapper &&
      (Array.from(multiCheckboxWrapper?.children) as HTMLElement[]);
    const searchInput = searchEl.current;
    // focus back to search when options changes
    if (refocus.current) {
      if (searchInput) {
        searchInput.focus();
      }
      toggleRefocus();
    }

    let currentCheckboxNavIndex = checkboxNavIndex.current;

    const handleOptionNavigation = (e: KeyboardEvent) => {
      if (currentNavigateCheckbox && currentCheckboxNavIndex === null) {
        const isPrevCheckInListIdx = multiCheckboxList.findIndex(
          (label) => label?.dataset?.checkbox === currentNavigateCheckbox,
        );
        if (isPrevCheckInListIdx !== -1) {
          currentCheckboxNavIndex = isPrevCheckInListIdx;
        }
      }

      switch (e.key) {
        // downArrow
        case "ArrowDown":
          e.preventDefault();
          if (currentCheckboxNavIndex === null) {
            currentCheckboxNavIndex = 0;
          } else {
            if (currentCheckboxNavIndex >= multiCheckboxList.length - 1) {
              currentCheckboxNavIndex = 0;
            } else {
              currentCheckboxNavIndex += 1;
            }
          }
          break;

        // upArrow
        case "ArrowUp":
          e.preventDefault();
          if (currentCheckboxNavIndex === null) {
            currentCheckboxNavIndex = multiCheckboxList.length - 1;
          } else {
            if (currentCheckboxNavIndex === 0) {
              currentCheckboxNavIndex = multiCheckboxList.length - 1;
            } else {
              currentCheckboxNavIndex -= 1;
            }
          }
          break;

        // Enter
        case "Enter": {
          e.preventDefault();
          if (currentCheckboxNavIndex) {
            const input =
              multiCheckboxList[currentCheckboxNavIndex]?.querySelector(
                '[role="button"]',
              );
            if (input) {
              (input as HTMLButtonElement).click();
            }
          }
          break;
        }

        default:
          break;
      }

      const currentLabel =
        typeof currentCheckboxNavIndex === "number"
          ? multiCheckboxList[currentCheckboxNavIndex]
          : null;

      if (currentLabel) {
        const inViewPort = isInViewport(currentLabel);
        if (!inViewPort) {
          currentLabel.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }
      }
      setcurrentNavigateCheckbox(currentLabel?.dataset?.checkbox ?? "");
    };

    if (searchInput) {
      searchInput.addEventListener("keydown", handleOptionNavigation);
      searchInput.addEventListener("focusout", () =>
        setcurrentNavigateCheckbox(""),
      );
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener("keydown", handleOptionNavigation);
        searchInput.removeEventListener("focusout", () =>
          setcurrentNavigateCheckbox(""),
        );
      }
    };
  }, [options, checkboxContainer, searchEl, currentNavigateCheckbox]);

  return { currentNavigateCheckbox, toggleRefocus };
};

export default useCheckboxNavigate;
