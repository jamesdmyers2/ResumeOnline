import React from 'react';
import { Header } from './components/Resume/Header';
import { ProfExperience } from './components/Resume/ProfExperience';
import { Contact } from './components/Resume/Contact';
import { About } from './components/Resume/About';
import { Testimonials } from './components/Resume/Testimonials';
import { Portfolio } from './components/Resume/Portfolio';

function App() {

    return (
        <div>

            <Header />
            <About />
            <ProfExperience />
            <Portfolio />
            <Testimonials />
            <Contact />

        </div>
    );

}

export default App;