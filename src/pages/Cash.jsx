import React, { useState } from 'react'
import CashInB from '../components/Cash In Out/CashInB'
import CashOutB from '../components/Cash In Out/CashOutB'
import CashInForm from '../components/Cash In Out/CashInForm'
import CashOutForm from '../components/Cash In Out/CashOutForm'
import CashTable from '../components/cashTable/CashTable'

export default function Cash() {
  const [newCashData, setNewCashData] = useState()
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
          defaultForm === "Cash_In" ? <CashInForm setNewCashData={setNewCashData}></CashInForm> : <CashOutForm setNewCashData={setNewCashData}></CashOutForm>
        }
      </div>
      {/* Table of All Transection */}
      <div className='text-center font-bold my-4'>***All Transections Here***</div>
      <CashTable newCashData={newCashData}></CashTable>
    </div>
  )
}
