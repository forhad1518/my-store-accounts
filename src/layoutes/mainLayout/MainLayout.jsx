import SideButton from '../../components/sideButton/SideButton'
import { Outlet, Link } from 'react-router-dom'

import React, { useState } from 'react';
import SideMenu from '../../components/sideButton/sideMenu';
import MobileMenu from '../../components/MobileMenu/MobileMenu';


export default function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50 py-5">
      <main>
        <div className="relative w-11/12 mx-auto h-[calc(100vh-100px)] mt-2 flex overflow-hidden" style={{ gap: 20 }}>
          {/* Sidebar: Desktop only, collapsible */}
          <div className={`hidden lg:flex flex-col border rounded-xl p-4 bg-white sticky top-0 h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden shadow-lg transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'} relative z-30`}>
            <button
              onClick={() => setSidebarCollapsed((prev) => !prev)}
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${sidebarCollapsed? "bg-red-600 hover:bg-green-600": "bg-green-600 hover:bg-red-600"} text-white rounded-full p-1 shadow focus:outline-none z-10 border-2 border-white mouse-pointer`}
              style={{ transform: 'translateY(-50%)' }}
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
              <SideMenu />
            )}
          </div>

          {/* Content Area: expands when sidebar collapsed */}
          <div className={`border rounded-xl p-6 h-[calc(100vh-100px)] overflow-y-auto bg-white shadow transition-all duration-300 flex-1`}>
            <div className="space-y-4">
              <Outlet></Outlet>
            </div>
          </div>
        </div>

        {/* Bottom Menu: Mobile/Tablet only */}
        <MobileMenu></MobileMenu>
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
