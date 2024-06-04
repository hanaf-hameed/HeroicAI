import React from 'react';
import google from '../../assets/google.svg';
import aws from '../../assets/aws.svg';
import chain from '../../assets/chain.svg';
import star from '../../assets/cloudStar.png';
import square from '../../assets/cloudSquare.png';
import "./CloudProvider.css"

function CloudProvider() {
  return (
    <section id='cloud-provider'>
        <div className='cloud-text-overlap'>
        <p className='cloud-overlap-t-1'>Inspired by</p>
        <p className='cloud-overlap-t-2'>Cloud Providers</p>
      </div>
      
        
        <div cloud-imgs>
        <img className='cloud-square' src={square} />
      
      

      <div className='cloud-group'>
        <img className='cloud-img' src={google} alt='Google' />
        <img className='cloud-img' src={aws} alt='AWS' />
        <img className='cloud-img' src={chain} alt='Chain Stack' />
      </div>
      <img className='cloud-star' src={star} />
        </div>
    </section>
  );
}

export default CloudProvider;
