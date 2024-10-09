import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 text-white py-4">
            <div className="flex flex-col items-center justify-center mx-auto px-4">
                <h1 className="text-3xl font-bold">Azri Adam</h1>
                <p className="text-xl">Full-Stack Web Developer</p>
            </div>
        </header>
    );
}

export default Header;