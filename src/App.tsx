import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import TimeTravelSection from './Components/TimeTravelSection';
import Footer from './Components/Footer';
import PlaygroundSection from './Components/PlaygroundSection';
import ToggleSection from './Components/ToggleSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <TimeTravelSection />
      <ToggleSection />
      <PlaygroundSection />
      <Footer />
    </div>
  );
}

export default App;