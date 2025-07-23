"use client";
import React, { useState } from 'react';
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#181C14] bg-opacity-90">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                {/* Mobile-friendly name - shorter on small screens */}
                <Link href="/" className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-white font-semibold">
                    <span className="block sm:hidden">B. Barrett-Greening</span>
                    <span className="hidden sm:block md:hidden">Bustamante B-G</span>
                    <span className="hidden md:block">Bustamante Barrett-Greening</span>
                </Link>
                {/* Mobile menu button - ensure it stays visible */}
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)} 
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            aria-label="Open mobile menu"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button 
                            onClick={() => setNavbarOpen(false)} 
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            aria-label="Close mobile menu"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                {/* Desktop menu */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
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
    );
};

export default Navbar;