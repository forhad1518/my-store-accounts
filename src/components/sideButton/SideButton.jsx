import React from 'react'
import { Link } from 'react-router-dom'

export default function SideButton() {
  return (
    <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-md shadow-md">
      <Link
        to="/dashboard"
        className="w-full text-left px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white transition"
      >
        Dashboard
      </Link>
      <Link
        to="/cash"
        className="w-full text-left px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white transition"
      >
        Cash
      </Link>
      <Link
        to="/reports"
        className="w-full text-left px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white transition"
      >
        Reports
      </Link>
      <Link
        to="/administration"
        className="w-full text-left px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white transition"
      >
        Administration
      </Link>
    </div>

  )
}
