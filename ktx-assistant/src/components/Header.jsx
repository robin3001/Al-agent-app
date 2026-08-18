import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const { selectedEmployee, resetAll } = useApp();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo" onClick={resetAll}>
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>KTX Assistant</span>
        </Link>
      </div>
      
      <nav className="header-nav">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Employee Search
        </Link>
        {selectedEmployee && (
          <>
            <Link 
              to="/data-sources" 
              className={`nav-link ${location.pathname === '/data-sources' ? 'active' : ''}`}
            >
              Data Sources
            </Link>
            <Link 
              to="/knowledge-summary" 
              className={`nav-link ${location.pathname === '/knowledge-summary' ? 'active' : ''}`}
            >
              Knowledge Summary
            </Link>
          </>
        )}
      </nav>

      {selectedEmployee && (
        <div className="header-right">
          <div className="selected-employee-badge">
            <div className="employee-avatar-small">{selectedEmployee.avatar}</div>
            <span>{selectedEmployee.name}</span>
          </div>
        </div>
      )}
    </header>
  );
}
