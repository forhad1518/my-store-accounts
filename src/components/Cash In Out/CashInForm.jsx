import React, { useEffect, useState } from 'react'
import useLocalStorageSet from '../../hooks/LocalStorage/useLocalStorageSet';


export default function CashInForm() {

    /* Handle cash in form */
    const { cashData, newCashData } = useLocalStorageSet();
    const cashInformHandle = e => {
        e.preventDefault()
        /* Data from cash in form */
        const date = e.target.date.value;
        const cash_in_option = e.target.cash_in_option.value;
        const amount = e.target.amount.value;
        const description = e.target.description.value;

        const all_data = { date, cash_in_option, amount, description, cash: "in" }
        newCashData(all_data);
        console.log(cashData)
    }

    /* Auto Local time set */
    const [localTime, setLocalTime] = useState('')
    useEffect(() => {
        const now = new Date();
        const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16);
        setLocalTime(local)
    }, [])
    return (
        <div>
            <div>
                <p>Cash In form</p>
            </div>
            <div>
                <form onSubmit={cashInformHandle} action="">
                    {/* Input Date & Time */}
                    <input
                        className="border p-2 rounded"
                        type="datetime-local"
                        defaultValue={localTime}
                        name="date" id=""
                        required
                    />
                    {/* Select Option */}
                    <select name='cash_in_option' className="border p-2 rounded" required>
                        <option value="">Select Work</option>
                        <option value="Store Work">Store Work</option>
                        <option value="NameJari Office">NameJari Office</option>
                        <option value="NameJari Local">NameJari Local</option>
                        <option value="Khajna">Khajna</option>
                        <option value="Typing">Typing</option>
                        <option value="Prosno Typing">Prosno Typing</option>
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
