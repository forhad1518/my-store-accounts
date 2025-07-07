import React from 'react'

export default function CashInB({setDefaultForm}) {
  return (
    <button onClick={()=> setDefaultForm("Cash_In")} className='p-2 bg-green-500 font-bold text-white rounded-sm hover:bg-green-600'>Cash In</button>
  )
}
