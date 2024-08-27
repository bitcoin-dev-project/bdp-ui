export type CarouselConfig = {
  stepWidthInPercent: number;
  // TODO: Add support for scrollSteps
  // scrollSteps?: number;
};

export const DefaultCarouselConfig: CarouselConfig = {
  stepWidthInPercent: 100,
};
