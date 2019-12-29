import React, { Component } from "react";

export default class ContentArea extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hermon"
    };
  }

  render() {
    return (
      <section id={"content-area"}>
        <div className={"col-md-6 model"}>
          <img src={"/img/decks.jpg"} alt="carosule" />
        </div>
        <div className="mocha-icons">
          <img src={"/img/mocha1.png"} alt="" className="mochas" />
          <img src={"/img/mocha2.jpg"} alt="" className="mochas" />
          <img src={"/img/mocha3.jpg"} alt="" className="mochas" />
          <img src={"/img/mocha4.jpg"} alt="" className="mochas" />
        </div>
        <div className={"col-md-6 info"}>
          <div className={"insider"}>
            {/* <h5>Decks</h5> */}
            <h1>Hot Since 82</h1>
            <p>
              Gastropub skateboard trust fund umami stumptown four loko.
              Coloring book vegan you probably haven't heard of tshem raw denim.
              Gentrify salvia plaid XOXO,quinoa neutra lumbersexual whatever DIY
              try-hard vice health goth vape leggings celiac. Ugh street art
              chillwave gastropub fam letterpress. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Aperiam quod architecto illo facere
              ipsum iusto sit accusamus harum maxime? Inventore non blanditiis
              facilis earum magnam!
            </p>
            <div className={"size"}>
              <div className={"title"}>size</div>
              <ul className={"sizes"}>
                <li className={"circle"}>S</li>
                <li className={"circle"}>M</li>
                <li className={"circle"}>L</li>
                <li className={"semi-circle"}>XL</li>
                <li className={"semi-circle"}>XXL</li>
                <li className={"semi-circle"}>Custom</li>
              </ul>
            </div>
            <div className={"action-btns"}>
              <button className={"col-md-6 red-hollow-btn"}>
                <span className={"price"}>£132</span>
                Add to cart
              </button>
              <button className={"col-md-6 lightgrey-btn"}>
                Find A Store.
              </button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card1-3"></div>
          <div className="card1-3"></div>
          <div className="card1-3"></div>
        </div>
      </section>
    );
  }
}
