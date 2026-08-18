import './EmployeeCard.css';

export default function EmployeeCard({ employee, onSelect }) {
  return (
    <div className="employee-card">
      <div className="employee-card-left">
        <div className="employee-avatar">{employee.avatar}</div>
        <div className="employee-info">
          <h3 className="employee-name">{employee.name}</h3>
          <p className="employee-email">{employee.email}</p>
          <div className="employee-meta">
            <span className="employee-department">{employee.department}</span>
            <span className="employee-role">{employee.role}</span>
          </div>
        </div>
      </div>
      <button className="select-button" onClick={() => onSelect(employee)}>
        Select
      </button>
    </div>
  );
}
