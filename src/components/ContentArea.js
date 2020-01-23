import React, { Component } from "react";
import { AppConsumer } from "../Context";
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
          const { img } = value.detailProduct;
          return (
            <section id={"content-area"}>
              <div className="mocha-icons">
                <img id="1" src={"/img/mocha1.png"} alt="" className="mochas" />
                <img id="2" src={"/img/mocha2.jpg"} alt="" className="mochas" />
                <img id="3" src={"/img/mocha3.jpg"} alt="" className="mochas" />
                <img id="4" src={"/img/mocha4.jpg"} alt="" className="mochas" />
              </div>
              <div
                className={"col-md-6 model"}
                style={{
                  transform: `translateY(${this.state.translateValue}px)`,
                  transition: "transform ease-out 0.45s"
                }}
              >
                <img src={"/img/decks.jpg"} alt="carosule" />
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
                    <h1>Hot Since 82</h1>
                    <p>
                      Gastropub skateboard trust fund umami stumptown four loko.
                      Coloring book vegan you probably haven't heard of tshem
                      raw denim. Gentrify salvia plaid XOXO,quinoa neutra
                      lumbersexual whatever DIY try-hard vice health goth vape
                      leggings celiac. Ugh street art chillwave gastropub fam
                      letterpress. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Aperiam quod architecto illo facere
                      ipsum iusto sit accusamus harum maxime? Inventore non
                      blanditiis facilis earum magnam!
                    </p>
                  </div>
                  <div className={"size"}>
                    <div
                      className={"title"}
                      onClick={e => this.handleSizeMenu(e)}
                    >
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
          );
        }}
      </AppConsumer>
    );
  }
}
