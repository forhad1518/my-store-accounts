import React, { useState } from 'react'
import CashInB from '../components/Cash In Out/CashInB'
import CashOutB from '../components/Cash In Out/CashOutB'
import CashInForm from '../components/Cash In Out/CashInForm'
import CashOutForm from '../components/Cash In Out/CashOutForm'

export default function Cash() {
  /* Cash in out form control */
  const [defaultForm, setDefaultForm] = useState('Cash_In');
  return (
    <div>
      {/* Cash in out button */}
      <div className='flex justify-center gap-x-5'>
        <CashInB setDefaultForm={setDefaultForm}></CashInB>
        <CashOutB setDefaultForm={setDefaultForm}></CashOutB>
      </div>
      <div>
        {
          defaultForm === "Cash_In" ? <CashInForm></CashInForm> : <CashOutForm></CashOutForm>
        }
      </div>
      {/* Table of All Transection */}
      <div className='text-center font-bold my-4'>***All Transections Here***</div>
      <div>
        <table className="table-auto w-full border border-gray-300 text-sm text-center">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-1">Date & Time</th>
              <th className="border px-4 py-1">Cash In/Out</th>
              <th className="border px-4 py-1">Description</th>
              <th className="border px-4 py-1">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-1">07/07/25</td>
              <td className="border border-gray-200 px-4 py-1">Family</td>
              <td className="border border-gray-200 px-4 py-1">any others any othersany othersany others</td>
              <td className="border border-gray-200 px-4 py-1 text-center font-medium text-green-600">1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
