import React, { useEffect, useState } from 'react'
import useLocalStorageSet from '../../hooks/LocalStorage/useLocalStorageSet';
import Swal from 'sweetalert2';

export default function CashTable({ newCashData }) {
    const { cashData } = useLocalStorageSet();
    const [updateData, setUpdateData] = useState([])

    // set old data from localstoreage
    useEffect(() => {
        setUpdateData(cashData)
    }, [cashData])

    // set new data with old data
    useEffect(() => {
        if (newCashData) {
            setUpdateData(prev => [...prev, newCashData])
        }
    }, [newCashData])

    // delete item from table
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const deleted = updateData.filter(data => data.id !== id);
                setUpdateData(deleted);
                localStorage.setItem("cashData", JSON.stringify(deleted));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    const [filter, setFilter] = useState("all");

    // Unique options from data
    const allOptions = [...new Set(updateData.map(item => item.cash_option))];

    // Filtered Data
    const filteredData = filter === "all"
        ? updateData
        : updateData.filter(item => item.cash_option === filter);


    return (
        <div className="max-w-6xl mx-auto py-3">

            {/* Filter Section */}
            <div className="flex flex-wrap gap-2 items-center mb-4">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1 rounded-full text-sm border ${filter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-600"
                        }`}
                >
                    All
                </button>
                {allOptions.map(option => (
                    <button
                        key={option}
                        onClick={() => setFilter(option)}
                        className={`px-3 py-1 rounded-full text-sm border ${filter === option ? "bg-blue-600 text-white" : "bg-white text-gray-600"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Table: Responsive */}
            <div className="max-h-[300px] overflow-x-auto w-full">
                <table className="min-w-[600px] w-full border-collapse text-center text-xs sm:text-sm">
                    <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
                        <tr>
                            <th className="border px-2 py-1 sm:px-4 sm:py-2">Date & Time</th>
                            <th className="border px-2 py-1 sm:px-4 sm:py-2">Cash In/Out</th>
                            <th className="border px-2 py-1 sm:px-4 sm:py-2">Description</th>
                            <th className="border px-2 py-1 sm:px-4 sm:py-2">Amount</th>
                            <th className="border px-2 py-1 sm:px-4 sm:py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData
                                .slice()
                                .reverse()
                                .map(data => (
                                    <tr
                                        key={data.id}
                                        className={`w-full table-auto ${data.cash === "in"
                                            ? "bg-green-100 hover:bg-green-200"
                                            : "bg-red-100 hover:bg-red-200"
                                            }`}
                                    >
                                        <td className="border px-2 py-1 sm:px-4 sm:py-2 break-words max-w-[120px]">{data.date}</td>
                                        <td className="border px-2 py-1 sm:px-4 sm:py-2">{data.cash_option}</td>
                                        <td className="border px-2 py-1 sm:px-4 sm:py-2 break-words max-w-[140px]">{data.description}</td>
                                        <td className="border px-2 py-1 sm:px-4 sm:py-2 text-green-700 font-medium">{data.amount}</td>
                                        <td className="border px-2 py-1 sm:px-4 sm:py-2">
                                            <button
                                                onClick={() => handleDelete(data.id)}
                                                className="text-red-600 hover:underline text-xs sm:text-sm"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
