'use client';

import React from 'react';
import { Container } from './ui/Container';
import TitleSection from './ui/TitleSection';
import { CodeXml, Download, MonitorCog, UserRound } from 'lucide-react'
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export default function AboutMeSection() {
    useScrollAnimation();
    
    return (
        <section id='about'   className='py-4 md:py-24 '>
            <Container className='text-black dark:text-white max-w-6xl flex flex-col items-center gap-6 md:gap-12'>

                <TitleSection title='About' subTitle='Me' />
                <div className='flex flex-col md:flex-row  gap-6 ' >
                    {/* left cont */}
                    <div className='flex flex-col gap-6 md:w-1/2 text-center items-center p-3 animate-on-scroll opacity-0' data-anim="slide-left">
                        <h3 className='text-xl md:text-2xl font-semibold'>Passionate Fullstack Developer</h3>
                        <div className=" text-gray-800 dark:text-gray-200 space-y-6  font-medium text-base">
                            <p>
                                I&apos;m Fullstack Developer with over 3 years of experience
                                building modern web applications using React, NextJS, and NestJS. I love
                                writing clean, scalable code and creating seamless user experiences.
                            </p>
                            <p>
                                During my career, I have worked on both frontend and backend projects,
                                collaborating with designers and other developers to deliver high-quality
                                products. I&apos;m passionate about learning new technologies and improving
                                processes in every project I&apos;m part of.
                            </p>
                        </div>
                        <div className='flex gap-6 mt-4'>
                            <Link
                                href="#contact"
                                className="relative inline-block font-semibold text-black dark:text-white rounded-full border-2 border-blue-700 px-6 py-3 
             overflow-hidden transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:scale-105"
                            >
                                <span className="relative z-10 ">Get in Touch</span>

                                <span className="absolute inset-0 bg-blue-700 opacity-10 rounded-full scale-0 hover:scale-100 transition-transform duration-500"></span>
                            </Link>
                            <Link href={'/Lebenslauf.pdf'} download className="relative inline-block font-semibold text-white font-sans rounded-full border-2 border-blue-700 px-6 py-3 overflow-hidden group"
                            >
                                <span className="absolute left-[-5px] right-[-5px] bottom-[-5px] h-[111%] bg-blue-700 transition-all duration-300 ease-in-out group-hover:h-[11%]"></span>

                                <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-gray-800 flex items-center gap-2">
                                    <Download /> Download CV
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* right cont */}
                    <div className='flex flex-col md:w-1/2 gap-6 text-center animate-on-scroll opacity-0' data-anim="slide-right">
                        <ul className="grid grid-cols-1  gap-4 text-gray-200 font-medium" >
                            <li>
                                <div className='flex gap-4 bg-gray-900 rounded-2xl p-4 transition-transform duration-300 ease-in-out hover:scale-105'>
                                    <div>
                                        <div className='bg-gray-800 rounded-full p-3 flex items-center justify-center'>
                                            <CodeXml className='text-blue-500 w-6 h-6' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-2'>
                                        <h4 className='font-semibold text-lg'>Fullstack Developer</h4>
                                        <p className='text-start font-normal text-base'>I build responsive websites and web applications using modern technologies, with a focus on UX and performance.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 bg-gray-900 rounded-2xl p-4 transition-transform duration-300 ease-in-out hover:scale-105'>
                                    <div>
                                        <div className='bg-gray-800 rounded-full p-3 flex items-center justify-center'>
                                            <UserRound className='text-blue-500 w-6 h-6' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-2'>
                                        <h4 className='font-semibold text-lg'>Team Player / Collaborator</h4>
                                        <p className='text-start font-normal text-base'>I work effectively in teams, participate in code reviews, help optimize workflows, and contribute to building high-quality products together.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 bg-gray-900 rounded-2xl p-4 transition-transform duration-300 ease-in-out hover:scale-105'>
                                    <div>
                                        <div className='bg-gray-800 rounded-full p-3 flex items-center justify-center'>
                                            <MonitorCog className='text-blue-500 w-6 h-6' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-2'>
                                        <h4 className='font-semibold text-lg'>UI & UX Enthusiast</h4>
                                        <p className='text-start font-normal text-base'>I create intuitive interfaces and smooth user interactions, focusing on usability and accessibility.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}