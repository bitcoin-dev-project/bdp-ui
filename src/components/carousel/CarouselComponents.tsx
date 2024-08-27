import React from 'react'
import { CarouselContextType, useCarousel } from './Carousel';
import { ComponentStylePrimitiveProps } from '../../primitives/types';

export interface CarouselContainerProps extends ComponentStylePrimitiveProps<HTMLDivElement> {
  children: React.ReactNode
}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({ children, ...props }) => {
  const { className, ...rest } = props
  const { containerRef } = useCarousel();
  return (
    <div ref={containerRef} className={`max-w-full h-full flex overflow-scroll gap-2  no-scrollbar ${className}`} {...rest}>
      {children}
    </div>
  )
}

export interface CarouselItemProps extends CarouselContainerProps { }

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, ...props }) => {
  const { className, ...rest } = props
  return (
    <div className={`flex-shrink-0 relative ${className}`} {...rest}>
      {children}
    </div>
  )
}

export interface CarouselControlProps extends ComponentStylePrimitiveProps<HTMLDivElement> {
  children: React.ReactNode
}

export const CarouselControls: React.FC<CarouselControlProps> = ({ children, className, ...props }) => {
  return (
    <div className={`flex items-center gap-2 md:gap-4 w-fit mx-auto pt-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
export interface CarouselButtonProps extends Omit<ComponentStylePrimitiveProps<HTMLButtonElement>, 'children'> {
  children?: React.ReactNode | ((goToPreviousSlide: () => void, possibleDirection: CarouselContextType['possibleDirection']) => React.ReactNode);
  icon: React.ReactNode;
}

export const CarouselPreviousButton: React.FC<CarouselButtonProps> = ({ children, ...props }) => {
  const { goToPreviousSlide, possibleDirection } = useCarousel();

  if (children) {
    if (typeof children === 'function') {
      return <>{children(goToPreviousSlide, possibleDirection)}</>;
    } else {
      console.warn('CarouselPreviousButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is.');
      return <>{children}</>;
    }
  }

  const { icon, className, ...rest } = props

  return (
    <button onClick={goToPreviousSlide} disabled={!possibleDirection.canGoToPreviousSlide} className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-600  dark:border-gray-300 p-2 text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent ${className}`} {...rest}>
      {icon}
    </button>
  );
};

export const CarouselNextButton: React.FC<CarouselButtonProps> = ({ children, ...props }) => {
  const { goToNextSlide, possibleDirection } = useCarousel();

  if (children) {
    if (typeof children === 'function') {
      return <>{children(goToNextSlide, possibleDirection)}</>;
    } else {
      console.warn('CarouselNextButton: Children prop is not a function (opts out of navigation logic). Rendering children as-is.');
      return <>{children}</>;
    }
  }

  const { icon, className, ...rest } = props

  return (
    <button onClick={goToNextSlide} disabled={!possibleDirection.canGoToNextSlide} className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-600  dark:border-gray-300 p-2 text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent ${className}`} {...rest}>
      {icon}
    </button>
  );
};

