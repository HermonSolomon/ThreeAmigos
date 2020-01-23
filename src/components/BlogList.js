import React, { Component } from "react";
import Title from "./Title";
import Blog from "./Blog";
import { AppConsumer } from "../Context";
// import { blogArticle } from "../data";

export default class BlogList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-0 product-list">
          <div className="container">
            {/* <Title name="Our" title="Products" /> */}
            <h1 className="text-center" title="Blog-articles">
              THREE AMIGOS BLOG
            </h1>
            <div className="row">
              <AppConsumer>
                {value => {
                  return value.blogArticle.map(article => {
                    return <Blog key={article.id} article={article} />;
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
