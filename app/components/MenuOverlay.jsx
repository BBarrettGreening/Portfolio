import React from 'react'
import NavLink from "./NavLink"

const MenuOverlay = ({ links }) => {
  return (
    <div className="bg-os-panel border-b border-os-border">
      <ul className="container mx-auto px-4 py-2 flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuOverlay
