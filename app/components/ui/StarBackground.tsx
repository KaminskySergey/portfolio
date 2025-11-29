'use client';

import { IMeteor, IStar } from '@/app/types/stars';
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes"
export default function StarBackground() {
    const [stars, setStars] = useState<IStar[]>([]);
    const [meteors, setMeteors] = useState<IMeteor[]>([]);
    const { resolvedTheme } = useTheme();

    // Функции объявляем **до useEffect**
    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars: IStar[] = [];

        for (let index = 0; index < numberOfStars; index++) {
            newStars.push({
                id: Math.random(),
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 6;
        const newMeteors: IMeteor[] = [];

        for (let index = 0; index < numberOfMeteors; index++) {
            newMeteors.push({
                id: Math.random(),
                size: Math.random() * 1.5 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() + 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        generateStars();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isDark = resolvedTheme === "dark";
    return (
        <div className='fixed inset-0 bg-gray-200 dark:bg-black overflow-hidden pointer-events-none z-0'>
            {isDark && (<>
                {
                    stars.map((star) => (
                        <div key={star.id} className='star animate-pulse-subtle' style={{
                            width: star.size + "px",
                            height: star.size + "px",
                            left: star.x + "%",
                            top: star.y + "%",
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s",

                        }}>

                        </div>
                    ))
                }
                {
                    meteors.map((meteor) => (
                        <div key={meteor.id} className='meteor animate-meteor' style={{
                            width: meteor.size * 50 + "px",
                            height: meteor.size * 1.5 + "px",
                            left: meteor.x + "%",
                            top: meteor.y + "%",
                            animationDelay: meteor.delay as unknown as string,
                            animationDuration: meteor.animationDuration + "s",

                        }}>

                        </div>
                    ))
                }
            </>)}
        </div>
    );
}