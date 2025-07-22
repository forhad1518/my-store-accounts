import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import axiosCash from '../../api/axiosCash';

export default function CashTable() {
    const [updateData, setUpdateData] = useState([])

    // data load form server 
    useEffect(() => {
        axiosCash.get('/cash')
            .then(response => {
                setUpdateData(prev => {
                    const localIds = new Set(prev.map(item => item.id));
                    const serverData = response.data.data || [];
                    // Merge without duplicates (by id)
                    const merged = [
                        ...serverData.filter(item => !localIds.has(item.id)), ...prev
                    ];
                    return merged;
                });
            })
            .catch(error => {
                console.error('Error fetching cash data:', error);
            });
    }, [])

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

            {/* Table */}
            <div className="max-h-[200px] overflow-y-auto">
                <table className="table-auto w-full text-sm text-center border-collapse">
                    <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
                        <tr>
                            <th className="border px-4 py-2">Date & Time</th>
                            <th className="border px-4 py-2">Cash In/Out</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Amount</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData
                                .slice()
                                .reverse()
                                .map(data => (
                                    <tr
                                        key={data.id || data._id}
                                        className={`w-full table-auto ${data.cash === "in"
                                            ? "bg-green-100 hover:bg-green-200"
                                            : "bg-red-100 hover:bg-red-200"
                                            } ${data._id ? "border-2 border-green-600" : "border-2 border-red-600"}`}
                                        title={`${data._id ? "Sycked Data" : "Local Data"} - ${data.cash_option}`}
                                    >
                                        <td className="border px-4 py-2">{data.date}</td>
                                        <td className="border px-4 py-2">{data.cash_option}</td>
                                        <td className="border px-4 py-2">{data.description}</td>
                                        <td className="border px-4 py-2 text-green-700 font-medium">
                                            {data.amount}
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => handleDelete(data.id)}
                                                className={`hover:underline ${data._id ? "cursor-no-drop text-red-400" : "text-red-600"}`}
                                                disabled={data._id ? true : false}
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
