// Mock Employee Data
export const employees = [
  {
    id: 'EMP001',
    name: 'John Smith',
    email: 'john.smith@company.com',
    department: 'Engineering',
    role: 'Developer',
    avatar: 'JS',
    status: 'Active'
  },
  {
    id: 'EMP002',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    department: 'Engineering',
    role: 'QA Engineer',
    avatar: 'SJ',
    status: 'Active'
  },
  {
    id: 'EMP003',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    department: 'Engineering',
    role: 'Senior Developer',
    avatar: 'MC',
    status: 'Active'
  },
  {
    id: 'EMP004',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    department: 'Product',
    role: 'Product Manager',
    avatar: 'ED',
    status: 'Active'
  },
  {
    id: 'EMP005',
    name: 'Robert Wilson',
    email: 'robert.wilson@company.com',
    department: 'Engineering',
    role: 'DevOps Engineer',
    avatar: 'RW',
    status: 'Active'
  },
  {
    id: 'EMP006',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@company.com',
    department: 'Engineering',
    role: 'QA Lead',
    avatar: 'LA',
    status: 'Active'
  }
];

// Mock Jira Data
export const jiraData = {
  EMP001: {
    tickets: [
      { key: 'PROJ-123', summary: 'Implement user authentication', status: 'In Progress', type: 'Story', role: 'Assignee' },
      { key: 'PROJ-124', summary: 'Fix login page redirect issue', status: 'Done', type: 'Bug', role: 'Assignee' },
      { key: 'PROJ-125', summary: 'Add password reset functionality', status: 'In Review', type: 'Story', role: 'Assignee' },
      { key: 'PROJ-126', summary: 'Database migration for user table', status: 'Done', type: 'Task', role: 'Reporter' },
      { key: 'PROJ-127', summary: 'API endpoint for user profile', status: 'In Progress', type: 'Story', role: 'Assignee' }
    ],
    totalCount: 5
  },
  EMP002: {
    tickets: [
      { key: 'QA-001', summary: 'Write test cases for login module', status: 'Done', type: 'Task', role: 'Assignee' },
      { key: 'QA-002', summary: 'Automate regression tests', status: 'In Progress', type: 'Story', role: 'Assignee' },
      { key: 'QA-003', summary: 'Report: Intermittent failures in payment tests', status: 'Open', type: 'Bug', role: 'Reporter' },
      { key: 'QA-004', summary: 'E2E test suite for checkout flow', status: 'Done', type: 'Story', role: 'Assignee' }
    ],
    totalCount: 4
  },
  EMP003: {
    tickets: [
      { key: 'ARCH-001', summary: 'Design microservices architecture', status: 'Done', type: 'Epic', role: 'Assignee' },
      { key: 'ARCH-002', summary: 'Implement API gateway', status: 'In Progress', type: 'Story', role: 'Assignee' },
      { key: 'TECH-001', summary: 'Technical debt: Refactor legacy code', status: 'Open', type: 'Task', role: 'Reporter' },
      { key: 'PROJ-200', summary: 'Code review guidelines document', status: 'Done', type: 'Task', role: 'Reporter' },
      { key: 'PROJ-201', summary: 'Performance optimization for search', status: 'In Progress', type: 'Story', role: 'Assignee' },
      { key: 'PROJ-202', summary: 'Implement caching layer', status: 'Done', type: 'Story', role: 'Assignee' }
    ],
    totalCount: 6
  },
  EMP004: {
    tickets: [],
    totalCount: 0
  },
  EMP005: {
    tickets: [
      { key: 'OPS-001', summary: 'Setup CI/CD pipeline', status: 'Done', type: 'Story', role: 'Assignee' },
      { key: 'OPS-002', summary: 'Configure Kubernetes cluster', status: 'In Progress', type: 'Task', role: 'Assignee' },
      { key: 'OPS-003', summary: 'Implement monitoring and alerting', status: 'Done', type: 'Story', role: 'Assignee' }
    ],
    totalCount: 3
  },
  EMP006: {
    tickets: [
      { key: 'QA-100', summary: 'Test strategy for Q3 release', status: 'Done', type: 'Task', role: 'Assignee' },
      { key: 'QA-101', summary: 'Setup test automation framework', status: 'Done', type: 'Story', role: 'Assignee' },
      { key: 'QA-102', summary: 'Train team on Cypress', status: 'Done', type: 'Task', role: 'Assignee' },
      { key: 'QA-103', summary: 'Define test coverage metrics', status: 'In Progress', type: 'Task', role: 'Assignee' }
    ],
    totalCount: 4
  }
};

// Mock Git Data
export const gitData = {
  EMP001: {
    commits: [
      { hash: 'a1b2c3d', message: 'feat: implement JWT authentication', repo: 'backend-api', date: '2026-08-15' },
      { hash: 'e4f5g6h', message: 'fix: resolve session timeout issue', repo: 'backend-api', date: '2026-08-14' },
      { hash: 'i7j8k9l', message: 'refactor: clean up auth middleware', repo: 'backend-api', date: '2026-08-13' },
      { hash: 'm0n1o2p', message: 'TODO: add rate limiting', repo: 'backend-api', date: '2026-08-12' }
    ],
    pullRequests: [
      { number: 45, title: 'Add user authentication module', status: 'Merged', repo: 'backend-api' },
      { number: 52, title: 'Fix login redirect bug', status: 'Merged', repo: 'frontend-app' }
    ],
    totalCommits: 4,
    totalPRs: 2
  },
  EMP002: {
    commits: [
      { hash: 'q3r4s5t', message: 'test: add login test cases', repo: 'qa-automation', date: '2026-08-15' },
      { hash: 'u6v7w8x', message: 'test: implement page object model', repo: 'qa-automation', date: '2026-08-14' }
    ],
    pullRequests: [
      { number: 12, title: 'Add Cypress test framework', status: 'Merged', repo: 'qa-automation' }
    ],
    totalCommits: 2,
    totalPRs: 1
  },
  EMP003: {
    commits: [
      { hash: 'y9z0a1b', message: 'feat: implement API gateway routing', repo: 'api-gateway', date: '2026-08-16' },
      { hash: 'c2d3e4f', message: 'perf: optimize database queries', repo: 'backend-api', date: '2026-08-15' },
      { hash: 'g5h6i7j', message: 'FIXME: handle edge case in search', repo: 'backend-api', date: '2026-08-14' },
      { hash: 'k8l9m0n', message: 'docs: update API documentation', repo: 'backend-api', date: '2026-08-13' },
      { hash: 'o1p2q3r', message: 'refactor: extract service layer', repo: 'backend-api', date: '2026-08-12' },
      { hash: 's4t5u6v', message: 'feat: add Redis caching layer', repo: 'backend-api', date: '2026-08-11' }
    ],
    pullRequests: [
      { number: 78, title: 'Implement microservices architecture', status: 'Merged', repo: 'backend-api' },
      { number: 82, title: 'Add caching layer', status: 'Merged', repo: 'backend-api' },
      { number: 89, title: 'Performance improvements', status: 'Open', repo: 'backend-api' }
    ],
    totalCommits: 6,
    totalPRs: 3
  },
  EMP004: {
    commits: [],
    pullRequests: [],
    totalCommits: 0,
    totalPRs: 0
  },
  EMP005: {
    commits: [
      { hash: 'w7x8y9z', message: 'ci: setup GitHub Actions workflow', repo: 'devops-config', date: '2026-08-15' },
      { hash: 'a0b1c2d', message: 'ops: configure Kubernetes manifests', repo: 'k8s-config', date: '2026-08-14' },
      { hash: 'e3f4g5h', message: 'ops: add Prometheus monitoring', repo: 'devops-config', date: '2026-08-13' }
    ],
    pullRequests: [
      { number: 23, title: 'CI/CD Pipeline Setup', status: 'Merged', repo: 'devops-config' },
      { number: 31, title: 'Kubernetes deployment configs', status: 'Merged', repo: 'k8s-config' }
    ],
    totalCommits: 3,
    totalPRs: 2
  },
  EMP006: {
    commits: [
      { hash: 'i6j7k8l', message: 'test: add performance test suite', repo: 'qa-automation', date: '2026-08-15' },
      { hash: 'm9n0o1p', message: 'test: implement API contract tests', repo: 'qa-automation', date: '2026-08-14' },
      { hash: 'q2r3s4t', message: 'docs: test strategy document', repo: 'qa-docs', date: '2026-08-13' }
    ],
    pullRequests: [
      { number: 18, title: 'Test automation framework setup', status: 'Merged', repo: 'qa-automation' },
      { number: 25, title: 'Add coverage reporting', status: 'Merged', repo: 'qa-automation' }
    ],
    totalCommits: 3,
    totalPRs: 2
  }
};

// Mock Knowledge Extraction Data
export const knowledgeData = {
  EMP001: {
    common: {
      activeProjects: [
        { name: 'Backend API', status: 'In Progress', description: 'Core authentication and user management APIs' },
        { name: 'Frontend App', status: 'In Progress', description: 'React-based web application' }
      ],
      keyDecisions: [
        'Adopted JWT for stateless authentication',
        'Implemented Redis for session caching',
        'Chose PostgreSQL for user data storage'
      ],
      contacts: [
        { name: 'Michael Chen', role: 'Technical Lead', area: 'Architecture decisions' },
        { name: 'Emily Davis', role: 'Product Manager', area: 'Feature requirements' }
      ]
    },
    developer: {
      techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'React', 'TypeScript'],
      frameworks: ['Jest', 'Supertest', 'React Testing Library'],
      buildProcesses: [
        'npm run build - Production build with webpack',
        'npm run test - Run unit tests',
        'Docker containerization for deployment'
      ],
      technicalDebt: [
        { description: 'TODO: Add rate limiting to auth endpoints', severity: 'Medium', file: 'auth.middleware.js' },
        { description: 'Refactor legacy user service code', severity: 'High', file: 'userService.js' }
      ]
    }
  },
  EMP002: {
    common: {
      activeProjects: [
        { name: 'QA Automation', status: 'In Progress', description: 'E2E test automation framework' }
      ],
      keyDecisions: [
        'Selected Cypress as primary E2E testing tool',
        'Implemented Page Object Model pattern'
      ],
      contacts: [
        { name: 'Lisa Anderson', role: 'QA Lead', area: 'Test strategy and planning' }
      ]
    },
    qa: {
      testFrameworks: ['Cypress', 'Jest', 'Mocha'],
      testCoverage: { unit: 78, integration: 65, e2e: 45 },
      flakyTests: [
        { name: 'Payment flow test', frequency: 'Intermittent', cause: 'Race condition in async operations' },
        { name: 'Login redirect test', frequency: 'Occasional', cause: 'Network timeout' }
      ],
      bugPatterns: [
        { area: 'Payment Module', frequency: 'High', pattern: 'Currency formatting issues' },
        { area: 'User Session', frequency: 'Medium', pattern: 'Session timeout not handled gracefully' }
      ]
    }
  },
  EMP003: {
    common: {
      activeProjects: [
        { name: 'API Gateway', status: 'In Progress', description: 'Centralized API routing and management' },
        { name: 'Backend API', status: 'Active', description: 'Core microservices' },
        { name: 'Performance Optimization', status: 'In Progress', description: 'System-wide performance improvements' }
      ],
      keyDecisions: [
        'Adopted microservices architecture over monolith',
        'Implemented API Gateway pattern with Kong',
        'Added Redis caching for frequently accessed data',
        'Chose gRPC for inter-service communication'
      ],
      contacts: [
        { name: 'Robert Wilson', role: 'DevOps Lead', area: 'Infrastructure and deployment' },
        { name: 'Emily Davis', role: 'Product Manager', area: 'Roadmap and priorities' },
        { name: 'John Smith', role: 'Developer', area: 'Authentication module' }
      ]
    },
    developer: {
      techStack: ['Node.js', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'Kubernetes'],
      frameworks: ['Express.js', 'Gin', 'gRPC', 'GraphQL'],
      buildProcesses: [
        'Multi-stage Docker builds for all services',
        'Helm charts for Kubernetes deployments',
        'GitHub Actions for CI/CD',
        'SonarQube for code quality checks'
      ],
      technicalDebt: [
        { description: 'FIXME: Handle edge case in search service', severity: 'High', file: 'searchService.go' },
        { description: 'Migrate legacy endpoints to new gateway', severity: 'Medium', file: 'routes.js' },
        { description: 'Add comprehensive error handling', severity: 'Medium', file: 'errorHandler.js' }
      ]
    }
  },
  EMP004: null, // No activity
  EMP005: {
    common: {
      activeProjects: [
        { name: 'DevOps Infrastructure', status: 'Active', description: 'CI/CD and cloud infrastructure' },
        { name: 'Kubernetes Migration', status: 'In Progress', description: 'Container orchestration setup' }
      ],
      keyDecisions: [
        'Migrated from Jenkins to GitHub Actions',
        'Adopted Kubernetes for container orchestration',
        'Implemented Prometheus + Grafana for monitoring'
      ],
      contacts: [
        { name: 'Michael Chen', role: 'Senior Developer', area: 'Application requirements' }
      ]
    },
    developer: {
      techStack: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana'],
      frameworks: ['Helm', 'ArgoCD'],
      buildProcesses: [
        'Terraform for infrastructure as code',
        'Helm charts for application deployment',
        'GitHub Actions workflows for all services'
      ],
      technicalDebt: [
        { description: 'Update deprecated Kubernetes APIs', severity: 'High', file: 'deployment.yaml' }
      ]
    }
  },
  EMP006: {
    common: {
      activeProjects: [
        { name: 'QA Automation Framework', status: 'Active', description: 'Company-wide test automation' },
        { name: 'Test Coverage Initiative', status: 'In Progress', description: 'Improving test coverage metrics' }
      ],
      keyDecisions: [
        'Standardized on Cypress for E2E testing',
        'Implemented contract testing with Pact',
        'Defined coverage targets: 80% unit, 70% integration, 50% E2E'
      ],
      contacts: [
        { name: 'Sarah Johnson', role: 'QA Engineer', area: 'Day-to-day test implementation' },
        { name: 'Michael Chen', role: 'Senior Developer', area: 'Technical coordination' }
      ]
    },
    qa: {
      testFrameworks: ['Cypress', 'Jest', 'Pact', 'k6 (Performance)', 'Playwright'],
      testCoverage: { unit: 82, integration: 71, e2e: 52 },
      flakyTests: [
        { name: 'Dashboard load test', frequency: 'Rare', cause: 'External API dependency' },
        { name: 'File upload test', frequency: 'Occasional', cause: 'File system race condition' }
      ],
      bugPatterns: [
        { area: 'File Uploads', frequency: 'Medium', pattern: 'Large file handling timeouts' },
        { area: 'Dashboard', frequency: 'Low', pattern: 'Data refresh race conditions' }
      ]
    }
  }
};
