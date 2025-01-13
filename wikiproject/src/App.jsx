import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import { search } from './api';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    try {
      const results = await search(searchTerm);
      setArticles(results);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header>
        <img src="/logo.png" alt="wikipedia" />  
        <h1>Wikipedia Search</h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main id="searchResult">
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <ArticleList articles={articles} />
      </main>
    </>
  );
};

export default App;
