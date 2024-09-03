import React, { useState } from 'react';
import './Setting.css'


function Settings() {
    const [role, setRole] = useState('Administrator');

    const roles = {
      Administrator: 'You have full access to manage the company resources.',
      Employee: 'You can access the main holls granted by the admin and update your progress.',
      Manager: 'You can issue access cards and udate users privileges.',
    };
  
    return (
      <div className="Dam">
        <div className="work1">
            <h1>Hello  here we will be giving each and Every ones <br/>status in our Company </h1> <br/><br/><br/><br/>
        <h1>Company Role Status</h1>
        </div>
        <div className="role-selector">
          <label className="int">Select your role:</label>
          <select  value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Administrator">Administrator</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="role-status">
          <h2>Your Role: {role}</h2>
          <p>{roles[role]}</p>
        </div>
      </div>
    );
  }

export default Settings