import React from "react";
import "./filterOptions.css";


const FilterOptions = ({onClick, filters}) => {
  return (
    <div className="filterOptions--container">
      {filters.map((item) => {
        return (
          <div className="filterOptions--filter" onClick={onClick}>
            <h3 id={item}>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
