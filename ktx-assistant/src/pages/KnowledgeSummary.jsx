import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import KnowledgeBlock from '../components/KnowledgeBlock';
import './KnowledgeSummary.css';

export default function KnowledgeSummary() {
  const navigate = useNavigate();
  const { 
    selectedEmployee, 
    extractedKnowledge, 
    extractKnowledge,
    ingestionStatus 
  } = useApp();
  
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionComplete, setExtractionComplete] = useState(false);

  useEffect(() => {
    if (!selectedEmployee) {
      navigate('/');
      return;
    }

    // Start knowledge extraction automatically
    const runExtraction = async () => {
      setIsExtracting(true);
      await extractKnowledge();
      setIsExtracting(false);
      setExtractionComplete(true);
    };

    if (!extractedKnowledge) {
      runExtraction();
    } else {
      setExtractionComplete(true);
    }
  }, [selectedEmployee, navigate]);

  if (!selectedEmployee) {
    return null;
  }

  const isDeveloper = selectedEmployee.role.toLowerCase().includes('developer') ||
                      selectedEmployee.role.toLowerCase().includes('devops') ||
                      selectedEmployee.role.toLowerCase().includes('engineer');
  
  const isQA = selectedEmployee.role.toLowerCase().includes('qa');

  return (
    <div className="knowledge-summary-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Knowledge Summary</h1>
          <p>AI-extracted knowledge from {selectedEmployee.name}'s digital footprint.</p>
        </div>
        <div className="employee-chip">
          <div className="employee-avatar-small">{selectedEmployee.avatar}</div>
          <div>
            <span className="employee-name">{selectedEmployee.name}</span>
            <span className="employee-role">{selectedEmployee.role}</span>
          </div>
        </div>
      </div>

      {isExtracting && (
        <div className="extraction-loading">
          <div className="extraction-spinner"></div>
          <h3>Extracting Knowledge</h3>
          <p>Using AI to analyze Jira and Git activity...</p>
          <div className="extraction-steps">
            <div className="step active">
              <span className="step-icon">✓</span>
              <span>Analyzing project involvement</span>
            </div>
            <div className="step active">
              <span className="step-icon">✓</span>
              <span>Identifying key decisions</span>
            </div>
            <div className="step loading">
              <span className="step-spinner"></span>
              <span>Extracting role-specific knowledge</span>
            </div>
            <div className="step pending">
              <span className="step-icon">○</span>
              <span>Compiling summary</span>
            </div>
          </div>
        </div>
      )}

      {extractionComplete && !extractedKnowledge && (
        <div className="insufficient-data">
          <svg viewBox="0 0 24 24" fill="none" className="warning-icon">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h3>Insufficient data found to generate an automated summary</h3>
          <p>Please rely on manual documentation for this employee's knowledge transfer.</p>
          <button 
            className="manual-doc-button"
            onClick={() => navigate('/data-sources')}
          >
            Return to Data Sources
          </button>
        </div>
      )}

      {extractionComplete && extractedKnowledge && (
        <div className="knowledge-blocks">
          {extractedKnowledge.common && (
            <KnowledgeBlock
              title="Common Knowledge"
              type="common"
              data={extractedKnowledge.common}
            />
          )}

          {isDeveloper && extractedKnowledge.developer && (
            <KnowledgeBlock
              title="Developer-Specific Knowledge"
              type="developer"
              data={extractedKnowledge.developer}
            />
          )}

          {isQA && extractedKnowledge.qa && (
            <KnowledgeBlock
              title="QA-Specific Knowledge"
              type="qa"
              data={extractedKnowledge.qa}
            />
          )}
        </div>
      )}

      {extractionComplete && extractedKnowledge && (
        <div className="summary-actions">
          <button className="export-button">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Export Summary
          </button>
          <button className="share-button">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Share with Successor
          </button>
          <button 
            className="new-search-button"
            onClick={() => {
              navigate('/');
            }}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            New Employee Search
          </button>
        </div>
      )}

      {extractionComplete && extractedKnowledge && (
        <div className="data-sources-summary">
          <h3>Data Sources Used</h3>
          <div className="sources-grid">
            <div className="source-item">
              <span className="source-icon">📋</span>
              <div className="source-info">
                <span className="source-name">Jira</span>
                <span className="source-count">
                  {ingestionStatus.jira.data?.totalCount || 0} tickets analyzed
                </span>
              </div>
            </div>
            <div className="source-item">
              <span className="source-icon">💻</span>
              <div className="source-info">
                <span className="source-name">Git</span>
                <span className="source-count">
                  {ingestionStatus.git.data?.totalCommits || 0} commits, {ingestionStatus.git.data?.totalPRs || 0} PRs analyzed
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
