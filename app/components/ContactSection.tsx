'use client';

import React from 'react';
import { Container } from './ui/Container';
import TitleSection from './ui/TitleSection';

import ContactInformation from './ui/ContactInformation';
import ContactForm from './ui/ContactForm';
import { useTranslations } from 'next-intl';
export default function ContactSection() {
    const t = useTranslations('contact')
    return (
        <section id='contact' className="py-24">
            <Container className='flex flex-col items-center gap-6 md:gap-12'>
                <div className='flex flex-col gap-4 items-center'>
                    <TitleSection title={t('title')} subTitle={t('subtitle')} />
                    <p className="text-center text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto mb-8">
                    {t('description')}
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-8 md:gap-4 w-full'>
                    {/* contact info */}
                    <div className='w-full md:w-1/2'>
                        <ContactInformation />
                        
                    </div>
                    <div className='w-full md:w-1/2'>
                         <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
}
