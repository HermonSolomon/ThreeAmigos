import React, { Component } from "react";
import { AppConsumer } from "../Context";
import MochaIcons from "./MochaIcons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import styled from "styled-components"

export default class ContentArea extends Component {
 constructor(props) {
  super(props);
  this.state = {
   sizeMenuExpanded: false
  };
 }

 handleSizeMenu = e => {
  e.preventDefault(e);
  this.setState({
   sizeMenuExpanded: !this.state.sizeMenuExpanded
  });
 };

 closeSizeMenu = () => {
  this.setState({ sizeMenuExpanded: false });
 };

 render() {
  const { sizeMenuExpanded } = this.state;

  return (
   <AppConsumer>
    {value => {
     const {
      id,
      header,
      img,
      body
     } = value.slideDetail;

     // console.log(value.slideDetail);
     // return value.carouselData.map(slide => {
     //  return <Slide key={slide.id} slide={slide} />;
     // });

     return (
      <div>
      <MochaIcons/>
      <section id={id} className={'content-area'}>
       <div
        className={"col-md-6 model"}

        style={{
         transform: `translateY(${this.state.translateValue}px)`,
         transition: "transform ease-out 0.45s"
        }}
       >
        <TransitionGroup>
         <CSSTransition key={id} timeout={300} classNames="fade">
          <img src={img} alt="carosule" />
         </CSSTransition>
        </TransitionGroup>
       </div>

       <div className={"col-md-6 info"}>
        <div className={"insider"}>
         {/* <h5>Decks</h5> */}
         <div
          className="sliderInfo"
          style={{
           transform: `translateY(${this.state.translateValue}px)`,
           transition: "transform ease-out 0.45s"
          }}
         >
          <h1>{header}</h1>
          <p>
          {body}
                </p>
         </div>
         <div className={"size"}>
          <div className={"title"} onClick={e => this.handleSizeMenu(e)}>
           Sizes{" "}
           <span>
            <i className="fas fa-angle-right"> </i>
           </span>
          </div>
          {/* size selection animation */}
          <div
           className={`sizes list-inline ${
            sizeMenuExpanded ? "sizes-initial" : ""
            }`}
          >
           <ul>
            <li className={"circle"}>S</li>
            <li className={"circle"}>M</li>
            <li className={"circle"}>L</li>
            <li className={"semi-circle"}>XL</li>
            <li className={"semi-circle"}>XXL</li>
            <li className={"semi-circle"}>Custom</li>
           </ul>
          </div>
         </div>
         <div className={"action-btns"}>
          <button
           className={
            "col-md-6 btn btn-outline-danger text-uppercase mb-3 px-5 red-hollow-btn"
           }
          >
           <span className={"price"}>£132</span>
           <span style={{ minWidth: "70%" }}>Add to cart</span>
          </button>
          <button className={"col-md-6 lightgrey-btn"}>
           Find A Store.
                </button>
         </div>
        </div>
       </div>
      </section>
      </div>

     );

    }}
   </AppConsumer>
  );
 }
}
