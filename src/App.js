import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CloudProvider from './components/CloudProvider';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Usecases from './components/Usecases';
import RoadMap from './components/RoadMap';
import React from 'react';

function App() {
  return (
    <React.Fragment>
       <Navbar/>  
      <Home/> 
     <Features/>
     <Tokenomics/>
     <Usecases/>
     <HowToBuy/>
     <CloudProvider/>
     <RoadMap/>
     <Footer/>
    </React.Fragment>
  );
}

export default App;
