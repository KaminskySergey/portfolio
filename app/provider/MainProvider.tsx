'use client';

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import StarBackground from '../components/ui/StarBackground';
import Header from '../components/ui/Header';
import ToasterProvider from './ToasterProvider';

interface IMainProvider {
  children: ReactNode
}

export default function MainProvider({ children }: IMainProvider) {
  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
      <StarBackground />
      <Header />
      <ToasterProvider />
      <main className='relative z-40'>
        {children}
      </main>
    </ThemeProvider>
  );
}