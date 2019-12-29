import React, { Component } from "react";
import Title from "./Title";
import Blog from "./Blog";
import { AppConsumer } from "../Context";

export default class BlogList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-0 product-list">
          <div className="container">
            <Title name="Our" title="Products" />
            <div className="row">
              <AppConsumer>
                {value => {
                  console.log(value);
                  return value.blogArticle.map(blog => {
                    return (
                      <Blog key={blog.id} blog={blog} />
                    );
                  });
                }}{" "}
              </AppConsumer>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}

// import React from "react";
// import styled from "styled-components";

// const BlogList = () => {
// return (
//   <div className=" container py-5">
//     <div className="blog-hero">
//       <img src="/img/blog-hero.jpg" alt="hero" />
//     </div>
//     <br />
//     <hr />
//     <section className="crimbo-info">
//       <h3> Crimbo Info! </h3>{" "}
//       <p>
//         {" "}
//         Espress - ho ho ho!Please note 49 Old Street will be closed over the
//         holiday season from Monday 23 rd December 2019 to Wednesday 1 st
//         January 2020. We will reopen on Thursday 2n d January 2020!.Ayesha
//         McGowan aka A Quick Brown Fox is encouraging all of you to get cycling
//         no matter where you are, who you are, what you ride, or how you
//         ride.Sign up the virtual ride series to exchange your rides for
//         prizes!It 's the 2020 edition of the Do Better Together campaign.{" "}
//       </p>{" "}
//     </section>
//     <ProductWrapper2>
//       <div className="row">
//         <div className="col-sm-6">
//           <div className="card ">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img1.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Quam, velit?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img3.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>{" "}
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quam,
//                 velit ?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>{" "}
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img4.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Quam, velit?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img2.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>{" "}
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quam,
//                 velit ?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>{" "}
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img6.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>{" "}
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quam,
//                 velit ?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>{" "}
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img7.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>{" "}
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quam,
//                 velit ?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>{" "}
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img8.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>{" "}
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quam,
//                 velit ?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>{" "}
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="img-container">
//               <img
//                 src="/img/blog-img9.jpg "
//                 alt="product"
//                 className="card-img-top"
//               />{" "}
//             </div>{" "}
//             <div className="card-footer d-flex justify-content-between">
//               <p className="align-self-center mb-0">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quam,
//                 velit ?{" "}
//               </p>{" "}
//               <h5 className="text-blue font-italic mb-0">
//                 <span className="mr-1"> lorem </span>{" "}
//               </h5>{" "}
//             </div>{" "}
//           </div>
//         </div>
//       </div>
//     </ProductWrapper2>
//   </div>

// const ProductWrapper2 = styled.div `
//   .card {
//     border-color: transparent;
//     transition: all 1s linear;
//     margin-bottom: 5rem;
//     cursor: pointer;
//   }
//   .card-footer {
//     background: transparent;
//     border-top: transparent;
//     transition: all 1s linear;
//   }
//   &:hover {
//     .card {
//       border: 0.4rem solid rgba (0, 0, 0, 0.2);
//       box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//     }
//     .card-footer {
//       background: rgba (247, 247, 247);
//     }
//   }
//   .img-container {
//     position: relative;
//     overflow: hidden;
//   }

//   .card-img-top {
//     transition: all 1s linear;
//   }
//   .img-container:hover .card-img-top {
//     transform: scale(1.1);
//   }
// `;
