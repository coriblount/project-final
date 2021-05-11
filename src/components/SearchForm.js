import React from "react";

const SearchForm = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search by Month"}
        onChange={(e) => {
          props.searchFinances(e)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default SearchForm;