import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Skills from './Skills';
import Career from './Career';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Summary />
                <Skills />
                <Career />
            </main>
        </div>
    );
}

export default App;