import React from 'react'

const TotalAmount = ({expenses}) => {

const totalCredit = expenses.filter(expense=>expense.type==='credit').reduce((sum, expense)=>sum + Number(expense.amount), 0)


const totalDebit = expenses.filter(expense=>expense.type === 'debit').reduce((sum, expense) =>sum+ Number(expense.amount), 0) 

const balance = totalCredit-totalDebit
    return (
        <div>
            <div className="border border-white/30 rounded-lg shadow-md p-4 text-white text-center mt-4 bg-white/10">
                <h2 className="text-xl font-semibold">Total Summary</h2>
                <p className="text-green-400">Total Credit: ₹{totalCredit.toFixed(2)}</p>
                <p className="text-red-400">Total Debit: ₹{totalDebit.toFixed(2)}</p>
                <h3 className={`text-lg font-bold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    Balance: ₹{balance.toFixed(2)}
                </h3>
            </div>

        </div>
    )
}

export default TotalAmount