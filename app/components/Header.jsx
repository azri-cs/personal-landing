import React from 'react';
import RotatingWords from './RotatingWords';
import Image from "next/image";

export default function Header() {
    return (
        <header className="relative dark:text-white min-h-screen flex items-center justify-center">
            {/*<Image
                src="/img/stars-background.jpeg"
                alt="Stars background"
                quality={100}
                priority
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover"
                }} />*/}
            <div className="text-center relative">
                <h1 className="text-5xl font-bold mb-4">Azri Adam</h1>
                <RotatingWords />
            </div>
        </header>
    );
}