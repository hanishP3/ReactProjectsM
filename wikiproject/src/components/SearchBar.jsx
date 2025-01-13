import { useState } from 'react';

const SearchBar = ({ onSearch }) => {  // Pass `onSearch` as a prop
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);  // Call the function passed from parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="searchTerm"
        id="searchTerm"
        placeholder="Enter a search term..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
