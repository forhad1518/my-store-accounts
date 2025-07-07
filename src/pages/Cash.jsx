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
      <div>
        <CashInB setDefaultForm={setDefaultForm}></CashInB>
        <CashOutB setDefaultForm={setDefaultForm}></CashOutB>
      </div>
      <div>
        {
          defaultForm === "Cash_In" ? <CashInForm></CashInForm> : <CashOutForm></CashOutForm>
        }
      </div>
      {/* Table of All Transection */}
      
    </div>
  )
}
