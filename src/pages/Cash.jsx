import React, { use, useState } from 'react'
import CashInB from '../components/Cash In Out/CashInB'
import CashOutB from '../components/Cash In Out/CashOutB'
import CashInForm from '../components/Cash In Out/CashInForm'
import CashOutForm from '../components/Cash In Out/CashOutForm'
import CashTable from '../components/cashTable/CashTable'
import SyncButton from '../components/button/SyncButton'
import useLocalStorageSet from '../hooks/LocalStorage/useLocalStorageSet'
import axiosCash from '../api/axiosCash'
import Swal from 'sweetalert2'

export default function Cash() {
  const [newCashData, setNewCashData] = useState()
  /* Cash in out form control */
  const [defaultForm, setDefaultForm] = useState('Cash_In');

  const { cashData } = useLocalStorageSet();


  // Function to handle sync action
  // This function can be used to sync data with a server or perform any other action 
  const handleSync = () => {
    // Here you can implement the logic to sync data with your server
    // For example, you can send the cashData to your server using axios
    if (cashData.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'No Data',
        text: 'There is no data to sync.',
      });
      return;
    }
    axiosCash.post('/cash', { cashData })
      .then(response => {
        localStorage.clear()
        Swal.fire({
          icon: 'success',
          title: 'Data Synced',
          text: 'Your cash data has been successfully synced.',
        })
        console.log('Data synced successfully:', response.data);
      })
      .catch(error => {
        console.error('Error syncing data:', error);
      });
  }
  return (
    <div>
      <div>
        <SyncButton handleSync={handleSync}></SyncButton>
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
              defaultForm === "Cash_In" ? <CashInForm setNewCashData={setNewCashData}></CashInForm> : <CashOutForm setNewCashData={setNewCashData}></CashOutForm>
            }
          </div>
          {/* Table of All Transection */}
          <div className='text-center font-bold my-2'>***All Transections Here***</div>
          <CashTable newCashData={newCashData}></CashTable>
        </div>
      </div>
    </div>
  )
}
