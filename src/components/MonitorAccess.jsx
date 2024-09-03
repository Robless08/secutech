import React, { useState } from 'react';
import './MonitorAccess.css'


const MonitorAccess = () => {
  const [accessLogs, setAccessLogs] = useState([
      { id: 1, user: 'Alvine', time: '2024-08-31 09:00', access: 'Granted' },
      { id: 2, user: 'Bob', time: '2024-08-31 09:15', access: 'Denied' },
      { id: 3, user: 'Charlie', time: '2024-08-31 09:30', access: 'Granted' },
  ]);

  return (
    
      <div className="access-monitor">
          <h2 className="manage">User Access Monitor</h2>
          <table>
              <thead className="bigl">
                  <tr>
                      <th>EmployeeID</th>
                      <th>User</th>
                      <th>Time</th>
                      <th>Access Status</th>
                  </tr>
              </thead>
              <tbody>
                  {accessLogs.map(log => (
                      <tr className="over"  key={log.id}>
                          <td>{log.id}</td>
                          <td>{log.user}</td>
                          <td>{log.time}</td>
                          <td className={log.access === 'Granted' ? 'granted' : 'denied'}>
                              {log.access}
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
      
  );
};

export default MonitorAccess;