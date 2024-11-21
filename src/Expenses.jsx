import React, { useState } from 'react';

const Expenses = () => {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpenses = () => {
        if (!input || !amount) return;
        const newExpenses = {
            id: expenses.length + 1,
            title: input, // Use the input value
            amount: amount // Use the amount value
        };
        setExpenses([...expenses, newExpenses]);
        setInput('');
        setAmount('');
    };

    return (
        <div>
            <h1>EXPENSES TRACKER</h1>
            <input 
                type="text" 
                value={input} 
                placeholder='Expenses' 
                onChange={(e) => setInput(e.target.value)} 
            />
            <input 
                type="number" 
                value={amount} 
                placeholder="Amount" 
                onChange={(e) => setAmount(e.target.value)} 
            />
            <button className='btn' onClick={addExpenses}>Add expenses</button>
            <ul className='expenses-list'>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.title}  ${expense.amount} 
                        <button onClick={() => setExpenses(expenses.filter((e) => e.id !== expense.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Expenses;
