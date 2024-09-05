"use client";

import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { CarouselConfig, DefaultCarouselConfig } from "./defaults";
import { throttledDebounce } from "../../utils";
import {
  CarouselButtonProps,
  CarouselContainer,
  CarouselContainerProps,
  CarouselControlProps,
  CarouselControls,
  CarouselItem,
  CarouselItemProps,
  CarouselNextButton,
  CarouselPreviousButton,
} from "./CarouselComponents";

export interface CarouselContextType {
  containerRef: React.RefObject<HTMLDivElement>;
  totalCarouselItems: number;
  goToNextSlide: () => void;
  goToPreviousSlide: () => void;
  possibleDirection: {
    canGoToNextSlide: boolean;
    canGoToPreviousSlide: boolean;
  };
}

const CarouselContext = React.createContext<CarouselContextType | null>(null);

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};

export interface CarouselProviderProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  config?: CarouselConfig;
}

const CarouselProvider: React.FC<CarouselProviderProps> = ({
  children,
  containerRef,
  config = DefaultCarouselConfig,
}) => {
  const { stepWidthInPercent } = config;

  const [carouselWidth, setCarouselWidth] = React.useState(0);
  const [scrollableWidth, setScrollableWidth] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const possibleDirection = useMemo(() => {
    if (!containerRef.current)
      return { canGoToNextSlide: false, canGoToPreviousSlide: false };
    const canGoToNextSlide = scrollLeft < scrollableWidth - carouselWidth;
    const canGoToPreviousSlide = scrollLeft > 0;
    return { canGoToNextSlide, canGoToPreviousSlide };
  }, [containerRef, scrollableWidth, carouselWidth, scrollLeft]);

  const handleScroll = throttledDebounce(() => {
    if (!containerRef.current) return;
    setScrollLeft(containerRef.current?.scrollLeft ?? 0);
  }, 200);

  // init update containerRef details on mount and resize
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateSize = throttledDebounce(() => {
      setCarouselWidth(containerRef.current?.clientWidth ?? 0);
      setScrollableWidth(containerRef.current?.scrollWidth ?? 0);
      setScrollLeft(containerRef.current?.scrollLeft ?? 0);
    }, 200);

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    // Initial size update
    updateSize();

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  // update scroll position on scroll
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    containerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const totalCarouselItems = useMemo(() => {
    return containerRef.current?.children.length ?? 0;
  }, [containerRef]);

  const goToNextSlide = useCallback(() => {
    if (!containerRef.current) return;
    const stepWidth =
      (containerRef.current.clientWidth * stepWidthInPercent) / 100;
    const responsiveStepWidth =
      stepWidth < containerRef.current.children[0].clientWidth
        ? containerRef.current.clientWidth
        : stepWidth;
    const scrollLeft = containerRef.current.scrollLeft + responsiveStepWidth;
    containerRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [containerRef, stepWidthInPercent]);

  const goToPreviousSlide = useCallback(() => {
    if (!containerRef.current) return;
    const stepWidth =
      (containerRef.current.clientWidth * stepWidthInPercent) / 100;
    // const responsiveStepWidth = Math.max(containerRef.current.clientWidth, containerRef.current.clientWidth * stepWidthInPercent / 100) ;
    const responsiveStepWidth =
      stepWidth < containerRef.current.children[0].clientWidth
        ? containerRef.current.clientWidth
        : stepWidth;
    const scrollLeft = Math.max(
      0,
      containerRef.current.scrollLeft - responsiveStepWidth,
    );
    containerRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [containerRef, stepWidthInPercent]);

  return (
    <CarouselContext.Provider
      value={{
        containerRef,
        totalCarouselItems,
        goToNextSlide,
        goToPreviousSlide,
        possibleDirection,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export const Carousel: React.FC<Omit<CarouselProviderProps, "containerRef">> & {
  Container: React.FC<CarouselContainerProps>;
  Item: React.FC<CarouselItemProps>;
  Controls: React.FC<CarouselControlProps>;
  PreviousButton: React.FC<CarouselButtonProps>;
  NextButton: React.FC<CarouselButtonProps>;
} = ({ children, config }: Omit<CarouselProviderProps, "containerRef">) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <CarouselProvider containerRef={containerRef} config={config}>
      {children}
    </CarouselProvider>
  );
};

Carousel.Container = CarouselContainer;
Carousel.Item = CarouselItem;
Carousel.Controls = CarouselControls;
Carousel.PreviousButton = CarouselPreviousButton;
Carousel.NextButton = CarouselNextButton;
