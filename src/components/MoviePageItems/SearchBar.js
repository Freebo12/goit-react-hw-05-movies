import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { BoxSearch, BtnSearch, InputStyled } from './MoviePageItems.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    if (query === '') {
      toast.error('Write something', {});
    }
    e.preventDefault();
    onSubmit(query.trim());
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <>
      <form role="search" onSubmit={handleSubmit}>
        <InputStyled
          type="search"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
        <BtnSearch type="submit">Search</BtnSearch>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
