export interface DepartmentData {
  id: string;
  name: string;
  manager: string;
  count: number;
}

interface DepartmentProps {
  departments: DepartmentData[];
  onGoToOnboardPage: () => void;
}

export default function Department({ departments, onGoToOnboardPage }: DepartmentProps) {
  return (
    <div className="view-panel animated-fade">
      <div className="view-header-split">
        <div>
          <h2>Department Registry</h2>
          <p>Overview of active system organizational divisions, managers, and size tracking.</p>
        </div>
        <button 
          type="button" 
          className="action-button-primary" 
          onClick={onGoToOnboardPage}
        >
          ➕ Create Department
        </button>
      </div>

      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th>Lead Manager</th>
              <th>Staff Count</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.id}</td>
                <td className="emp-name-cell">{dept.name}</td>
                <td>{dept.manager}</td>
                <td>{dept.count} members</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
