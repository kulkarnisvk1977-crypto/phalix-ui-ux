export interface EmployeeData {
  id: string;
  name: string;
  role: string;
  status: 'Active' | 'On Leave';
}

interface EmployeeProps {
  employees: EmployeeData[];
  onGoToOnboardPage: () => void;
}

export default function Employee({ employees, onGoToOnboardPage }: EmployeeProps) {
  return (
    <div className="view-panel animated-fade">
      <div className="view-header-split">
        <div>
          <h2>Employee Roster</h2>
          <p>Overview of active system users, responsibilities, and statuses within Phalix.</p>
        </div>
        <button 
          type="button" 
          className="action-button-primary" 
          onClick={onGoToOnboardPage}
        >
          ➕ Onboard New Staff
        </button>
      </div>

      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td className="emp-name-cell">{emp.name}</td>
                <td>{emp.role}</td>
                <td>
                  <span className={`status-pill ${emp.status === 'Active' ? 'active' : 'idle'}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
