'use client';

import React from 'react';
import { Container } from './ui/Container';
import TitleSection from './ui/TitleSection';
import Image from 'next/image';
import { projectsItems } from '../const/projects';
import ProjectTags from './ui/ProjectTags';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons/GitHubIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export default function ProjectsSection() {
    useScrollAnimation()
    return (
        <section id="projects" className="py-24 text-white">
            <Container className="flex flex-col items-center gap-10 max-w-6xl">
                <div className='flex flex-col gap-4 items-center'>
                    <TitleSection title='Featured' subTitle='Works' />
                    <p className="text-center text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto mb-8">
                        Here are some of my key projects, showcasing my skills in React, Next.js, Tailwind CSS, and TypeScript.
                        You can explore trending apps, web tools, and personal projects I built for learning and practice.
                    </p>
                </div>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'>
                    {
                        projectsItems.map((el, idx) => (
                            <li key={idx}   className="animate-on-scroll opacity-0"
                            data-anim="fade-in">
                                <div className='group border border-gray-800  flex flex-col gap-1 bg-gray-900 overflow-hidden rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'>
                                    <div className="relative w-full h-48 overflow-hidden">
                                        <Image
                                            src={`/works/${el.nameHref}.webp`}
                                            alt={el.name}
                                            fill
                                            sizes='48'
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full h-full bg-black/70  text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="max-h-full overflow-y-auto overflow-x-hidden scrollbar">
                                                <p className="text-base wrap-break-word">{el.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-6 flex flex-col gap-4'>
                                        <ProjectTags tags={el.tags} />

                                        <h4 className='font-semibold text-white text-2xl text-center'>{el.name}</h4>
                                        <div className="flex flex-wrap justify-center gap-4 mt-2">
                                            <Link
                                                href={el.link}
                                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition-all duration-300 hover:scale-105"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                <span>Website</span>
                                            </Link>

                                            <Link
                                                href={el.gitHub}
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-xl shadow-md transition-all duration-300 hover:scale-105"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <GitHubIcon size={20} />
                                                <span>GitHub</span>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <Link href="https://github.com/KaminskySergey" className="btn-gradient mt-6 flex gap-3 items-center">
                        <GitHubIcon size={32}/> View My GitHub
                    </Link>
                </div>
            </Container>
        </section>
    );
}