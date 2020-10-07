import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import TimeTravelSection from './Components/TimeTravelSection';
import Footer from './Components/Footer';
import PlaygroundSection from './Components/PlaygroundSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <TimeTravelSection />
      <PlaygroundSection />
      <Footer />
    </div>
  );
}

export default App;