import React, { useState, useEffect } from 'react';
import styles from '../styles/header.module.css';

const rotatingWords = [
    'Full-Stack Web Developer',
    'Jack-of-all-trades',
    'Versatile Contributor',
    'Problem Solver',
    'Client-Focused',
    'Collaborative Leader',
    'Technical Mentor'
];

export default function RotatingWords() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) =>
                    (prevIndex + 1) % rotatingWords.length
                );
                setIsGlitching(false);
            }, 100);
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p
            className={`text-2xl h-8 text-cyan-600 dark:text-cyan-400 ${isGlitching ? styles.glitch : ''}`}
            data-text={rotatingWords[currentWordIndex]}
        >
            {rotatingWords[currentWordIndex]}
        </p>
    );
}