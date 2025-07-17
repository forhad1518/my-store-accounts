import React from 'react'

export default function SyncButton({ handleSync }) {
    return (
        <div className="flex justify-center items-center">
            <button
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => handleSync()}
            >
                <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Sync Now
                </span>
            </button>
        </div>
    )
}
