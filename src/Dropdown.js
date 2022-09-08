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

  function search(evt) {
    setSearchQuery(evt.target.value);
  }

  const options = useMemo(() => {
    return DROPDOWN_OPTIONS.filter(({ name }) => {
      return name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }, [searchQuery]);

  return (
    <div className='search'>
      <input onChange={search} type='text' />
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
    </div>
  );
}

export default Dropdown;
