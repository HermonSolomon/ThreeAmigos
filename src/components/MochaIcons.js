import React from "react";
import { AppConsumer } from "../Context";
import Slide from "./Slide";

export default function MochaIcons() {
  return (
    <AppConsumer>
      {(value) => {
        // const { id, header, img, body } = value.slideDetail;

        return value.carouselData.map((slide) => {
          return <Slide key={slide.id} slide={slide} />;
        });
      }}
    </AppConsumer>
  );
}
