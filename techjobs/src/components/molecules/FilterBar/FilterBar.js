import React from 'react';
import './filterBar.css';
import FilterOptions from '../../atoms/FilterOptions/FilterOptions';

const FilterBar = ({filters, onClick}) => {
    return (
        <div className="filterBar--container">
        <FilterOptions 
        filters={filters}
        onClick={onClick}
        />
        </div>
    )
};

export default FilterBar;