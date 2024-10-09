// src/components/Dashboard.js
import React, { useState } from 'react';
import TransactionsTable from './TransactionsTable';
import Statistics from './Statistics';
import TransactionsBarChart from './TransactionsBarChart';
import TransactionsPieChart from './TransactionsPieChart';

const Dashboard = () => {
    const [month, setMonth] = useState('3'); // Default to March

    return (
        <div>
            <h1>Transactions Dashboard</h1>
            <select value={month} onChange={e => setMonth(e.target.value)}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                {/* Add other months */}
            </select>

            <Statistics month={month} />
            <TransactionsTable month={month} />
            <TransactionsBarChart month={month} />
            <TransactionsPieChart month={month} />
        </div>
    );
};

export default Dashboard;
