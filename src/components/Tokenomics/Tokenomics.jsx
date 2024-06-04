import React from 'react'
import tokenPC from "../../assets/Tokenomicschart1.svg"
import tokenMobile from "../../assets/Tokenomicschartmobile1.svg"
import halfBar from "../../assets/sideHalfBar.png"
import purpleBar from "../../assets/Purplebar.png"
import planet from "../../assets/Planettwo.svg"
import box from "../../assets/Box.svg"
import "./Tokenomics.css"
 
function Tokenomics() {
  return (
    <section id='Tokenomics'>
 
        <div className='token-text-overlap'>
          <p className='token-overlap-t-1'>Details</p>
          <p className='token-overlap-t-2'>Tokenomics</p>
          <p className='overlap-token-text'>
        Explore the potential of the $HAI token to unlock exclusive features and ensure secure access to the full capabilities of Heroic AI.
        </p>
        </div>
        <img className='purple-bar' src={purpleBar} />
        <img className='half-bar' src={halfBar} />
        <img className='box' src={box} />
        <img className='planet' src={planet} />
        <img src={tokenMobile} className='tokenMobile'/>
        <img src={tokenPC} className='tokenPC'/>
        
     

    </section>
  )
}

export default Tokenomics