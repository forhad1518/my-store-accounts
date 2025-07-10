import React, { useEffect, useState } from 'react'
import autoLocalDateTime from '../../utils/autoLocalDateTime';
import useLocalStorageSet from '../../hooks/LocalStorage/useLocalStorageSet';

export default function CashOutForm({ setNewCashData }) {
    // auto id generate
    const id = crypto.randomUUID();
    /* Handle cash out form */
    const { newCashData } = useLocalStorageSet()
    const cashOutformHandle = e => {
        e.preventDefault()
        /* Data from cash in form */
        const date = e.target.date.value;
        const cash_option = e.target.cash_out_option.value;
        const amount = parseFloat(e.target.amount.value);
        const description = e.target.description.value;

        const all_data = { id, date, cash_option, amount, description, cash: "out" };
        // for set new cash data show
        setNewCashData(all_data);
        // updata new data in localstorage
        newCashData(all_data)

    }
    /* Auto Local time set */
    const localTime = autoLocalDateTime();

    return (
        <div className="max-w-4xl mx-auto px-6 py-3 mb-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b pb-2 text-center">
                💸 Cash Out Form
            </h2>

            <form onSubmit={cashOutformHandle} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Input Date & Time */}
                <div className="col-span-1">
                    <input
                        type="datetime-local"
                        name="date"
                        defaultValue={localTime}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Select Option */}
                <div className="col-span-1">
                    <select
                        name="cash_out_option"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                        <option value="">Select Expensed</option>
                        <option value="Store">Store</option>
                        <option value="Family">Family</option>
                        <option value="Family 1">Family 1</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                {/* Amount */}
                <div className="col-span-1">
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount/Taka"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Description */}
                <div className="col-span-1">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-md font-semibold transition"
                    >
                        Save Entry
                    </button>
                </div>

            </form>
        </div>


    )
}
