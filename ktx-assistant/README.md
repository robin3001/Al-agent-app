# Knowledge Transfer & Employee Exit Assistant (KTX Assistant)

A React-based web application for HR/People Ops to automate the knowledge transfer process for departing employees. The system integrates with Jira and Git data sources to automatically extract and summarize an employee's digital footprint.

## Features

### 1. Employee Search & Selection (Screen 1)
- Search for departing employees by name or email
- Minimum 3 characters required for search
- View employee details including department and role
- Select an employee to initiate data ingestion

### 2. Data Source Overview (Screen 2)
- Automated retrieval of Jira tickets (Assignee/Reporter)
- Automated retrieval of Git commits and Pull Requests
- Real-time status indicators for each data source
- Connection failure handling with retry option
- Empty state handling with manual upload guidance

### 3. Knowledge Summary (Screen 3)
- LLM-extracted knowledge summaries
- **Common Knowledge Block**: Active projects, key decisions, primary contacts
- **Developer-Specific Block**: Tech stack, frameworks, build processes, technical debt
- **QA-Specific Block**: Test frameworks, coverage metrics, flaky tests, bug patterns
- Export and share functionality

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **Styling**: CSS with modern features
- **State Management**: React Context API

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

The app runs on `http://localhost:5173` by default.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── EmployeeCard.jsx # Employee search result card
│   ├── StatusCard.jsx   # Data source status display
│   └── KnowledgeBlock.jsx # Knowledge extraction display
├── pages/              # Page components
│   ├── EmployeeSearch.jsx
│   ├── DataSourceOverview.jsx
│   └── KnowledgeSummary.jsx
├── context/            # React Context providers
│   └── AppContext.jsx  # Global app state
├── data/               # Mock data
│   └── mockData.js     # Sample employees, Jira, Git data
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## User Stories Implemented

- ✅ Employee Search & Selection
- ✅ Automated Data Retrieval (Jira/Git)
- ✅ Source Connection Failure Handling
- ✅ No Activity Found Handling
- ✅ Extract Active Projects & Status
- ✅ Extract Key Decisions & Contacts
- ✅ Developer: Tech Stack & Build Processes
- ✅ Developer: Technical Debt & Risks
- ✅ QA: Test Coverage & Frameworks
- ✅ QA: Flaky Tests & Bug Patterns
- ✅ Insufficient Data Handling

## License

MIT
