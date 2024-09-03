
import './ControlAccesshistory.css'
import React, { useState } from 'react';


const ControlAccesshistory = () => {
    const [records, setRecords] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [CardNumber, setCardNumber] = useState('');
    const [Holl, setHoll] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecord = { name, date, CardNumber, Holl };
        setRecords([...records, newRecord]);
        setName('');
        setDate('');
        setCardNumber('');
        setHoll('');
    };

    const deleteRecord = (index) => {
        const newRecords = records.filter((_, i) => i !== index);
        setRecords(newRecords);
    };

    return (
        <div className="containers">
            <h1>Access Control History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>CardID</th>
                        <th>Holls</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <tr key={index}>
                            <td>{record.name}</td>
                            <td>{record.date}</td>
                            <td>{record.CardNumber}</td>
                            <td>{record.Holl}</td>
                            <td>
                                <button className="del" onClick={() => deleteRecord(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Card ID"
                    value={CardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Holl"
                    value={Holl}
                    onChange={(e) => setHoll(e.target.value)}
                    required
                />
                <input type="submit" className="program" value="Add Access Record" />
            </form>
        </div>
    );
};


export default ControlAccesshistory;