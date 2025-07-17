import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu() {
    return (
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
    )
}
