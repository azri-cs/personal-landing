import React from 'react';
import RotatingWords from './RotatingWords';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="relative text-white min-h-screen flex items-center justify-center z-10">
            <Image
                src="/img/stars-background.jpeg"
                alt="Stars background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <div className="text-center relative z-20">
                <h1 className="text-5xl font-bold mb-4">Azri Adam</h1>
                <RotatingWords />
            </div>
        </header>
    );
}