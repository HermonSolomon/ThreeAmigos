import React, { Component } from "react";
import styled from "styled-components";
import { AppConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Slide extends Component {
 render() {
  const { id, img, header, body } = this.props.slide;
  return (
   <IconWrapper>
    <div className="mocha-icons">
     <AppConsumer>
      {value => (
       <img
        onClick={() => {
         value.handleSlideDetail(id);
        }}
        src={img}
        alt=""
        className="mochas"
       />
      )}
     </AppConsumer>
    </div>
   </IconWrapper>
  );
 }
}

Slide.propTypes = {
 slide: PropTypes.shape({
  id: PropTypes.number,
  img: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string
 }).isRequired
};

const IconWrapper = styled.div`
  .mocha-icons {
    width: 5%;
    position: relative;
    top: 6rem;
    left: 93%;
    z-index: 5;
  }

  .mochas {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: 50px;
    height: 50px;
    border: solid 0.5px #000;
    border-radius: 50%;
    margin-bottom: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .mochas:hover {
    transform: scale(1.3);
  }

  @media only screen and(max-width: 600 px) {
    .mocha-icons {
      display: inline-flex;
      width: 100% !important;
      justify-content: space-between;
      border: none !important;
      position: relative !important;
      top: 46px !important;
      margin-bottom: 50px;
    }
  }
`;
