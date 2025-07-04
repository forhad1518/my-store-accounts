import React from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function MainLayout() {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 py-5">
      {/* Navbar */}
      <div className="w-10/12 mx-auto">
        <Navbar />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-2 w-10/12 mx-auto h-[calc(100vh-100px)] mt-2">

        {/* Sidebar */}
        <div className="col-span-3 border p-4 bg-white sticky top-0 h-[calc(100vh-100px)] overflow-auto">
          <p className="font-bold mb-4">Sidebar</p>
          <ul className="space-y-2">
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="col-span-9 border p-4 h-[calc(100vh-100px)] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Content Area</h2>
          <div className="space-y-3">
            content area
          </div>
        </div>
      </div>
    </div>
  )
}
