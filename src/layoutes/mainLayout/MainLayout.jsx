import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideButton from '../../components/sideButton/SideButton'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 py-5">
      {/* Main Layout */}
      <main>
        <div className="grid grid-cols-12 gap-2 w-10/12 mx-auto h-[calc(100vh-100px)] mt-2">

          {/* Sidebar */}
          <div className="col-span-3 border p-4 bg-white sticky top-0 h-[calc(100vh-100px)] overflow-auto">
            <p className="font-bold mb-4">Sidebar</p>
            <SideButton />
          </div>

          {/* Content Area */}
          <div className="col-span-9 border p-4 h-[calc(100vh-100px)] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Content Area</h2>
            <div className="space-y-3">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer>
        <div>
          <p className='font-bold text-center'> Global Computer And Trainnig Center</p>
        </div>
      </footer>
    </div>
  )
}
