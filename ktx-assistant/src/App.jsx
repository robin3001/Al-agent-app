import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import EmployeeSearch from './pages/EmployeeSearch';
import DataSourceOverview from './pages/DataSourceOverview';
import KnowledgeSummary from './pages/KnowledgeSummary';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<EmployeeSearch />} />
              <Route path="/data-sources" element={<DataSourceOverview />} />
              <Route path="/knowledge-summary" element={<KnowledgeSummary />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
