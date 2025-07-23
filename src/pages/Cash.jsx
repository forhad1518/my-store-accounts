import React, { use, useState } from 'react'
import CashInB from '../components/Cash In Out/CashInB'
import CashOutB from '../components/Cash In Out/CashOutB'
import CashInForm from '../components/Cash In Out/CashInForm'
import CashOutForm from '../components/Cash In Out/CashOutForm'
import CashTable from '../components/cashTable/CashTable'


export default function Cash() {
  // State to manage which form to display
  // Default form is Cash In
  const [defaultForm, setDefaultForm] = useState("Cash_In");

  // State to manage new cash data
  // This can be used to pass data between components if needed
  const [newCashData, setNewCashData] = useState();

  // cash amount 
  const [summaryAmount, setSummaryAmount] = useState({})

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-center my-5'>💰 Cash Management</h1>
        <p className='text-center text-gray-600 mb-5'>Last Cash: {summaryAmount.cashInAmount - summaryAmount.cashOutAmount || 0}</p>
        {/* <p className='text-center text-gray-600 mb-5'>Last Cash: {summaryAmount.summary.today || 0}</p> */}
      </div>
      <div>
        <div>
          {/* Cash in out button */}
          <div className='flex justify-center gap-x-5 my-3'>
            <CashInB setDefaultForm={setDefaultForm}></CashInB>
            <CashOutB setDefaultForm={setDefaultForm}></CashOutB>
          </div>
          <div>
            {/* cash in out form */}
            {
              defaultForm === "Cash_In" ? <CashInForm setNewCashData={setNewCashData}></CashInForm> : <CashOutForm setNewCashData={setNewCashData}></CashOutForm>
            }
          </div>
          {/* Table of All Transection */}
          <div className='text-center font-bold my-2'>***All Transections Here***</div>
          <CashTable newCashData={newCashData} setSummaryAmount={setSummaryAmount}></CashTable>
        </div>
      </div>
    </div>
  )
}
