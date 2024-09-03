import React, { useState } from 'react';
import "./ManageSecurity.css"


function ManageSecurity() {
    const [accessControl, setAccessControl] = useState(false);
    const [incidentResponse, setIncidentResponse] = useState('');
    const [alerts, setAlerts] = useState([]);
  
    const toggleAccessControl = () => setAccessControl(!accessControl);
  
    const handleIncidentResponseChange = (e) => setIncidentResponse(e.target.value);
  
    const addAlert = () => {
      if (incidentResponse) {
        setAlerts([...alerts, incidentResponse]);
        setIncidentResponse('');
      }
    };
  
    return (
      <div className="Managesec">
        <h1>Security Settings Management</h1>
        <div className="section">
          <h2>Access Control</h2>
          <button onClick={toggleAccessControl}>
            {accessControl ? 'Disable' : 'Enable'} Access Control
          </button>
          <p>Status: {accessControl ? 'Enabled' : 'Disabled'}</p>
        </div>
        <div className="section">
          <h2>Incident Response</h2>
          <textarea
            value={incidentResponse}
            onChange={handleIncidentResponseChange}
            placeholder="Enter incident response details"
          />
          <button onClick={addAlert}>Submit Incident</button>
        </div>
        <div className="section">
          <h2>Alerts</h2>
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default ManageSecurity;