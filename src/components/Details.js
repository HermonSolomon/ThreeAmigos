import React, { Component } from "react";
import { AppConsumer } from "../Context";
import { ButtonContainer } from "./DefaultButton";
import { Link } from "react-router-dom";
export default class Details extends Component {
 render() {
  return (
   <AppConsumer>
    {value => {
     const {
      id,
      company,
      img,
      info,
      price,
      title,
      inCart
     } = value.detailProduct;

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
         <h2>model: {title}</h2>
         <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
          made by: <span className="text-uppercase">{company}</span>
         </h4>
         <h4 className="text-blue">
          <strong>
           Price: <span>£</span>
           {price}
          </strong>
         </h4>
         <p className="text-capitalize font-weight-bold mt-3 mb-0">
          Product information:
                  </p>
         <p className="text-muted lead">{info}</p>
         {/* Butons */}
         <div>
          <Link to="/productlist">
           <ButtonContainer>Back to products</ButtonContainer>
           <ButtonContainer
            disabled={inCart ? true : false}
            onClick={() => {
             value.addToCart(id);
             value.openModal(id);
            }}
           >
            {inCart ? "inCart" : "add to cart"}
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
