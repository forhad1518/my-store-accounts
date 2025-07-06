import React from 'react'
import { Link } from 'react-router-dom'

export default function SideButton() {
  return (
    <div className='flex flex-col items-start'>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/cash'>Cash</Link>
        <Link to='/reports'>Reports</Link>
        <Link to='/administration'>Administration</Link>
    </div>
  )
}
