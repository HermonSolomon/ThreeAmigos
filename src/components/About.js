import React, { Component } from "react";
import { FullPage, Slide } from "react-full-page";

export default class About extends Component {
  render() {
    return (
      <FullPage>
        <Slide style={{ bacgroundColor: "#000" }}>
          <h1>Inner slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
        <Slide>
          <h1> Another slide content </h1>{" "}
        </Slide>
      </FullPage>
    );
  }
}
