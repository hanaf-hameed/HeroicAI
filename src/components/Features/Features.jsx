import React from 'react';
import ai from '../../assets/AI.svg';
import customWeb from '../../assets/customWeb.svg';
import fileMark from '../../assets/fileMark.svg';
import openai from '../../assets/openai.svg';
import waveTwo from '../../assets/Wavetwo.svg';
import waveThree from '../../assets/Wavethree.png';
import cloudRing from '../../assets/cloudRing.png';
import glassStar from '../../assets/Glassstar.png';
import cloudSpiral from '../../assets/CloudSpiral.png';
import "./Features.css"

const mainFeatures = [
  {
    imgSrc: customWeb,
    heading: 'Custom Website Creation',
    text: "Craft your website with ease using Heroic AI. Answer a few questions, and customize your site's colors, fonts, and more, to suit your preferences.",
  },
  {
    imgSrc: fileMark,
    heading: 'One-Stop Domain Hub',
    text: 'Navigate domains effortlessly with Heroic AI. From checking availability to registrations, manage it all under one roof.',
  },
  {
    imgSrc: ai,
    heading: 'Hosting Made Easy',
    text: "Host your website hassle-free with Heroic AI. Whether it's VPS, shared, or dedicated hosting, everything you need is right here.",
  },
  {
    imgSrc: openai,
    heading: 'Remote Access Redefined',
    text: "Enhance your remote workflow with Heroic AI's RDP services. From hosting to multi-user setups, effortlessly manage remote access.",
  },
];

function Features() {
  return (
    <section id='Feature'>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div className='feature-text-overlap'>
          <p className='feature-overlap-t-1'>Attributes</p>
          <p className='feature-overlap-t-2'>Features</p>
        </div>
        <p className='overlap-b-text'>
          Maximize Cloud Potential, Minimize Complexity
        </p>
      </div>
      <div className='main-feature-group'>
        <img className='cloud-ring' src={cloudRing} alt='Cloud Ring' />
        <img className='cloud-spiral' src={cloudSpiral} alt='Cloud Spiral' />

        {mainFeatures.map((feature, index) => (
          <div className='main-feature' key={index}>
            <img
              src={feature.imgSrc}
              className='main-f-img'
              alt={feature.heading}
            />
            <p className='main-heading'>{feature.heading}</p>
            <p className='main-text'>{feature.text}</p>
          </div>
        ))}
      </div>
      <div className='sub-feature-group'>
        <img className='glass-star' src={glassStar} alt='Glass Star' />

        <p className='sub-feature'>
          <span className='blue'>Cloud Infrastructure Mastery</span> Take charge
          of your cloud setup with Heroic AI. Effortlessly deploy blockchain
          nodes, manage storage, CDN, and more.
        </p>
        <img className='waveTwo' src={waveTwo} alt='Wave Two' />
        <img className='waveThree' src={waveThree} alt='Wave Three' />
        <p className='sub-feature'>
          <span className='red'>Streamlined Container Deployment</span> Deploy
          containers seamlessly with Heroic AI. Whether it's Kubernetes or
          serverless, scale your applications effortlessly.
        </p>
      </div>
    </section>
  );
}

export default Features;
