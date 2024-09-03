import React from 'react';
import './Statistics.css';

function Statistics() {
  const securityStats = {
    breachesPrevented: 120,
    systemsSecured: 50,
    uptime: '99.9%',
  };

  const growthImpact = [
    'Improved client trust',
    'Increased data integrity',
    'Enhanced compliance with regulations',
  ];

  return (
    <div className="Statis">
        <div className="Applic">
      <h1>Security System Statistics</h1>
      </div>
      <div className="stats">
        <h2>Security Stats</h2>
        <ul>
          <li>Breaches Prevented: {securityStats.breachesPrevented}</li>
          <li>Systems Secured: {securityStats.systemsSecured}</li>
          <li>System Uptime: {securityStats.uptime}</li>
        </ul>
      </div>
      <div className="growth">
        <h2>Impact on Company Growth</h2>
        <ul>
          {growthImpact.map((impact, index) => (
            <li key={index}>{impact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Statistics;