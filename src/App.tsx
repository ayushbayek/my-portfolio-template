import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Chat,
  Particles
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <div className="section-background">
                <Particles />
                <div className="section-content">
                    <Main/>
                </div>
            </div>
            <div className="section-background">
                <Particles />
                <div className="section-content">
                    <Expertise/>
                </div>
            </div>
            <div className="section-background">
                <Particles />
                <div className="section-content">
                    <Timeline/>
                </div>
            </div>
            <div className="section-background">
                <Particles />
                <div className="section-content">
                    <Project/>
                </div>
            </div>
            <div className="section-background">
                <Particles />
                <div className="section-content">
                    <Chat/>
                </div>
            </div>
            <div className="section-background">
                <Particles />
                <div className="section-content">
                    <Contact/>
                </div>
            </div>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;