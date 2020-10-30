import React from 'react';

import Header from './components/Header/Header';
import StartingSection from './components/StartingSection/StartingSection';
import StepsSection from './components/StepsSection/StepsSection';
import OverviewSection from './components/OverviewSection/OverviewSection';
import ExploreSection from './components/ExploreSection/ExploreSection';
import DiscoverySection from './components/DiscoverSection/DiscoverySection';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <StartingSection/>
      <StepsSection/>
      <OverviewSection/>
      <ExploreSection/>
      <DiscoverySection/>
      <Footer/>
    </div>
  );
}

export default App;
