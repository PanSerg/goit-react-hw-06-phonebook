import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from "redux/filterSlice";
import PropTypes from 'prop-types';
import { FilterStyle } from "./filter.Styled";

export const Filter = () => {
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContacts(e.target.value));
  }
    return (
      <FilterStyle>
        <label>
          Find contacts by name{' '}
          <input type="text" value={filter} onChange={onFilter} />
        </label>
      </FilterStyle>
    ); 
};

Filter.propTypes = {
  filter: PropTypes.string,

};
