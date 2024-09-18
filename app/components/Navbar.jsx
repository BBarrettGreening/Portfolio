"use client";
import React, { useState } from 'react';
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
        title:"Home",
        path:"/"
    },
    {
        title:"Playlists",
        path:"/playlists"
    },
    {
        title:"Reviews",
        path:"/reviews"
    },
    {
        title:"Sources",
        path:"/sources"
    }
]



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
    <nav className="fixed top-0 left-0 right-0 z-5 bg-[#252525] bg-opacity-100">
        <div className="flex flex-wrap md:flex-row items-center justify-between mx-auto px-4">
            <Link href="/" className="text-3xl text-white font-semibold">
            Jurassic Music Society
            </Link>
            <div className="mobile-menu block md:hidden">
            {
                !navbarOpen ? (
                    <button onClick={ () => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white">
                    <Bars3Icon className="h-5 w-5" />
                    </button>
                ) : (
                    <button onClick={ () => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white">
                    <XMarkIcon className="h-5 w-5" />
                    </button>
                )
            }

            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mr-0 mt-5">
                    {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li> 
                        ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
    )
}

export default Navbar