import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

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
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
