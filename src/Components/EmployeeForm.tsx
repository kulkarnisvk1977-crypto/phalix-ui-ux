import { useState } from 'react'

interface EmployeeFormProps {
  onSubmit: (name: string, role: string, status: 'Active' | 'On Leave') => void;
  onCancel: () => void;
}

export default function EmployeeForm({ onSubmit, onCancel }: EmployeeFormProps) {
  const [newName, setNewName] = useState('')
  const [newRole, setNewRole] = useState('')
  const [newStatus, setNewStatus] = useState<'Active' | 'On Leave'>('Active')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim() || !newRole.trim()) return
    onSubmit(newName, newRole, newStatus)
  }

  return (
    <div className="view-panel animated-fade">
      <div className="view-header">
        <h2>Onboard Employee</h2>
        <p>Register new administrative accounts into the Phalix ecosystem databank.</p>
      </div>

      <div className="standalone-form-layout">
        <h3>Personnel Record Creation</h3>
        <form onSubmit={handleFormSubmit} className="onboarding-form">
          <div className="form-fields-row">
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input 
              id="fullName"
              type="text" 
              placeholder="John Doe" 
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="roleTitle">Role Designation</label>
            <input 
              id="roleTitle"
              type="text" 
              placeholder="Systems Designer" 
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="form-fields-row">
            <div className="form-field">
              <label htmlFor="statusCode">Roster Status</label>
              <select 
                id="statusCode"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as 'Active' | 'On Leave')}
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
            <div className="form-field"></div>
          </div>
          <div className="form-actions-row">
            <button type="button" className="cta-button secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="action-button-primary form-submit-btn">
              Append Member Records
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
