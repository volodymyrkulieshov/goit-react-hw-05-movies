import { optionsNotify } from 'NotifyOptions/Notify';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { Input, Form, Button } from './SearchForm.styled';

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
      <Form onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={onChangeInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Enter the movie"
        />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default SearchForm;
