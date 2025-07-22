import autoLocalDateTime from '../../utils/autoLocalDateTime';
import axiosCash from '../../api/axiosCash';
import Swal from 'sweetalert2';


export default function CashInForm({ setNewCashData }) {

    const cashInformHandle = e => {
        e.preventDefault()
        /* Data from cash in form */
        const date = e.target.date.value;
        const cash_option = e.target.cash_in_option.value;
        const amount = parseFloat(e.target.amount.value);
        const description = e.target.description.value;

        const all_data = { date, cash_option, amount, description, cash: "in" }

        // Save data to server
        axiosCash.post('/cash', all_data)
            .then(res => {
                console.log('Data synced successfully:', res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Data Synced',
                    text: 'Your cash data has been synced successfully.',
                    showConfirmButton: false
                });
                // Update new cash data state
                setNewCashData(all_data);
                e.target.reset(); // Reset form after submission

            })
            .catch(err => {
                Swal.fire({
                    icon: 'warning',
                    title: 'Data Synced Failed',
                    text: 'Your cash data has been not synced.',
                    showConfirmButton: false
                });
                console.error("Error saving cash in data:", err);
            })

    }

    /* Auto Local time set */
    const localTime = autoLocalDateTime();

    return (
        <div className="max-w-4xl mx-auto px-6 py-3 mb-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b pb-2 text-center">
                💵 Cash In Form
            </h2>

            <form onSubmit={cashInformHandle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Date & Time */}
                <div className="col-span-1">
                    <input
                        type="datetime-local"
                        name="date"
                        defaultValue={localTime}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                {/* Select Option */}
                <div className="col-span-1">
                    <select
                        name="cash_in_option"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <option value="">Select Work</option>
                        <option value="Store Work">Store Work</option>
                        <option value="NameJari Office">NameJari Office</option>
                        <option value="NameJari Local">NameJari Local</option>
                        <option value="Khajna">Khajna</option>
                        <option value="Typing">Typing</option>
                        <option value="Prosno Typing">Prosno Typing</option>
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
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                {/* Description */}
                <div className="col-span-1">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-md font-semibold transition"
                    >
                        Save Entry
                    </button>
                </div>
            </form>
        </div>

    )
}
