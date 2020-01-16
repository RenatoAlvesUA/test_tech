import React from "react";
import { createStructuredSelector } from "reselect";
import { setKeyword } from "../redux/article/article-actions";
import { selectKeyword } from "../redux/article/article-selectors";
import { connect } from "react-redux";

const Search = ({ keyword, setKeyword }) => {
  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <div className="input-group">
      <input
        className="input--style-6"
        onChange={handleChange}
        type="text"
        placeholder="Keyword"
        value={keyword}
        name="name"
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  keyword: selectKeyword
});

const mapDispatchToProps = dispatch => ({
  setKeyword: keyword => dispatch(setKeyword(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
