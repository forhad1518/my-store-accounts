import React, { use, useState } from 'react'
import CashInB from '../components/Cash In Out/CashInB'
import CashOutB from '../components/Cash In Out/CashOutB'
import CashInForm from '../components/Cash In Out/CashInForm'
import CashOutForm from '../components/Cash In Out/CashOutForm'
import CashTable from '../components/cashTable/CashTable'
import { motion } from "framer-motion";


export default function Cash() {
  // State to manage which form to display
  // Default form is Cash In
  const [defaultForm, setDefaultForm] = useState("Cash_In");

  // State to manage new cash data
  // This can be used to pass data between components if needed
  const [newCashData, setNewCashData] = useState();

  // cash amount 
  const [summaryAmount, setSummaryAmount] = useState({})
  console.log(summaryAmount?.summary?.today?.in);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    }),
  };


  return (
    <div>
      <div className="max-w-5xl mx-auto px-2">
        <p className="text-center text-gray-600 mb-6 text-lg">
          Last Cash: <span className="font-semibold text-black">
            {summaryAmount.cashInAmount - summaryAmount.cashOutAmount || 0}
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center text-gray-700">
          {[
            { label: "Today In", val: summaryAmount?.summary?.today?.in, color: "green" },
            { label: "Today Out", val: summaryAmount?.summary?.today?.out, color: "red" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`p-2 rounded shadow-md bg-${item.color}-50`}
            >
              <h3 className="font-semibold text-lg mb-1">{item.label}: <span className={`text-lg font-bold text-${item.color}-600`}>{item.val || 0}</span></h3>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <div>
          {/* Cash in out button */}
          <div className='flex justify-center gap-x-5 mt-8 mb-2'>
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
