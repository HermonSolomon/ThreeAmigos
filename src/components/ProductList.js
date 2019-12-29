import React, { Component } from "react";
import Title from "./Title";
import Product from "./Product";
import { AppConsumer } from "../Context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-0 product-list">
          <div className="container">
            <Title name="Our" title="Products" />
            <div className="row">
              <AppConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </AppConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
