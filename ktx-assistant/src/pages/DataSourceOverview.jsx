import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import StatusCard from '../components/StatusCard';
import './DataSourceOverview.css';

export default function DataSourceOverview() {
  const navigate = useNavigate();
  const { 
    selectedEmployee, 
    ingestionStatus, 
    startDataIngestion 
  } = useApp();
  
  const [isIngesting, setIsIngesting] = useState(false);
  const [ingestionComplete, setIngestionComplete] = useState(false);

  useEffect(() => {
    if (!selectedEmployee) {
      navigate('/');
      return;
    }

    // Start data ingestion automatically when page loads
    const runIngestion = async () => {
      setIsIngesting(true);
      await startDataIngestion();
      setIsIngesting(false);
      setIngestionComplete(true);
    };

    if (ingestionStatus.jira.status === 'idle' && ingestionStatus.git.status === 'idle') {
      runIngestion();
    } else {
      setIngestionComplete(true);
    }
  }, [selectedEmployee, navigate]);

  const handleRetry = async () => {
    setIsIngesting(true);
    setIngestionComplete(false);
    await startDataIngestion();
    setIsIngesting(false);
    setIngestionComplete(true);
  };

  const hasNoActivity = 
    ingestionComplete &&
    (ingestionStatus.jira.status === 'empty' || ingestionStatus.jira.status === 'error') &&
    (ingestionStatus.git.status === 'empty' || ingestionStatus.git.status === 'error');

  const hasSuccessfulData = 
    ingestionComplete &&
    (ingestionStatus.jira.status === 'success' || ingestionStatus.git.status === 'success');

  if (!selectedEmployee) {
    return null;
  }

  return (
    <div className="data-source-page">
      <div className="page-header">
        <div className="employee-info-header">
          <div className="employee-avatar-large">{selectedEmployee.avatar}</div>
          <div>
            <h1>{selectedEmployee.name}</h1>
            <p>{selectedEmployee.department} • {selectedEmployee.role}</p>
          </div>
          <span className="found-badge">Found</span>
        </div>
      </div>

      <div className="section-title">
        <h2>Data Source Overview</h2>
        <p>Automated retrieval of Jira and Git activity for the selected employee.</p>
      </div>

      <div className="status-cards-grid">
        <StatusCard
          title="Jira"
          icon="📋"
          status={ingestionStatus.jira.status}
          data={ingestionStatus.jira.data}
          error={ingestionStatus.jira.error}
          onRetry={handleRetry}
        />
        <StatusCard
          title="Git"
          icon="💻"
          status={ingestionStatus.git.status}
          data={ingestionStatus.git.data}
          error={ingestionStatus.git.error}
          onRetry={handleRetry}
        />
      </div>

      {hasNoActivity && (
        <div className="no-activity-message">
          <svg viewBox="0 0 24 24" fill="none" className="warning-icon">
            <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10.29 3.86L1.82 18C1.64 18.3 1.55 18.64 1.55 18.99C1.56 19.34 1.66 19.67 1.84 19.96C2.03 20.25 2.29 20.49 2.6 20.64C2.91 20.79 3.26 20.87 3.61 20.86H20.53C20.88 20.87 21.23 20.79 21.54 20.64C21.85 20.49 22.11 20.25 22.3 19.96C22.48 19.67 22.58 19.34 22.59 18.99C22.59 18.64 22.5 18.3 22.32 18L13.85 3.86C13.66 3.58 13.4 3.35 13.1 3.19C12.8 3.04 12.46 2.96 12.12 2.96C11.78 2.96 11.44 3.04 11.14 3.19C10.84 3.35 10.58 3.58 10.39 3.86H10.29Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3>No activity found in Jira/Git</h3>
          <p>Please proceed with manual uploads for this employee's knowledge documentation.</p>
          <button className="manual-upload-button">
            Manual Upload
          </button>
        </div>
      )}

      {hasSuccessfulData && (
        <div className="action-section">
          <button 
            className="proceed-button"
            onClick={() => navigate('/knowledge-summary')}
          >
            Proceed to Knowledge Extraction
            <svg viewBox="0 0 24 24" fill="none" className="arrow-icon">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {ingestionComplete && ingestionStatus.jira.data && (
        <div className="data-preview">
          <h3>Jira Tickets Preview</h3>
          <div className="tickets-table">
            <div className="table-header">
              <span>Key</span>
              <span>Summary</span>
              <span>Status</span>
              <span>Type</span>
              <span>Role</span>
            </div>
            {ingestionStatus.jira.data.tickets.slice(0, 5).map((ticket, idx) => (
              <div key={idx} className="table-row">
                <span className="ticket-key">{ticket.key}</span>
                <span className="ticket-summary">{ticket.summary}</span>
                <span className={`ticket-status ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                  {ticket.status}
                </span>
                <span className="ticket-type">{ticket.type}</span>
                <span className="ticket-role">{ticket.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {ingestionComplete && ingestionStatus.git.data && ingestionStatus.git.data.commits.length > 0 && (
        <div className="data-preview">
          <h3>Recent Commits Preview</h3>
          <div className="commits-list">
            {ingestionStatus.git.data.commits.slice(0, 4).map((commit, idx) => (
              <div key={idx} className="commit-item">
                <code className="commit-hash">{commit.hash}</code>
                <span className="commit-message">{commit.message}</span>
                <span className="commit-repo">{commit.repo}</span>
                <span className="commit-date">{commit.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
