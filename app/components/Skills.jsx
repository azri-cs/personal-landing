import React from 'react';
import { FaLaravel, FaPhp, FaBootstrap, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiJquery, SiMysql } from 'react-icons/si';

function Skills() {
    const skills = [
        { name: 'Laravel', icon: <FaLaravel /> },
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'jQuery', icon: <SiJquery /> },
        { name: 'MySQL', icon: <SiMysql /> },
        /*{ name: 'Database', icon: <FaDatabase /> },*/
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 z-[8] relative">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold mb-12 text-teal-600 text-center">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index}
                             className="flex flex-col items-center bg-white p-6 rounded-lg shadow transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <span className="text-4xl mb-4 text-cyan-600">{skill.icon}</span>
                            <span className="text-lg font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;