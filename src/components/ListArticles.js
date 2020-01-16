/* eslint-disable react-hooks/exhaustive-deps */
//
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getArticles } from "../services/api";
import {
  selectArticleItems,
  selectKeyword
} from "../redux/article/article-selectors";
import {
  setArticles,
  setSingleArticle
} from "../redux/article/article-actions";
import Card from "../components/Card";

const ListArticles = ({ setArticles, setSingleArticle, articles, keyword }) => {
  useEffect(() => {
    loadArticles();
  }, [keyword]);

  const loadArticles = () => {
    getArticles(keyword).then(data => {
      setArticles(data.data.articles);
    });
  };

  const handleClick = article => {
    setSingleArticle(article);
  };

  const showArticles = items =>
    items.map((article, i) => (
      <div key={i} onClick={() => handleClick(article)}>
        <Card article={article} />
      </div>
    ));

  return (
    <div className="container">
      <div className="w-100">{showArticles(articles)}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  articles: selectArticleItems,
  keyword: selectKeyword
});

const mapDispatchToProps = dispatch => ({
  setArticles: keyword => dispatch(setArticles(keyword)),
  setSingleArticle: article => dispatch(setSingleArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);
