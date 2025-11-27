'use client';

import Link from "next/link";
import { Container } from "./Container";
import Navigation from "./Navigation";
import { BriefcaseBusiness } from 'lucide-react'
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
    return (
        <header  className='sticky inset-0 bg-white dark:bg-black z-50 py-5 border-b border-b-white/10  w-full'>
            <Container className="flex items-center justify-between">
                <div >
                    <Link href={'/'} className="flex items-center gap-2 cursor-pointer">
                        <BriefcaseBusiness className="text-blue-500" />
                        <span className="text-black dark:text-white font-bold text-xl">Portfolio</span>
                    </Link>
                </div>
                <div className="flex items-center justify-center md:gap-32">
                    <Navigation />
                    <ThemeToggleButton />
                </div>
            </Container>
        </header>
    );
}