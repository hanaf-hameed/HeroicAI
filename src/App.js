import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import CloudProvider from './components/CloudProvider/CloudProvider';
import Features from './components/Features/Features';
import Tokenomics from './components/Tokenomics/Tokenomics';
import HowToBuy from './components/HowToBuy/HowToBuy';
import Usecases from './components/Usecases/Usecases';
import RoadMap from './components/RoadMap/RoadMap';
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
