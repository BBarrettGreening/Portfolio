import React from 'react'

const PlaylistTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected
      ? "text-white bg-slate-500 border-black"
      : "text-slate-600 border-slate-600 hover:border-gray-400"

    return (
    <button 
    className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}

export default PlaylistTag