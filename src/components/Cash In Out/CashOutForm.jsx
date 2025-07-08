import React, { useEffect, useState } from 'react'
import autoLocalDateTime from '../../utils/autoLocalDateTime';
import useLocalStorageSet from '../../hooks/LocalStorage/useLocalStorageSet';

export default function CashOutForm() {
    /* Handle cash out form */
    const { newCashData } = useLocalStorageSet()
    const cashOutformHandle = e => {
        e.preventDefault()
        /* Data from cash in form */
        const date = e.target.date.value;
        const cash_out_option = e.target.cash_out_option.value;
        const amount = e.target.amount.value;
        const description = e.target.description.value;

        const all_data = { date, cash_out_option, amount, description, cash: "out" };
        newCashData(all_data)

    }
    /* Auto Local time set */
    const localTime = autoLocalDateTime();

    return (
        <div>
            <div>
                <p>Cash Out form</p>
            </div>
            <div>
                <form onSubmit={cashOutformHandle} action="">
                    {/* Input Date & Time */}
                    <input
                        className="border p-2 rounded"
                        type="datetime-local"
                        defaultValue={localTime}
                        name="date" id=""
                        required
                    />
                    {/* Select Option */}
                    <select name='cash_out_option' className="border p-2 rounded" required>
                        <option value="">Select Expensed</option>
                        <option value="Store">Store</option>
                        <option value="Family">Family</option>
                        <option value="Family 1">Family 1</option>
                        <option value="Others">Others</option>
                    </select>
                    {/* input Amount */}
                    <input className="border p-2 rounded" placeholder='Amount/Taka' type="number" name="amount" id="" required />
                    {/* Description */}
                    <input className="border p-2 rounded" placeholder='Description' type="text" name="description" id="" required />
                    {/* Submit */}
                    <input className="border p-2 rounded" type="submit" value="Save" required />
                </form>
            </div>
        </div>
    )
}
