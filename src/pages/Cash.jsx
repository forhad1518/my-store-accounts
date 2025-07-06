import React from 'react'
import CashInB from '../components/Cash In Out/CashInB'
import CashOutB from '../components/Cash In Out/CashOutB'
import CashInForm from '../components/Cash In Out/CashInForm'
import CashOutForm from '../components/Cash In Out/CashOutForm'

export default function Cash() {
  return (
    <div>
      {/* Cash in out button */}
      <div>
        <CashInB></CashInB>
        <CashOutB></CashOutB>
      </div>
      <div>
        <CashInForm></CashInForm>
        <CashOutForm></CashOutForm>
      </div>
    </div>
  )
}
