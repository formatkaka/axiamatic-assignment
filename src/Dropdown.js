import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DROPDOWN_OPTIONS } from './utils/consts';
import useOutclick from './utils/useOutClick';

function Dropdown(props) {
  const { products } = props;

  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef();

  useOutclick(ref, onBlur);

  function search(evt) {
    setSearchQuery(evt.target.value);
  }

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
  }

  function toggleSelection(evt) {
    props.updateProducts(evt.currentTarget.dataset.option);
  }

  const options = useMemo(() => {
    return Object.keys(DROPDOWN_OPTIONS).filter((key) => {
      const searchMatches =
        DROPDOWN_OPTIONS[key].name
          .toLowerCase()
          .indexOf(searchQuery.toLowerCase()) > -1;

      return searchMatches;
    });
  }, [searchQuery]);

  return (
    <div ref={ref} className='search'>
      <div className='search__input-container'>
        <img
          className='search__input-logo'
          src='./icons8-search.svg'
          alt='search'
        />
        <input
          className='search__input'
          placeholder='Search for any software ...'
          onChange={search}
          onFocus={onFocus}
          type='text'
        />
      </div>
      {isFocused && (
        <>
          <div onClick={onBlur} className='Invisible'></div>
          <div className='search__dropdown'>
            {options.map((optionId) => {
              const isSelected = products.indexOf(optionId) > -1;
              return (
                <div
                  className={`dropdown-row ${
                    isSelected ? 'dropdown-row--selected' : ''
                  }`}
                  data-option={optionId}
                  onClick={toggleSelection}
                  key={optionId}
                >
                  <img
                    className='dropdown-row__img'
                    src={DROPDOWN_OPTIONS[optionId].logo}
                    alt={`${DROPDOWN_OPTIONS[optionId].name} Logo`}
                  />
                  <p>{DROPDOWN_OPTIONS[optionId].name}</p>
                  {isSelected && (
                    <img
                      className='dropdown-row__tick'
                      src='./tick.svg'
                      alt='tick'
                    />
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Dropdown;
