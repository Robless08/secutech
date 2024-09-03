import React, { useState } from 'react'
import './ProgramAccessCards.css'
import {FaEnvelope , FaLock, FaUser} from "react-icons/fa";

function ProgramAccessCards() {
  
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState('');
  const [selectedPrivilege, setSelectedPrivilege] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const privilegesData = {
    User: ['Toilets', 'Office', 'Main Hall', 'Second Hall', 'Kitchen', 'Terrace'],
    Administrator: ['Server Room', 'Admin Office', 'Main Hall', 'Second Hall', 'Kitchen', 'Terrace', 'All privileges'],
    Manager: ['Conference Room', 'Manager Office', 'Main Hall', 'Second Hall', 'Kitchen', 'Terrace'],
  };

  const addPrivilege = () => {
    if (cardId && selectedRole && selectedPrivilege && password) {
      setCards([...cards, { cardId, privilege: selectedPrivilege }]);
      setCardId('');
      setSelectedPrivilege('');
      setPassword('');
      setEmail('');
    }
  };

  const updatePrivilege = (index, newPrivilege) => {
    const updatedCards = [...cards];
    updatedCards[index].privilege = newPrivilege;
    setCards(updatedCards);
  };

  const deletePrivilege = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="Application">
      <h1>Access Card Management</h1>
      <div className="former">
        <input
          type="text"
          placeholder="Card ID"
          value={cardId}
          onChange={(e) => setCardId(e.target.value)}
        />
        
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="User">User Privileges</option>
          <option value="Administrator">Administrator Privileges</option>
          <option value="Manager">Manager Privileges</option>
        </select>

        {selectedRole && (
          <select
            value={selectedPrivilege}
            onChange={(e) => setSelectedPrivilege(e.target.value)}
          >
            <option value="">Select Privilege</option>
            {privilegesData[selectedRole].map((privilege, index) => (
              <option key={index} value={privilege}>
                {privilege}
              </option>
            ))}
          </select>
        )}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="Only" onClick={addPrivilege}>Add Privilege</button>
      </div>
      <div className="card-list">
        <h2>Privileges</h2>
        <ul>
          {cards.map((card, index) => (
            <li className="email" key={index}>
              <span>
                {card.cardId} - {card.privilege}
              </span>
              <select
                onChange={(e) => updatePrivilege(index, e.target.value)}
                value={card.privilege}
              >
                {privilegesData[selectedRole || card.privilege]?.map((privilege, i) => (
                  <option key={i} value={privilege}>
                    {privilege}
                  </option>
                ))}
              </select>
              <button className="Dell" onClick={() => deletePrivilege(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


      
  
export default ProgramAccessCards;