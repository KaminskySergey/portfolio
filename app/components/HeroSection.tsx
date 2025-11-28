'use client'
import React from 'react';
import { Container } from './ui/Container';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
export default function HeroSection() {
    const t = useTranslations('hero')
    return (
        <section className='h-[90vh] flex items-center justify-center overflow-hidden' id='hero'>
            <Container className='text-black dark:text-white  flex flex-col items-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-center'>
                    <span className='opacity-0 animate-fade-in'>{t('greeting')}</span>
                    <span>{` `}</span>
                    <span className='opacity-0 animate-fade-in-delay-2 text-blue-500'>{t('name')}</span>
                </h1>

                <p className='mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-400 opacity-0 animate-fade-in-delay-4 max-w-3xl text-center'>
                    {/* I’m a Fullstack Developer based in Darmstadt, Germany, creating modern web apps with React, NextJS, and NestJS.
                    I love clean code, scalable architecture, and building smooth user experiences. */}
                    {t('description')}
                </p>
                <Link href={'#projects'} className="btn-gradient mt-6">
                    {t('button')}
                </Link>
            </Container>

        </section>
    );
}