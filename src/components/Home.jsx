import React from 'react';
import waveOne from '../assets/Waveone.svg';
import logo from "../assets/Heroiclogo.png"
function Home() {
  return (
    <section id='Home'>
      <div>
        <div class='waveWrapper'>
          <div class='glow'></div>
          <img src={waveOne} className='waveOne' />
         
        </div>
        <div className='home-text-body'>
          <p className='heading'>Bridge Your <span className='c-ai'>Cloud and AI </span>Needs With Heroic AI</p>
          <p className='sub-text'>
            Welcome to Heroic AI, your one-stop destination for a myriad of
            services, including domain management, containerization, hosting,
            RDP solutions, Blockchain Node Deployment, and website development
            using AI bot. Embrace effortless cloud management and bid farewell
            to complexity.
          </p>
          <div className='home-btns'
          ><button className='telegram-btn whitepaper'>Telegram Bot<span className='message'>Coming soon</span></button>
          <button className='launchApp-btn whitepaper'>Launch App<span className='message'>Coming soon</span></button>
          </div>
        </div>
        </div>
      
        <img  src={logo} className='home-logo'/>
      
      
    </section>
  );
}

export default Home;
