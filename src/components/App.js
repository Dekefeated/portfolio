import React from 'react';
import Navigation from './Navigation';
import Header from './header';
import Footer from './Footer';
import Projects from './sections/Projects';
import Commissions from './sections/Commissions';
import Work from './sections/Work';
import headerBG from './images/bg_graphic.svg'

function App() {
  return (
    <div 
      className="bg-primary-gray h-full" 
      style={{ 
        backgroundImage: `url(${headerBG})`, 
        backgroundPosition: "center top",
        backgroundRepeat: "repeat-y",
       }}
    >
        <Navigation />
        <Header />

       
        <Projects />
        <Commissions />
        <Work />
        <Footer />
    </div>
  );
}

export default App;
