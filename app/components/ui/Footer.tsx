'use client';

import React from 'react';
import { Container } from './Container';
import Link from 'next/link';
import { GitHubIcon } from '../icons/GitHubIcon';

export default function Footer() {
    return (
        <footer className="bg-white relative z-50 dark:bg-black py-6 border-t border-white/10">
            <Container className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p className='font-medium'>© 2025 Serhii Kaminskyi. All rights reserved.</p>
                <Link
                    href="https://github.com/KaminskySergey"
                    target="_blank"
                    className="underline hover:text-blue-300 font-medium transition mt-2 flex items-center justify-center"
                >
                   <GitHubIcon size={24}/> GitHub
                </Link>
            </Container>
        </footer>
    );
}