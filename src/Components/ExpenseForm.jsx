import React, { useEffect, useState } from 'react';
import ExpenseList from './ExpenseList';
import TotalAmount from './TotalAmount';

const ExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('debit');
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
        console.log(savedExpenses)
        if (savedExpenses) {
            setExpenses(savedExpenses);
        }
    }, []);

    // useEffect(() => {
    //     setTimeout(()=> {
    //         localStorage.setItem('expenses', JSON.stringify(expenses));
    //     }, 10)
    // }, [expenses]);

    useEffect(() => {
        if (expenses.length > 0) {
            localStorage.setItem('expenses', JSON.stringify(expenses))
        }
    }, [expenses])


    const addAmount = (e) => {
        e.preventDefault();
        if (!title || !amount) {
            alert('Please enter the required fields');
            return;
        }
        const newExpense = {
            id: Date.now(),
            title,
            amount: Number(amount),
            type
        };

        setExpenses([...expenses, newExpense]);
        setTitle('');
        setAmount('');
    };

    const deleteExpense = (id) => {
        const updatedExpenses = expenses.filter((expenses) => expenses.id !== id);
        setExpenses(updatedExpenses);
    };

    return (
        <div className="w-full h-screen bg-cyan-900 flex flex-col justify-center items-center p-4">
            <div className="text-white text-2xl md:text-3xl font-bold p-2">
                <h2>Track Your Expense</h2>
            </div>

            <div className="w-full max-w-[600px] h-[80vh] border border-white/30 rounded-2xl shadow-lg p-6 backdrop-blur-lg bg-white/10 text-center overflow-auto scrollbar-hide ">
                <div className="p-2 text-white flex flex-col gap-4">
                    <form className="flex flex-wrap gap-2 md:gap-4 items-center justify-center" onSubmit={addAmount}>
                        <label htmlFor="balance" className="text-sm md:text-base">Expenses</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Expense Title"
                            required
                            autoFocus
                            className="text-white border border-white rounded-lg pl-2 py-1 outline-none w-full md:w-auto"
                        />
                        <input
                            type="number"
                            id="balance"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount"
                            required
                            max={99999999}
                            min={0}
                            className="text-white border border-white rounded-lg pl-2 py-1 outline-none w-full md:w-auto"
                        />
                        <select
                            name="expenses"
                            id="expenses"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                            className="text-white bg-cyan-900 border border-white rounded-lg px-2 py-1 outline-none shadow-lg w-full md:w-auto"
                        >
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </select>
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-transform duration-200 hover:scale-105">
                            Add Expense
                        </button>
                    </form>
                </div>

                <div className='flex flex-col justify-between h-[79%]'>
                    <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
                    <TotalAmount expenses={expenses} />
                </div>
            </div>
        </div>
    );
};

export default ExpenseForm;
