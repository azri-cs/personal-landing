import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Career from './components/Career';

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