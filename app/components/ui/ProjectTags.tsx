'use client';

import React from 'react';

interface IProjectTags {
    tags: string[]
}

export default function ProjectTags({ tags }: IProjectTags) {
    return (
        <ul className='flex flex-wrap gap-2 h-[60px]'>
            {
                tags.map((el) => (
                    <li key={el}>
                        <span className='py-1 px-2 inline-block text-xs font-medium border border-gray-600 rounded-full'>{el}</span>
                    </li>
                ))
            }
        </ul>
    );
}