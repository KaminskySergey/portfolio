'use client';

import React from 'react';

interface ITitleSection {
    title: string
    subTitle: string
}

export default function TitleSection({ title, subTitle }: ITitleSection) {
    return (
        <h2 className='text-black dark:text-white text-3xl md:text-4xl font-bold'>
            {title} <span className='text-blue-500'>{subTitle}</span>
        </h2>
    );
}