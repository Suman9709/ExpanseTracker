import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import TotalAmount from './TotalAmount'

const ExpenseForm = () => {
    const [amount, setAmount] = useState('')
    const [title, setTitle] = useState('') // Fixed setTile typo to setTitle
    const [type, setType] = useState("debit")
    const [expense, setExpense] = useState([])

    // Function to add a new expense
    const addAmount = (e) => {
        e.preventDefault();
        if (!title || !amount) {
            alert("Please enter the required fields") // Alert if fields are empty
            return
        }
        const newExpense = {
            id: Date.now(), // Unique ID based on timestamp
            title,
            amount: Number(amount),
            type
        }

        setExpense([...expense, newExpense]) // Add new expense to the list
        setTitle("") // Reset title field
        setAmount("") // Reset amount field
    }

    // Function to delete an expense
    const deleteExpense = (id) => {
        setExpense(expense.filter((expense) => expense.id !== id));
    }

    return (
        <div className='w-screen h-screen bg-cyan-900 flex flex-col justify-center items-center p-4'>
            {/* Title */}
            <div className='text-white text-2xl md:text-3xl font-bold p-2'>
                <h2>Track Your Expense</h2>
            </div>

            {/* Form Container */}
            <div className='w-full max-w-[90%] md:max-w-[60%] lg:max-w-[50%] border border-white/30 rounded-2xl shadow-lg p-6 backdrop-blur-lg bg-white/10 text-center'>
                <div className='p-2 text-white flex flex-col gap-4'>
                    {/* Expense Input Form */}
                    <form className='flex flex-wrap gap-2 md:gap-4 items-center justify-center' onSubmit={addAmount}>
                        <label htmlFor="balance" className='text-sm md:text-base'>Expenses</label>

                        {/* Title Input */}
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Expense Title'
                            required
                            autoFocus
                            className='text-white border border-white rounded-lg pl-2 py-1 outline-none w-full md:w-auto'
                        />

                        {/* Amount Input */}
                        <input
                            type="number"
                            id="balance"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder='Amount'
                            required
                            max={99999999}
                            min={0}
                            className='text-white border border-white rounded-lg pl-2 py-1 outline-none w-full md:w-auto'
                        />

                        {/* Expense Type Dropdown */}
                        <select
                            name="expense"
                            id="expense"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                            className="text-white bg-cyan-900 border border-white rounded-lg px-2 py-1 outline-none shadow-lg w-full md:w-auto"
                        >
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </select>

                        {/* Add Expense Button */}
                        <button onClick={addAmount} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-transform duration-200 hover:scale-105">
                            Add Expense
                        </button>
                    </form>
                </div>

                {/* Expense List */}
                <div>
                    <ExpenseList expenses={expense} deleteExpense={deleteExpense} />
                    
                    {/* Total Amount Component */}
                    <div>
                        <TotalAmount expenses={expense} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseForm
