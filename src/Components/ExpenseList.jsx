import React from 'react'

const ExpenseList = ({ expenses, deleteExpense }) => {
    // console.log('prop' , expenses)
    return (
        <div className='w-full '>

            <div className='text-white text-2xl mt-4 p-2 text-center'>
                <h1>Expense List</h1>
            </div>
            <div className='w-full max-h-[160px] overflow-auto scrollbar-hide rounded-lg'>
                <table className='w-full min-w-max text-center bg-white/10 rounded-lg p-2 text-white overflow-y-auto '>
                    <thead>
                        <tr>
                            <th className="p-2 border-b border-white text-sm md:text-base">Title</th>
                            <th className="p-2 border-b border-white text-sm md:text-base">Amount</th>
                            <th className="p-2 border-b border-white text-sm md:text-base">Type</th>
                            <th className="p-2 border-b border-white text-sm md:text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No Expense Added Yet</td>
                            </tr>
                        ) : (
                            expenses.map((expense) => (
                                <tr key={expense.id} className='border-b border-white bg-white/10 transition-all duration-300 ease-in-out hover:bg-white/20'>
                                    <td className="p-2 border-b border-white/10 whitespace-normal break-words text-wrap">
                                        {expense.title}
                                    </td>
                                    <td className="p-2 border-b border-white/10 whitespace-normal break-words text-wrap">
                                        {expense.amount}
                                    </td>
                                    <td className={`p-2 border-b border-white/10 whitespace-normal break-words text-wrap ${expense.type === 'credit' ? "text-green-500 font-bold" : "text-red-700 font-bold"}`}>
                                        {expense.type.charAt(0).toUpperCase() + expense.type.slice(1)}
                                    </td>
                                    <td className="p-2 border-b border-white/10">
                                        <button
                                            onClick={() => deleteExpense(expense.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-transform duration-200 hover:scale-105"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExpenseList
