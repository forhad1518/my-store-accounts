import React, { use, useState } from 'react'
import CashInB from '../components/Cash In Out/CashInB'
import CashOutB from '../components/Cash In Out/CashOutB'
import CashInForm from '../components/Cash In Out/CashInForm'
import CashOutForm from '../components/Cash In Out/CashOutForm'
import CashTable from '../components/cashTable/CashTable'


export default function Cash() {
  const [defaultForm, setDefaultForm] = useState("Cash_In")

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-center my-5'>💰 Cash Management</h1>
      </div>
      <div>
        <div>
          {/* Cash in out button */}
          <div className='flex justify-center gap-x-5 my-3'>
            <CashInB setDefaultForm={setDefaultForm}></CashInB>
            <CashOutB setDefaultForm={setDefaultForm}></CashOutB>
          </div>
          <div>
            {
              defaultForm === "Cash_In" ? <CashInForm ></CashInForm> : <CashOutForm ></CashOutForm>
            }
          </div>
          {/* Table of All Transection */}
          <div className='text-center font-bold my-2'>***All Transections Here***</div>
          <CashTable ></CashTable>
        </div>
      </div>
    </div>
  )
}
