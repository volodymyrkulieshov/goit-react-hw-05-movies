import { optionsNotify } from 'NotifyOptions/Notify';
import { Notify } from 'notiflix';
import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const onChangeInput = event => {
    setQuery(event.target.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!query) {
      Notify.info('Enter your request, please!', optionsNotify);
      return;
    }
    onSearch(query);

    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={onChangeInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Enter the movie"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
