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
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-teal-600">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index}
                         className="flex items-center bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">
                        <span className="text-2xl mr-2 text-cyan-600">{skill.icon}</span>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;