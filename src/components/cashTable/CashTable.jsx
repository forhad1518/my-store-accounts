import React, { useEffect, useState } from 'react'
import useLocalStorageSet from '../../hooks/LocalStorage/useLocalStorageSet';

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


    return (
        <div>
            <table className="table-auto w-full border border-gray-300 text-sm text-center">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="border px-4 py-1">Date & Time</th>
                        <th className="border px-4 py-1">Cash In/Out</th>
                        <th className="border px-4 py-1">Description</th>
                        <th className="border px-4 py-1">Amount</th>
                        <th className="border px-4 py-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /* Revers data for use slice().reverse() */
                        updateData.slice().reverse().map((data, id) => <tr key={id} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-4 py-1">{data.date}</td>
                            <td className="border border-gray-200 px-4 py-1">{data.cash_in_option || data.cash_out_option}</td>
                            <td className="border border-gray-200 px-4 py-1">{data.description}</td>
                            <td className="border border-gray-200 px-4 py-1 text-center font-medium text-green-600">{data.amount}</td>
                            <td className="border border-gray-200 px-4 py-1 text-center font-medium text-green-600">edit delete</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
