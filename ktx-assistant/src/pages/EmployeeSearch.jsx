import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import EmployeeCard from '../components/EmployeeCard';
import './EmployeeSearch.css';

export default function EmployeeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [validationError, setValidationError] = useState('');
  
  const navigate = useNavigate();
  const { searchEmployees, selectEmployee } = useApp();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchQuery.length < 3) {
      setValidationError('Please enter at least 3 characters');
      setSearchResults([]);
      return;
    }

    setValidationError('');
    const results = searchEmployees(searchQuery);
    setSearchResults(results);
    setHasSearched(true);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (validationError && e.target.value.length >= 3) {
      setValidationError('');
    }
  };

  const handleSelectEmployee = (employee) => {
    selectEmployee(employee);
    navigate('/data-sources');
  };

  return (
    <div className="employee-search-page">
      <div className="page-header">
        <h1>Employee Search</h1>
        <p>Search for a departing employee by name or email to initiate their data collection process.</p>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-input-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Enter employee name or email..."
            value={searchQuery}
            onChange={handleInputChange}
            className={validationError ? 'has-error' : ''}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        {validationError && (
          <p className="validation-error">{validationError}</p>
        )}
      </form>

      <div className="search-results">
        {hasSearched && searchResults.length === 0 && !validationError && (
          <div className="no-results">
            <svg viewBox="0 0 24 24" fill="none" className="no-results-icon">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 15C8 15 9.5 13 12 13C14.5 13 16 15 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="1" fill="currentColor"/>
              <circle cx="15" cy="9" r="1" fill="currentColor"/>
            </svg>
            <h3>No employees found</h3>
            <p>Try searching with a different name or email address.</p>
          </div>
        )}

        {searchResults.length > 0 && (
          <>
            <h2 className="results-title">
              Found {searchResults.length} employee{searchResults.length > 1 ? 's' : ''}
            </h2>
            <div className="results-list">
              {searchResults.map(employee => (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  onSelect={handleSelectEmployee}
                />
              ))}
            </div>
          </>
        )}

        {!hasSearched && (
          <div className="search-hint">
            <svg viewBox="0 0 24 24" fill="none" className="hint-icon">
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <p>Enter a name or email address to search for departing employees.</p>
          </div>
        )}
      </div>
    </div>
  );
}
