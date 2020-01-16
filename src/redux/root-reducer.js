import { combineReducers } from "redux";

import articleReducer from "./article/article-reducer";

const rootReducer = combineReducers({
  articles: articleReducer
});

export default rootReducer;
