'use client';

import React from 'react';
import { Container } from './ui/Container';
import TitleSection from './ui/TitleSection';

import ContactInformation from './ui/ContactInformation';
import ContactForm from './ui/ContactForm';
export default function ContactSection() {
    return (
        <section id='contact' className="py-24">
            <Container className='flex flex-col items-center gap-6 md:gap-12'>
                <div className='flex flex-col gap-4 items-center'>
                    <TitleSection title='Get In' subTitle='Touch' />
                    <p className="text-center text-gray-400 font-medium max-w-2xl mx-auto mb-8">
                        Feel free to reach out for job opportunities, collaboration, or just to say hi!
                    </p>
                </div>
                <div className='flex gap-4 w-full'>
                    {/* contact info */}
                    <div className=' w-1/2'>
                        <ContactInformation />
                        
                    </div>
                    <div className='w-1/2'>
                         <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
}