import React from 'react'

export default function CashOutB({ setDefaultForm }) {
  return (
    <button onClick={() => setDefaultForm("Cash_Out")} className='p-2 px-5 bg-red-500 font-bold text-white rounded-sm hover:bg-red-600'>Cash Out</button>
  )
}
