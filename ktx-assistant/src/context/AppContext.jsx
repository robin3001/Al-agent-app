import { createContext, useContext, useState } from 'react';
import { employees, jiraData, gitData, knowledgeData } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [ingestionStatus, setIngestionStatus] = useState({
    jira: { status: 'idle', data: null, error: null },
    git: { status: 'idle', data: null, error: null }
  });
  const [extractedKnowledge, setExtractedKnowledge] = useState(null);

  const searchEmployees = (query) => {
    if (!query || query.length < 3) return [];
    const lowerQuery = query.toLowerCase();
    return employees.filter(
      emp => 
        emp.name.toLowerCase().includes(lowerQuery) ||
        emp.email.toLowerCase().includes(lowerQuery)
    );
  };

  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIngestionStatus({
      jira: { status: 'idle', data: null, error: null },
      git: { status: 'idle', data: null, error: null }
    });
    setExtractedKnowledge(null);
  };

  const startDataIngestion = async () => {
    // Simulate Jira data retrieval
    setIngestionStatus(prev => ({
      ...prev,
      jira: { status: 'loading', data: null, error: null }
    }));

    await new Promise(resolve => setTimeout(resolve, 1500));

    const jiraResult = jiraData[selectedEmployee?.id];
    if (jiraResult && jiraResult.totalCount > 0) {
      setIngestionStatus(prev => ({
        ...prev,
        jira: { status: 'success', data: jiraResult, error: null }
      }));
    } else if (jiraResult) {
      setIngestionStatus(prev => ({
        ...prev,
        jira: { status: 'empty', data: null, error: null }
      }));
    } else {
      setIngestionStatus(prev => ({
        ...prev,
        jira: { status: 'error', data: null, error: 'Connection Failed' }
      }));
    }

    // Simulate Git data retrieval
    setIngestionStatus(prev => ({
      ...prev,
      git: { status: 'loading', data: null, error: null }
    }));

    await new Promise(resolve => setTimeout(resolve, 1200));

    const gitResult = gitData[selectedEmployee?.id];
    if (gitResult && (gitResult.totalCommits > 0 || gitResult.totalPRs > 0)) {
      setIngestionStatus(prev => ({
        ...prev,
        git: { status: 'success', data: gitResult, error: null }
      }));
    } else if (gitResult) {
      setIngestionStatus(prev => ({
        ...prev,
        git: { status: 'empty', data: null, error: null }
      }));
    } else {
      setIngestionStatus(prev => ({
        ...prev,
        git: { status: 'error', data: null, error: 'Connection Failed' }
      }));
    }
  };

  const extractKnowledge = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const knowledge = knowledgeData[selectedEmployee?.id];
    setExtractedKnowledge(knowledge);
    return knowledge;
  };

  const resetAll = () => {
    setSelectedEmployee(null);
    setIngestionStatus({
      jira: { status: 'idle', data: null, error: null },
      git: { status: 'idle', data: null, error: null }
    });
    setExtractedKnowledge(null);
  };

  return (
    <AppContext.Provider value={{
      selectedEmployee,
      ingestionStatus,
      extractedKnowledge,
      searchEmployees,
      selectEmployee,
      startDataIngestion,
      extractKnowledge,
      resetAll
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
