import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    return (
        <button
            onClick={selectTab}
            className={`px-4 py-2 text-sm font-medium rounded transition-all duration-150 border ${
                active
                    ? 'bg-os-red/10 border-os-red text-os-red'
                    : 'border-os-border text-os-text-dim hover:border-os-muted hover:text-os-text bg-transparent'
            }`}
        >
            {children}
        </button>
    );
}

export default TabButton
