import { ArticleActionTypes } from "./article-types";
import { addItemRead } from "./articleHelpers";

const INITIAL_STATE = {
  articleItems: [],
  articleItem: "",
  keyword: ""
};

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArticleActionTypes.ADD_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      };
    case ArticleActionTypes.ADD_ARTICLES:
      return {
        ...state,
        articleItems: action.payload.map(item => ({ ...item, read: false }))
      };
    case ArticleActionTypes.ADD_SINGLE_ARTICLE:
      return {
        ...state,
        articleItems: addItemRead(state.articleItems, action.payload),
        articleItem: action.payload
      };
    default:
      return state;
  }
};

export default articleReducer;
