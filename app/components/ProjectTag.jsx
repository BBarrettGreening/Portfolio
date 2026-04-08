import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    return (
        <button
            className={`px-4 py-1.5 text-sm font-medium rounded border transition-all duration-150 ${
                isSelected
                    ? 'bg-os-red/10 border-os-red text-os-red'
                    : 'border-os-border text-os-text-dim hover:border-os-muted hover:text-os-text bg-transparent'
            }`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag
