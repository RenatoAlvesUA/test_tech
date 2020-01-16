import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";
import { selectArticleItem } from "../redux/article/article-selectors";

const SingleArticle = ({
  article,
  article: {
    urlToImage,
    publishedAt,
    author,
    title,
    description,
    content,
    source,
    url
  }
}) =>
  article && (
    <div className="container">
      <div className="w-100">
        <div className="card single">
          <div className="section group">
            <div className="col span_50">
              <img src={urlToImage} alt="article" />
            </div>
            <div className="col span_25 single">
              <p>
                <span>{moment(publishedAt).format("MMM Do YY")}</span>
              </p>
              <p>
                <span>{source.name}</span>
              </p>
              <p>
                <span>{author}</span>
              </p>
            </div>
          </div>
          <div className="section group">
            <h2>{title}</h2>
          </div>
          <div className="section group">
            <p>{description}</p>
          </div>
          <div className="section group">
            <p>{content}</p>
          </div>
          <div className="section group">
            <p>
              <a href={url}>Click here to see full new.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

const mapStateToProps = createStructuredSelector({
  article: selectArticleItem
});

export default connect(mapStateToProps)(SingleArticle);
