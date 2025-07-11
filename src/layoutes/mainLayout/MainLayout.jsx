import SideButton from '../../components/sideButton/SideButton'
import { Outlet, Link } from 'react-router-dom'

import React, { useState } from 'react';


export default function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50 py-5">
      <main>
        <div className="relative w-11/12 mx-auto h-[calc(100vh-100px)] mt-2 flex overflow-hidden" style={{gap: 20}}>
          {/* Sidebar: Desktop only, collapsible */}
          <div className={`hidden lg:flex flex-col border rounded-xl p-4 bg-white sticky top-0 h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden shadow-lg transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'} relative z-30`}>
            <button
              onClick={() => setSidebarCollapsed((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-1 shadow hover:bg-blue-700 focus:outline-none z-10 border-2 border-white"
              style={{transform: 'translateY(-50%)'}}
              title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {sidebarCollapsed ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              )}
            </button>
            <div className={`transition-all duration-300 ${sidebarCollapsed ? 'opacity-0 w-0 h-0 overflow-hidden' : 'opacity-100 w-full h-auto'}`}>
              <p className="font-bold mb-4 text-lg text-blue-700">Sidebar</p>
              <SideButton />
            </div>
            {/* Only icon when collapsed */}
            {sidebarCollapsed && (
              <div className="flex flex-col items-center justify-center mt-8 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v16.5m-9-16.5v16.5M3.75 7.5h16.5" />
                </svg>
              </div>
            )}
          </div>

          {/* Content Area: expands when sidebar collapsed */}
          <div className={`border rounded-xl p-6 h-[calc(100vh-100px)] overflow-y-auto bg-white shadow transition-all duration-300 flex-1`}>
            <h2 className="text-2xl font-bold mb-6 text-blue-700">Content Area</h2>
            <div className="space-y-4">
              <Outlet></Outlet>
            </div>
          </div>
        </div>

        {/* Bottom Menu: Mobile/Tablet only */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-y flex items-center justify-center py-1.5 shadow-lg lg:hidden z-50 min-h-[48px]">
          <nav className="flex items-center justify-center gap-7 w-full">
            {/* Menu items as React Router Links */}
            <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
              </svg>
              <span className="text-xs">Home</span>
            </Link>
            <Link to="/cash" className="flex flex-col items-center text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <span className="text-xs">Cash</span>
            </Link>
            <Link to="/reports" className="flex flex-col items-center text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v16.5m-9-16.5v16.5M3.75 7.5h16.5" />
              </svg>
              <span className="text-xs">Report</span>
            </Link>
            <Link to="/administration" className="flex flex-col items-center text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-xs">Admin</span>
            </Link>
          </nav>
        </div>
      </main>

      {/* Footer Area: Desktop only */}
      <div className="hidden lg:block w-full mt-4">
        <div className="w-full">
          <p className='font-bold text-center'>Global Computer And Trainnig Center</p>
        </div>
      </div>
    </div>
  );
}
