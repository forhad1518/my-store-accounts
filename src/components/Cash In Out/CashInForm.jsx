import React, { useEffect, useState } from 'react'

export default function CashInForm() {
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
                <form action="">
                    {/* Input Date & Time */}
                    <input
                        className="border p-2 rounded"
                        type="datetime-local"
                        defaultValue={localTime}
                        name="" id=""
                        required
                    />
                    {/* Select Option */}
                    <select className="border p-2 rounded" required>
                        <option value="">Select Work</option>
                        <option value="">Store Work</option>
                        <option value="">NameJari Office</option>
                        <option value="">NameJari Local</option>
                        <option value="">Khajna</option>
                        <option value="">Typing</option>
                        <option value="">Prosno Typing</option>
                        <option value="">Others</option>
                    </select>
                    {/* input Amount */}
                    <input className="border p-2 rounded" placeholder='Amount/Taka' type="number" name="" id="" required/>
                    {/* Description */}
                    <input className="border p-2 rounded" placeholder='Description' type="text" name="" id="" required/>
                    {/* Submit */}
                    <input className="border p-2 rounded" type="submit" value="Save" required/>
                </form>
            </div>
        </div>
    )
}
