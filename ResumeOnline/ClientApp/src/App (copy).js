import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { ProfExperience } from './components/Resume/ProfExperience';
import { TechSkills } from './components/Resume/TechSkills';
import { ProfSummary } from './components/Resume/ProfSummary';
import { Contact } from './components/Resume/Contact';
import { Education } from './components/Resume/Education';

function App() {

    return (
        <div>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/prof-summary' component={ProfSummary} />
                <Route path='/prof-experience' component={ProfExperience} />
                <Route path='/tech-skills' component={TechSkills} />
                <Route path='/contact' component={Contact} />
                <Route path='/education' component={Education} />

            </Layout>

        </div>
    );

}

export default App;