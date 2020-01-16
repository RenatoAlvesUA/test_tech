import { createSelector } from "reselect";

const selectArticles = state => state.articles;

export const selectArticleItems = createSelector(
  [selectArticles],
  article => article.articleItems
);

export const selectArticleItem = createSelector(
  [selectArticles],
  article => article.articleItem
);

export const selectKeyword = createSelector(
  [selectArticles],
  article => article.keyword
);
