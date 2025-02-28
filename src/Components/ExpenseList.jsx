import React from 'react'

const ExpenseList = ({ expenses, deleteExpense }) => {
    return (
        <div>
            <div className='text-white text-2xl mt-4 p-2'>
                <h1>Expense List</h1>
            </div>
            <div className='flex flex-col w-full h-full  text-white shadow-md rounded-xl '>
                <table className='w-full table-auto min-w-max text-center bg-white/10 rounded-lg p-2' >
                    <thead >
                        <tr className='mt-2'>
                            <th className="p-1 border-b border-white " >Title</th>
                            <th className="p-1 border-b  border-white">Amount</th>
                            <th className="p-1 border-b  border-white ">Type</th>
                            <th className="p-1 border-b  border-white ">Action</th>
                        </tr>

                    </thead>
                    <tbody className=''>
                        {expenses.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No Expense Added yet</td>
                            </tr>

                        ) : (
                            expenses.map((expense) => (
                                <tr key={expense.id}
                                    className='border-b-1 border-white bg-white/10 transition-all duration-300  ease-in-out hover:bg-white/20'>
                                    {/* <td className="p-1 border-b border-blue-gray-50">{expense.id}</td> */}
                                    <td className="p-1 border-b border-white/10 ">{expense.title}</td>
                                    <td className="p-1  border-b border-white/10 ">{expense.amount}</td>
                                    <td className={`${expense.type === 'credit' ? "text-green-500 font-bold" : "text-red-700 font-bold"}  border-b border-white/10`}>{expense.type.charAt(0).toUpperCase() + expense.type.slice(1)}</td>
                                    <td className=" p-2  border-b border-white/10 ">
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