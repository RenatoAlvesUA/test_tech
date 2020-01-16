import { ArticleActionTypes } from "./article-types";

export const setKeyword = item => ({
  type: ArticleActionTypes.ADD_KEYWORD,
  payload: item
});

export const setArticles = item => ({
  type: ArticleActionTypes.ADD_ARTICLES,
  payload: item
});

export const setSingleArticle = item => ({
  type: ArticleActionTypes.ADD_SINGLE_ARTICLE,
  payload: item
});
