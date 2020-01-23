import React, { Component } from "react";
import { AppConsumer } from "../Context";
import { ButtonContainer } from "./DefaultButton";
import { Link } from "react-router-dom";
export default class BlogDetail extends Component {
  render() {
    return (
      <AppConsumer>
        {value => {
          const { id, img, header, title } = value.blogDetails;
          console.log(value.blogDetails);
          return (
            <div className="container">
              {/* title */}
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
              {/* End of title  */}
              {/* Product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* product txt */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  </p>
                  <p className="text-muted lead"> {header} </p>
                  {/* Butons */}
                  <div>
                    <Link to="/bloglist">
                      <ButtonContainer>Back to Blog</ButtonContainer>
                      <ButtonContainer
                        // disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {/* {inCart ? "inCart" : "add to cart"} */}
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End of Product info */}
            </div>
          );
        }}
      </AppConsumer>
    );
  }
}
