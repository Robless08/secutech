import React, { useState } from 'react';
import './ManageAccounts.css'

function ManageAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddAccount = () => {
    if (name && email) {
      const newAccount = { name, email };
      if (editIndex !== null) {
        const updatedAccounts = [...accounts];
        updatedAccounts[editIndex] = newAccount;
        setAccounts(updatedAccounts);
        setEditIndex(null);
      } else {
        setAccounts([...accounts, newAccount]);
      }
      setName('');
      setEmail('');
    }
  };

  const handleEditAccount = (index) => {
    setName(accounts[index].name);
    setEmail(accounts[index].email);
    setEditIndex(index);
  };

  const handleDeleteAccount = (index) => {
    setAccounts(accounts.filter((_, i) => i !== index));
  };

  return (
    <div className="Adds">
      <div className="combo">
      <h1>Account Management</h1>
      </div>
      <div className="forma ">
        <input 
          type="text1" className="bin"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddAccount}>
          {editIndex !== null ? 'Update Account' : 'Add Account'}
        </button>
      </div>
      <div className="account-list">
          <div className="combo1">
        <h2>Accounts Registered</h2>
        </div>
        <ul>
          {accounts.map((account, index) => (
            <li className="nut" key={index}>
              {account.name} - {account.email}
              <button onClick={() => handleEditAccount(index)}>Edit</button>
              <button onClick={() => handleDeleteAccount(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default ManageAccounts;