import React from 'react';
import waveFour from '../../assets/Wavefour.svg';
import spiral from '../../assets/Glassthree.png';
import findMore from '../../assets/findmore.svg';
import coin from '../../assets/currency.svg';
import webCreate from '../../assets/webCreation.svg';
import nodeSetup from '../../assets/nodesetup.svg';
import Optimize from '../../assets/optimization.svg';
import perl from "../../assets/Glassfour.png"
import "./Usecases.css"

function Usecases() {
  return (
    <section id='use-case'>
      <div className='use-text-overlap'>
        <p className='use-overlap-t-1'>Scenarios</p>
        <p className='use-overlap-t-2'>Use Cases</p>
        <p className='overlap-use-text'>
          Heroic AI revolutionizes cloud management, offering versatile
          solutions for a wide range of users. Explore practical use cases
          below:
        </p>
      </div>
      <div className='use-cases-container'>
        <div className='first-half'>
          <div className='use-case'>
            <img src={coin} className='use-case-img' />
            <div className='use-case-text'>
              <p className='use-heading'>Effortless Cloud Deployment</p>
              <p className='use-text'>
                Easily deploy your applications with Heroic AI, simplifying the
                process of launching and managing your cloud-based services.
              </p>
              <div className='find-more-container'>
                <p>Find out more</p>
                <img src={findMore}/>
              </div>
            </div>
          </div>
          <div className='f-line'></div>
          <div className='use-case'>
            <img src={webCreate} className='use-case-img' />
            <div className='use-case-text'>
              <p className='use-heading'>Website Creation and Management</p>
              <p className='use-text'>
                Design your customize website and seamlessly purchase and manage
                hosting and domain services directly through Heroic AI.
              </p>
              <div className='find-more-container'>
                <p>Find out more</p>
                <img src={findMore}/>
              </div>
            </div>
          </div>
        </div>
        <div className='perl'></div>
        <img src={perl} className='perl-img'/>
        <div className='h-lines'>
          <div className='h-line'></div>
          <div className='h-line'></div>
        </div>
        <div className='first-half'>
          <div className='use-case'>
            <img src={nodeSetup} className='use-case-img' />
            <div className='use-case-text'>
              <p className='use-heading'>Blockchain Node Setup</p>
              <p className='use-text'>
                Utilize Heroic AI to effortlessly set up and manage blockchain
                nodes, simplifying the process for your blockchain projects
              </p>
              <div className='find-more-container'>
                <p>Find out more</p>
                <img src={findMore}/>
              </div>
            </div>
          </div>
          <div className='f-line'></div>
          <div className='use-case'>
            <img src={Optimize} className='use-case-img' />
            <div className='use-case-text'>
              <p className='use-heading'>Crypto Mining Optimization</p>
              <p className='use-text'>
                Boost mining operations with Heroic AI's cloud computing
                resources, maximizing profitability and efficiency for you as a
                crypto miner.
              </p>
              <div className='find-more-container'>
                <p>Find out more</p>
                <img src={findMore}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Usecases;
