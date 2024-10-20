import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Summary from './Summary';
import Skills from './Skills';
import Career from './Career';

function App() {
    const [currentSection, setCurrentSection] = useState(0);
    const sections = useRef([]);
    const totalSections = 4;

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const direction = event.deltaY > 0 ? 1 : -1;
            setCurrentSection((prev) => Math.max(0, Math.min(prev + direction, totalSections - 1)));
        };

        const handleKeyDown = (event) => {
            if (event.key === 'ArrowDown') {
                setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
            } else if (event.key === 'ArrowUp') {
                setCurrentSection((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        sections.current[currentSection]?.scrollIntoView({ behavior: 'smooth' });
    }, [currentSection]);

    return (
        <div className="min-h-screen bg-gray-100">
            <div ref={(el) => (sections.current[0] = el)}>
                <Header />
            </div>
            <main className="container mx-auto px-4 py-8">
                <div ref={(el) => (sections.current[1] = el)}>
                    <Summary />
                </div>
                <div ref={(el) => (sections.current[2] = el)}>
                    <Skills />
                </div>
                <div ref={(el) => (sections.current[3] = el)}>
                    <Career />
                </div>
            </main>
        </div>
    );
}

export default App;