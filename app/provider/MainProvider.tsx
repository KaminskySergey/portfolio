'use client';

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import StarBackground from '../components/ui/StarBackground';
import Header from '../components/ui/Header';
import ToasterProvider from './ToasterProvider';
import Footer from '../components/ui/Footer';
interface IMainProvider {
  children: ReactNode
}

export default function MainProvider({ children }: IMainProvider) {
  return (


      <ThemeProvider attribute="class" defaultTheme='dark' enableSystem={false}>
        <StarBackground />
        <Header />
        <ToasterProvider />
        <main className='relative z-40'>
          {children}
        </main>
        <Footer />
      </ThemeProvider>

  );
}