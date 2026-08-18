import './StatusCard.css';

export default function StatusCard({ title, icon, status, data, error, onRetry }) {
  const getStatusClass = () => {
    switch (status) {
      case 'loading': return 'status-loading';
      case 'success': return 'status-success';
      case 'error': return 'status-error';
      case 'empty': return 'status-empty';
      default: return 'status-idle';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="spinner"></div>
        );
      case 'success':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="status-icon success">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'error':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="status-icon error">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'empty':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="status-icon empty">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" className="status-icon idle">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
    }
  };

  return (
    <div className={`status-card ${getStatusClass()}`}>
      <div className="status-card-header">
        <div className="status-card-title">
          <span className="source-icon">{icon}</span>
          <h3>{title}</h3>
        </div>
        {getStatusIcon()}
      </div>

      <div className="status-card-body">
        {status === 'loading' && (
          <p className="status-message">Retrieving data...</p>
        )}
        
        {status === 'success' && data && (
          <div className="data-summary">
            {title === 'Jira' && (
              <div className="data-counts">
                <div className="count-item">
                  <span className="count-value">{data.totalCount}</span>
                  <span className="count-label">Tickets Found</span>
                </div>
              </div>
            )}
            {title === 'Git' && (
              <div className="data-counts">
                <div className="count-item">
                  <span className="count-value">{data.totalCommits}</span>
                  <span className="count-label">Commits</span>
                </div>
                <div className="count-item">
                  <span className="count-value">{data.totalPRs}</span>
                  <span className="count-label">Pull Requests</span>
                </div>
              </div>
            )}
          </div>
        )}

        {status === 'error' && (
          <div className="error-content">
            <p className="error-message">{error || 'Connection Failed'}</p>
            {onRetry && (
              <button className="retry-button" onClick={onRetry}>
                Retry Connection
              </button>
            )}
          </div>
        )}

        {status === 'empty' && (
          <p className="empty-message">No activity found</p>
        )}

        {status === 'idle' && (
          <p className="idle-message">Waiting to start...</p>
        )}
      </div>
    </div>
  );
}
