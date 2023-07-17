import React from 'react';
import css from 'components/Filter/Filter.module.css';
// import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

function Filter() {
  const dispatch = useDispatch();

  const filterNameRef = useRef();

  const handleInputValue = () => {
    const filterValue = filterNameRef.current.value;

    dispatch(filterContacts(filterValue));
  };

  return (
    <div className={css.FilterContainer}>
      <p className={css.FindContactsText}>Find contacts by name</p>
      <input
        className={css.InputFilter}
        type="text"
        placeholder="filter"
        onChange={handleInputValue}
        ref={filterNameRef}
      />
    </div>
  );
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired
// }
export default Filter;
