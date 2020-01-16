import React, { Fragment } from "react";

import ListArticles from "./components/ListArticles";
import SingleArticle from "./components/SingleArticle";
import Search from "./components/Search";

const App = () => {
  return (
    <Fragment>
      <div className="section group ">
        <div className="col span_100">
          <div className="container">
            <Search />
          </div>
        </div>
      </div>
      <div className="section group">
        <div className="col span_50 b-r">
          <ListArticles />
        </div>
        <div className="col span_50">
          <SingleArticle />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
