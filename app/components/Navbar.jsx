"use client";
import React, { useState } from 'react';
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { title: "About Me",   path: "#about"    },
    { title: "My Work",    path: "#projects" },
    { title: "Contact",    path: "#contact"  },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-os-panel border-b border-os-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-7 h-7 rounded-full border-2 border-os-red flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-os-red"></div>
                        </div>
                        <span className="font-sans font-bold text-os-text text-sm tracking-wide group-hover:text-os-text transition-colors">
                            bustamante<span className="text-os-red">.</span>bg
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} href={link.path} title={link.title} />
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="ml-2 p-2 text-os-text-dim hover:text-os-text transition-colors rounded"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-os-text-dim hover:text-os-text transition-colors rounded"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="p-2 text-os-text-dim hover:text-os-text transition-colors"
                            aria-label="Toggle menu"
                        >
                            {navbarOpen
                                ? <XMarkIcon className="h-5 w-5" />
                                : <Bars3Icon className="h-5 w-5" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Red gradient underline */}
            <div className="h-px bg-gradient-to-r from-os-red via-os-red/40 to-transparent"></div>

            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
};

export default Navbar;
