import React, { useState } from 'react';
import styles from './Home.module.css';
import magnifyingGlass from '../../global/images/magnifying-glass 1.svg'; // Adjust the path accordingly

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearched(true);
    try {
      const response = await fetch(`http://172.16.117.43:2345/search?query=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Check the structure of the data
      if (Array.isArray(data)) {
        setResults(data.map(result => ({ ...result, showDetails: false }))); // Initialize showDetails
      } else {
        setResults([]);
        console.error('Expected an array but got:', data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    }
  };

  const highlightText = (text, query) => {
    const stopWords = new Set([
      "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from", "has",
      "have", "had", "he", "her", "here", "hers", "him", "his", "how", "i", "if",
      "in", "into", "is", "it", "its", "just", "let", "like", "me", "my", "myself",
      "no", "not", "now", "of", "on", "or", "our", "ours", "ourselves", "she", "should",
      "so", "some", "such", "t", "that", "the", "their", "theirs", "them", "then",
      "there", "these", "they", "this", "to", "was", "we", "were", "what", "when",
      "where", "which", "while", "who", "whom", "why", "will", "with", "would", "y",
      "you", "your", "yours", "yourself", "yourselves"
    ]);

    if (!text) return "";
    if (!query.trim()) return text;

    const keywords = query
      .replace(/[^\w\s\u0980-\u09FF]/g, "") // Allow Assamese characters
      .split(/\s+/)
      .filter(word => !stopWords.has(word.toLowerCase()));

    if (keywords.length === 0) return text;

    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => (
      <span
        key={index}
        style={keywords.some(keyword => keyword.toLowerCase() === part.toLowerCase()) ? { backgroundColor: 'yellow' } : {}}
      >
        {part}
      </span>
    ));
  };

  const getDocUrl = (doc_id, lang) => `http://172.16.117.43:2345/getdoc?doc_id=${doc_id}&lang=${lang}`;

  const toggleDetails = (index) => {
    setResults(results.map((result, i) => 
      i === index ? { ...result, showDetails: !result.showDetails } : result
    ));
  };

  return (
    <div className={styles['home-container']}>
      <div className={styles['search-panel']}>
        <h1>Search Judgements</h1>
        <form onSubmit={handleSearch} className={styles['search-form']}>
          <div className={styles['input-container']}>
            <img src={magnifyingGlass} alt="Search" className={styles['search-icon']} />
            <input
              // type="text"
              placeholder="Search by topic, case number, judge name, date, etc."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles['search-input']}
            />
            <button type="submit" className={styles['search-button']}>Search</button>
          </div>
        </form>
      </div>
      {searched && (
        <div className={styles['results-panel']}>
          {results.length > 0 ? (
            results.map((result, index) => (
              <div
                key={result.id}
                className={`${styles['result-item']} ${result.showDetails ? styles['details-open'] : ''}`}
              >
                <h4>{highlightText(result.title.slice(0, 200) + (result.title.length > 200 ? '...' : ''), query)}</h4>
                <p>{highlightText(result.body.slice(0, 200) + (result.body.length > 200 ? '...' : ''), query)}</p>
                <div className={styles['details-container']}>
                  <div>
                    <p><strong>Case number:</strong> {result.case_number}</p>
                    <div>
                      <a href={getDocUrl(result.doc_id, 'en')} target="_blank" rel="noopener noreferrer">
                        View English PDF
                      </a>
                      &nbsp;| &nbsp;
                      <a href={getDocUrl(result.doc_id, 'as')} target="_blank" rel="noopener noreferrer">
                        View Assamese PDF
                      </a>
                    </div>
                  </div>
                  <button
                    className={styles['details-button']}
                    onClick={() => toggleDetails(index)}
                  >
                    {result.showDetails ? 'Hide details' : 'View details'}
                  </button>
                </div>
                <div className={styles['full-text']}>
                  {result.body.split('\n').map((paragraph, i) => (
                    <p key={i}>{highlightText(paragraph, query)}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
