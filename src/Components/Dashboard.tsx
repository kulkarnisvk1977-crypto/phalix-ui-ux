import viteLogo from '../assets/vite.svg'
import reactLogo from '../assets/react.svg'
import heroImg from '../assets/hero.png'

interface DashboardProps {
  totalWorkforce: number;
  activeDeployments: number;
  personnelLeave: number;
  onLaunchPortal: () => void;
}

export default function Dashboard({ 
  totalWorkforce, 
  activeDeployments, 
  personnelLeave, 
  onLaunchPortal 
}: DashboardProps) {
  return (
    <div className="view-panel animated-fade">
      {/* Functional Counter Row explicitly placed inside Dashboard */}
      <section className="metrics-row">
        <div className="metric-card">
          <span className="metric-label">Total Workforce</span>
          <h3 className="metric-value">{totalWorkforce}</h3>
        </div>
        <div className="metric-card active-border">
          <span className="metric-label">Active Deployments</span>
          <h3 className="metric-value status-active-text">{activeDeployments}</h3>
        </div>
        <div className="metric-card leave-border">
          <span className="metric-label">Personnel Leave</span>
          <h3 className="metric-value status-leave-text">{personnelLeave}</h3>
        </div>
      </section>

      {/* Main Welcome Hero */}
      <section className="welcome-banner">
        <div className="banner-text">
          <span className="badge">Welcome back</span>
          <h2>Systems Core Operational</h2>
          <p>
            Manage your localized state infrastructure cleanly. Navigate to the Employee portal link inside the sidebar workspace to populate live workforce adjustments instantly.
          </p>
          <button 
            type="button"
            className="action-button-primary"
            onClick={onLaunchPortal}
          >
            Launch Employee Workspace →
          </button>
        </div>
        <div className="banner-visual">
          <img src={heroImg} className="visual-base" alt="System view" />
        </div>
      </section>

      {/* Environment Docs Footer Grid */}
      <section className="info-grid">
        <div className="info-card">
          <h3>Vite Environment Core</h3>
          <p>Examine configuration updates for frontend environment processes.</p>
          <div className="card-actions">
            <a href="https://vite.dev" target="_blank" rel="noreferrer">
              <img className="mini-icon" src={viteLogo} alt="" /> Learn Vite
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img className="mini-icon" src={reactLogo} alt="" /> Learn React
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
