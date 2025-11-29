'use client';

import React, { useState } from 'react';
import { Container } from './ui/Container';
import TitleSection from './ui/TitleSection';
import { skillCategories, skillItems } from '../const/skills';
import { capitalizeFirstLetter, cn } from '../utils/utils';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function SkillsSection() {
    const t = useTranslations('skills')
    const [activeCategory, setActiveCategory] = useState('all')
    useScrollAnimation()
    const handleChangeCategory = (category: string) => {
        setActiveCategory(category)
    }
    const filteredSkills = skillItems.filter(el => activeCategory === 'all' || activeCategory === el.category)
    return (
        <section id='skills' className='py-24'>
            <Container className='text-black dark:text-white max-w-6xl flex flex-col items-center gap-6 md:gap-12'>
                <TitleSection title={t('title')} subTitle={t('subtitle')} />
                <ul className='flex gap-3'>
                    {skillCategories.map((el, idx) => (
                        <li key={idx}>
                            <button
                                type="button"
                                onClick={() => handleChangeCategory(el)}
                                className={cn(
                                    'text-xs py-1 px-3 md:text-xl md:py-2 md:px-6 rounded-full font-semibold text-white cursor-pointer transition-all duration-300',
                                    'hover:scale-105 hover:bg-blue-500 hover:shadow-lg',
                                    'active:scale-95',
                                    {
                                        'bg-blue-700 shadow-md': activeCategory === el,
                                        'bg-gray-900': activeCategory !== el
                                    }
                                )}
                            >
                                {capitalizeFirstLetter(t(`categories.${el}`))}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className='grid grid-cols-1 gap-4 md:grid-cols-3 w-full animate-on-scroll opacity-0' data-anim="fade-in">
                    {filteredSkills.map((skill, idx) => (
                        <li key={idx}>
                            <div className="p-6 rounded-2xl bg-gray-900 shadow-lg border border-gray-800 hover:shadow-xl hover:scale-105 hover:border-gray-700 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-lg font-semibold text-white">{skill.name}</p>
                                    <span className="text-sm text-gray-400">{skill.level}%</span>
                                </div>

                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 rounded-full transition-all duration-700"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}

