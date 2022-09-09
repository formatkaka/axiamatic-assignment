import React, { useEffect, useMemo, useState } from 'react';

const DROPDOWN_OPTIONS = [
  {
    name: 'Notion',
    logo: './notion-2.svg',
  },
  { name: 'NopenSpeed', logo: './apple.svg' },
  { name: 'Noimics', logo: './notion-2.svg' },
  { name: 'NoyerBooks', logo: './notion-2.svg' },
  { name: 'Slack', logo: './slack-new-logo.svg' },
  { name: 'Jira', logo: './jira-3.svg' },
  { name: 'Azure', logo: './azure-1.svg' },
];

function Dropdown(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function search(evt) {
    setSearchQuery(evt.target.value);
  }

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
  }

  const options = useMemo(() => {
    return DROPDOWN_OPTIONS.filter(({ name }) => {
      return name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }, [searchQuery]);

  return (
    <div className='search'>
      <div className='search__input-container'>
        <img
          className='search__input-logo'
          src='./icons8-search.svg'
          alt='search'
        />
        <input
          className='search__input'
          placeholder='Search for any software ...'
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={search}
          type='text'
        />
      </div>
      {isFocused && (
        <div className='search__dropdown'>
          {options.map((option) => {
            return (
              <div className='dropdown-row'>
                <img
                  className='dropdown-row__img'
                  src={option.logo}
                  alt={`${option.name} Logo`}
                />
                <p>{option.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
