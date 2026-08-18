import './KnowledgeBlock.css';

export default function KnowledgeBlock({ title, type, data }) {
  if (!data) return null;

  return (
    <div className={`knowledge-block ${type}`}>
      <div className="knowledge-header">
        <h3>{title}</h3>
        <span className={`knowledge-badge ${type}`}>{type.toUpperCase()}</span>
      </div>

      {type === 'common' && (
        <div className="knowledge-content">
          {data.activeProjects && data.activeProjects.length > 0 && (
            <div className="knowledge-section">
              <h4>Active Projects</h4>
              <div className="projects-list">
                {data.activeProjects.map((project, idx) => (
                  <div key={idx} className="project-item">
                    <div className="project-header">
                      <span className="project-name">{project.name}</span>
                      <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.keyDecisions && data.keyDecisions.length > 0 && (
            <div className="knowledge-section">
              <h4>Key Decisions</h4>
              <ul className="decisions-list">
                {data.keyDecisions.map((decision, idx) => (
                  <li key={idx}>{decision}</li>
                ))}
              </ul>
            </div>
          )}

          {data.contacts && data.contacts.length > 0 && (
            <div className="knowledge-section">
              <h4>Primary Contacts</h4>
              <div className="contacts-list">
                {data.contacts.map((contact, idx) => (
                  <div key={idx} className="contact-item">
                    <div className="contact-name">{contact.name}</div>
                    <div className="contact-role">{contact.role}</div>
                    <div className="contact-area">{contact.area}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {type === 'developer' && (
        <div className="knowledge-content">
          {data.techStack && data.techStack.length > 0 && (
            <div className="knowledge-section">
              <h4>Tech Stack</h4>
              <div className="tags-list">
                {data.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {data.frameworks && data.frameworks.length > 0 && (
            <div className="knowledge-section">
              <h4>Frameworks & Tools</h4>
              <div className="tags-list">
                {data.frameworks.map((fw, idx) => (
                  <span key={idx} className="framework-tag">{fw}</span>
                ))}
              </div>
            </div>
          )}

          {data.buildProcesses && data.buildProcesses.length > 0 && (
            <div className="knowledge-section">
              <h4>Build & Deploy Processes</h4>
              <ul className="process-list">
                {data.buildProcesses.map((process, idx) => (
                  <li key={idx}><code>{process}</code></li>
                ))}
              </ul>
            </div>
          )}

          {data.technicalDebt && data.technicalDebt.length > 0 && (
            <div className="knowledge-section">
              <h4>Technical Debt & Risks</h4>
              <div className="debt-list">
                {data.technicalDebt.map((debt, idx) => (
                  <div key={idx} className="debt-item">
                    <div className="debt-header">
                      <span className={`severity-badge ${debt.severity.toLowerCase()}`}>
                        {debt.severity}
                      </span>
                      <span className="debt-file">{debt.file}</span>
                    </div>
                    <p className="debt-description">{debt.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {type === 'qa' && (
        <div className="knowledge-content">
          {data.testFrameworks && data.testFrameworks.length > 0 && (
            <div className="knowledge-section">
              <h4>Test Frameworks</h4>
              <div className="tags-list">
                {data.testFrameworks.map((fw, idx) => (
                  <span key={idx} className="framework-tag">{fw}</span>
                ))}
              </div>
            </div>
          )}

          {data.testCoverage && (
            <div className="knowledge-section">
              <h4>Test Coverage</h4>
              <div className="coverage-bars">
                <div className="coverage-item">
                  <div className="coverage-label">
                    <span>Unit Tests</span>
                    <span>{data.testCoverage.unit}%</span>
                  </div>
                  <div className="coverage-bar">
                    <div 
                      className="coverage-fill" 
                      style={{ width: `${data.testCoverage.unit}%` }}
                    ></div>
                  </div>
                </div>
                <div className="coverage-item">
                  <div className="coverage-label">
                    <span>Integration Tests</span>
                    <span>{data.testCoverage.integration}%</span>
                  </div>
                  <div className="coverage-bar">
                    <div 
                      className="coverage-fill integration" 
                      style={{ width: `${data.testCoverage.integration}%` }}
                    ></div>
                  </div>
                </div>
                <div className="coverage-item">
                  <div className="coverage-label">
                    <span>E2E Tests</span>
                    <span>{data.testCoverage.e2e}%</span>
                  </div>
                  <div className="coverage-bar">
                    <div 
                      className="coverage-fill e2e" 
                      style={{ width: `${data.testCoverage.e2e}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {data.flakyTests && data.flakyTests.length > 0 && (
            <div className="knowledge-section">
              <h4>Flaky Tests</h4>
              <div className="flaky-list">
                {data.flakyTests.map((test, idx) => (
                  <div key={idx} className="flaky-item">
                    <div className="flaky-name">{test.name}</div>
                    <div className="flaky-details">
                      <span className="flaky-frequency">{test.frequency}</span>
                      <span className="flaky-cause">{test.cause}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.bugPatterns && data.bugPatterns.length > 0 && (
            <div className="knowledge-section">
              <h4>Recurring Bug Patterns</h4>
              <div className="bug-patterns">
                {data.bugPatterns.map((bug, idx) => (
                  <div key={idx} className="bug-item">
                    <div className="bug-header">
                      <span className="bug-area">{bug.area}</span>
                      <span className={`bug-frequency ${bug.frequency.toLowerCase()}`}>
                        {bug.frequency}
                      </span>
                    </div>
                    <p className="bug-pattern">{bug.pattern}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
