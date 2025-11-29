'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react'
import { useTheme } from "next-themes"
import { Loader2 } from 'lucide-react'

export default function ThemeToggleButton() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className='w-3 h-3 flex items-center justify-center'>
                <Loader2 className=' text-blue-500 animate-spin' />
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <div className='flex items-center justify-center'>
            <button className='cursor-pointer' type='button' onClick={() => setTheme(isDark ? "light" : "dark")}>
                {isDark ? <Moon className='text-gray-300' /> : <Sun className='text-yellow-500' />}
            </button>
        </div>
    );
}