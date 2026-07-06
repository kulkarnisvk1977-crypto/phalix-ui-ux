import { useState } from 'react'

interface DepartmentFormProps {
  onSubmit: (name: string, manager: string) => void;
  onCancel: () => void;
}

export default function DepartmentForm({ onSubmit, onCancel }: DepartmentFormProps) {
  const [deptName, setDeptName] = useState('')
  const [managerName, setManagerName] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!deptName.trim() || !managerName.trim()) return
    onSubmit(deptName, managerName)
  };

  return (
    <div className="view-panel animated-fade">
      <div className="view-header">
        <h2>Create Department</h2>
        <p>Establish new administrative team groups into the Phalix management framework.</p>
      </div>

      <div className="form-card standalone-form-layout">
        <h3>Group Creation Specification</h3>
        <form onSubmit={handleFormSubmit} className="onboarding-form">
          <div className="form-fields-row">
            <div className="form-field">
              <label htmlFor="deptName">Department Title</label>
              <input 
                id="deptName"
                type="text" 
                placeholder="Engineering" 
                value={deptName}
                onChange={(e) => setDeptName(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="managerName">Lead Manager Name</label>
              <input 
                id="managerName"
                type="text" 
                placeholder="Sarah Jenkins" 
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-actions-row">
            <button type="button" className="cta-button secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="action-button-primary form-submit-btn">
              Append Group Record
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
