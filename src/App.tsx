import { useState } from 'react'
import Dashboard from './Components/Dashboard'
import Employee from './Components/Employee'
import EmployeeForm from './Components/EmployeeForm'
import Department from './Components/Department'
import DepartmentForm from './Components/DepartmentForm'
import type { EmployeeData } from './Components/Employee' 
import type { DepartmentData } from './Components/Department' // Type-only import protection
import './App.css'

function App() {
  // 1. Expand view routes to support departments
  const [currentView, setCurrentView] = useState<'Dashboard' | 'Employee' | 'EmployeeForm' | 'Department' | 'DepartmentForm'>('Dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  const [employees, setEmployees] = useState<EmployeeData[]>([
    { id: '#001', name: 'Alex Rivera', role: 'Lead Systems Architect', status: 'Active' },
    { id: '#002', name: 'Jordan Lee', role: 'Frontend Engineer', status: 'Active' },
    { id: '#003', name: 'Taylor Wong', role: 'UI/UX Designer', status: 'On Leave' },
  ])

  // 2. Department Core Array State Engine
  const [departments, setDepartments] = useState<DepartmentData[]>([
    { id: '#D01', name: 'Engineering Core', manager: 'Alex Rivera', count: 12 },
    { id: '#D02', name: 'Design Studio', manager: 'Taylor Wong', count: 4 },
  ])

  const totalWorkforce = employees.length
  const activeDeployments = employees.filter(emp => emp.status === 'Active').length
  const personnelLeave = employees.filter(emp => emp.status === 'On Leave').length

  const handleAddNewEmployee = (name: string, role: string, status: 'Active' | 'On Leave') => {
    const newEmp: EmployeeData = { id: `#00${employees.length + 1}`, name, role, status }
    setEmployees([...employees, newEmp])
    setCurrentView('Employee')
  }

  // 3. Department Creation handler function
  const handleAddNewDepartment = (name: string, manager: string) => {
    const newDept: DepartmentData = {
      id: `#D0${departments.length + 1}`,
      name,
      manager,
      count: 0
    }
    setDepartments([...departments, newDept])
    setCurrentView('Department')
  }

  return (
    <div className="phalix-layout">
      {/* Sidebar Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <div className="sidebar-brand">
          <h2>Phalix</h2>
        </div>
        <nav className="sidebar-menu">
          <button 
            type="button"
            className={`menu-link ${currentView === 'Dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentView('Dashboard')}
          >
            <span className="material-symbols-outlined nav-icon">dashboard</span>
            Dashboard
          </button>
          <button 
            type="button"
            className={`menu-link ${currentView === 'Employee' || currentView === 'EmployeeForm' ? 'active' : ''}`}
            onClick={() => setCurrentView('Employee')}
          >
            <span className="material-symbols-outlined nav-icon">group</span>
            Employee
          </button>
          {/* 4. NEW: INJECTED COMPACT DEPARTMENT OPTION BUTTON */}
          <button 
            type="button"
            className={`menu-link ${currentView === 'Department' || currentView === 'DepartmentForm' ? 'active' : ''}`}
            onClick={() => setCurrentView('Department')}
          >
            <span className="material-symbols-outlined nav-icon">domain</span>
            Department
          </button>
        </nav>
      </aside>

      {/* Main Content Workspace Frame */}
      <div className={`main-workspace ${isSidebarOpen ? 'sidebar-visible' : 'sidebar-hidden'}`}>
        <header className="top-navbar">
          <button type="button" className="toggle-sidebar-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h3 className="top-navbar-title">Phalix Management Platform</h3>
        </header>

        <main className="content-body">
          {currentView === 'Dashboard' && (
            <Dashboard 
              totalWorkforce={totalWorkforce}
              activeDeployments={activeDeployments}
              personnelLeave={personnelLeave}
              onLaunchPortal={() => setCurrentView('Employee')} 
            />
          )}

          {currentView === 'Employee' && (
            <Employee 
              employees={employees} 
              onGoToOnboardPage={() => setCurrentView('EmployeeForm')} 
            />
          )}

          {currentView === 'EmployeeForm' && (
            <EmployeeForm 
              onSubmit={handleAddNewEmployee} 
              onCancel={() => setCurrentView('Employee')} 
            />
          )}

          {/* 5. NEW: COMPONENT CONDITIONAL MULTI-ROUTER MAPPINGS */}
          {currentView === 'Department' && (
            <Department 
              departments={departments} 
              onGoToOnboardPage={() => setCurrentView('DepartmentForm')} 
            />
          )}

          {currentView === 'DepartmentForm' && (
            <DepartmentForm 
              onSubmit={handleAddNewDepartment} 
              onCancel={() => setCurrentView('Department')} 
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
