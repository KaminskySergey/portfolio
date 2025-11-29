'use client';

import Link from "next/link";
import { Container } from "./Container";
import Navigation from "./Navigation";
import { BriefcaseBusiness } from 'lucide-react'
import ThemeToggleButton from "./ThemeToggleButton";
import LocaleSwitcher from "./LocaleSwitcher";
import { useState } from "react";
import { Menu, X } from 'lucide-react'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <header className='sticky inset-0 bg-white dark:bg-black z-50 py-5 border-b border-b-white/10  w-full'>
            <Container className="flex items-center justify-between">
                <div >
                    <Link href={'/'} className="flex items-center gap-2 cursor-pointer">
                        <BriefcaseBusiness className="text-blue-500" />
                        <span className="text-black dark:text-white font-bold text-xl">Portfolio</span>
                    </Link>
                </div>
                <div className="flex items-center justify-center md:gap-32">
                    <Navigation isOpen={isOpen} handleToggle={handleToggle}/>
                    <div className="flex items-center justify-center gap-3">
                        <LocaleSwitcher />
                        <ThemeToggleButton />
                        {/* Mobile button */}
                        <button
                            onClick={handleToggle}
                            className="md:hidden p-2  relative z-60"
                        >
                            {isOpen ? <X className="text-white"/> : <Menu className="text-black dark:text-white"/>}
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
}