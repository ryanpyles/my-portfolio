import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Dodecahedron } from './components/Dodecahedron';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import StackFXCreative from './components/StackFXCreative';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(null);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'aboutMe':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'blog':
        return <Blog />;
      case 'stackFXCreative':
        return <StackFXCreative />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} />
            <Dodecahedron onSectionChange={handleSectionChange} />
          </Canvas>
        );
    }
  };

  return <div className="App">{renderSection()}</div>;
}

export default App;
