'use client';

import { navItems } from '@/app/const/nav-items';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState("#hero")
    // const [isScrolled, setIsScrolled] = useState(false)

    // useEffect(() => {
    // const handleScroll = () => {
    //     setIsScrolled(window.screenY > 10)
    // }

    // window.addEventListener("scroll", handleScroll)

    // return () => window.removeEventListener("scroll", handleScroll)
    // }, [])
    // useEffect(() => {
    //     const handleScroll = () => {
    //         let current = "#hero"

    //         navItems.forEach(item => {
    //             const section = document.querySelector(item.href) as HTMLElement | null
    //             if (!section) return

    //             const sectionTop = section.offsetTop - 200

    //             if (window.scrollY >= sectionTop) {
    //                 current = item.href
    //             }
    //         })

    //         setActive(current)
    //     }

    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // }, [])

    
    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <nav className="relative z-50">
            {/* Desktop */}
            <ul className="hidden md:flex items-center gap-5">
                {navItems.map((el, index) => (
                    <li key={index}>
                        <Link href={el.href}>
                            <p
                                className={`
    cursor-pointer font-medium relative
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300
    hover:after:w-full
    ${active === el.href ? "text-blue-400 after:w-full" : ""}
  `}
                            >
                                {el.name}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile button */}
            <button
                onClick={handleToggle}
                className="md:hidden p-2 text-white relative z-60"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Fullscreen mobile menu */}
            <div
                className={`
              fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center
              transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
            >
                <ul className="flex flex-col gap-8 text-white text-2xl text-center">
                    {navItems.map((el, index) => (
                        <li
                            key={index}
                            onClick={() => setIsOpen(false)}

                        >
                            <Link href={el.href}>
                                <p className='cursor-pointer font-medium hover:text-blue-300 transition-colors'>
                                    {el.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}