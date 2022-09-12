import React from 'react';
import { DROPDOWN_OPTIONS } from './utils/consts';

export function DropdownOption(products, optionId, toggleSelection) {
  const isSelected = products.indexOf(optionId) > -1;
  return (
    <div
      className={`dropdown-row ${isSelected ? 'dropdown-row--selected' : ''}`}
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
        <img className='dropdown-row__tick' src='./tick.svg' alt='tick' />
      )}
    </div>
  );
}
