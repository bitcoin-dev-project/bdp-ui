import React from "react";
import { Meta } from "@storybook/react";

import { Carousel } from "../carousel";
import { ArrowLeft, ArrowRight } from "../../icons";

export default {
  title: "Components/Carousel",
  argTypes: {
    colorMode: { control: { type: "radio" }, options: ["light", "dark"], defaultValue: "light" }
  }
} as Meta;

const PlaceholderCarouselItem = () => {
  return (
    <div className={`w-[300px] rounded-md p-2 border border-gray-200 shadow-sm`}>
     <h2 className="text-2xl font-bold mb-4 text-gray-600">
      Lorem ipsum dolor sit amet
     </h2>
     <p className="text-sm text-gray-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptatibus illum quae officia hic, provident aliquam? Quos nemo asperiores, consequuntur molestiae culpa rem ea corporis ratione voluptatibus pariatur tenetur perspiciatis.
     </p>
    </div>
  )
}

export const CarouselSample = (args: any) => {
  const { colorMode } = args;
  const isDark = colorMode === "dark";

  return (
    <div className={isDark ? "dark" : ""}>
      <Carousel config={{stepWidthInPercent: 40}}>
        <Carousel.Container>
          <Carousel.Item>
            <PlaceholderCarouselItem />
          </Carousel.Item>
          <Carousel.Item>
            <PlaceholderCarouselItem />
          </Carousel.Item>
          <Carousel.Item>
            <PlaceholderCarouselItem />
          </Carousel.Item>
          <Carousel.Item>
            <PlaceholderCarouselItem />
          </Carousel.Item>
          <Carousel.Item>
            <PlaceholderCarouselItem />
          </Carousel.Item>
        </Carousel.Container>
        <Carousel.Controls>
          <Carousel.PreviousButton icon={<ArrowLeft />} />
          <Carousel.NextButton icon={<ArrowRight />} />
        </Carousel.Controls>
      </Carousel>
    </div>
  );
};
