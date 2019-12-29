import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Blog extends Component {
  render() {
    const { id, title, img, header } = this.props.Blog;
    return (
      <BlogArticleWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <AppConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleBlogDetail(id)}
              >
                <Link to="/BlogDetails">
                  <img src={img} alt="article" className="card-img-top" />
                </Link>{" "}
              </div>
            )}
          </AppConsumer>
          {/* card footer */}{" "}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0"> {title} </p>{" "}
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1"> lorem </span> {header}{" "}
            </h5>{" "}
          </div>{" "}
        </div>{" "}
      </BlogArticleWrapper>
    );
  }
}

Blog.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    header: PropTypes.string
  }).isRequired
};

const BlogArticleWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    margin-bottom: 5rem;
    cursor: pointer;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.4rem solid rgba (0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba (247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
`;
