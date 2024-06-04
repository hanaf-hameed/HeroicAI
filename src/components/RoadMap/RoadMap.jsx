import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import next from '../../assets/next.svg';
import prev from '../../assets/prev.svg';
import "./RoadMap.css"

function RoadMap() {
  const slides = [
    {
      stage: 'STAGE 1',
      content: [
        'Launch Heroic Al Telegram bot V1',
        'Establishment of the Heroic Al community',
        'Launch of $HAI token',
        'Community Collaboration',
        'Initiation of social media marketing campaign',
        'Release of Whitepaper V1',
      ],
    },
    {
      stage: 'STAGE 2',
      content: [
        'Launching Heroic Al beta DApp',
        'Addition of new features in Telegram bot',
        'Listing of $HAI on prominent platforms',
        'Enhancement of liquidity',
        'Introduction of tiered system',
        'Long-term onboarding of influencers',
      ],
    },
    {
      stage: 'STAGE 3',
      content: [
        'Official release of Heroic DApp & Telegram bot',
        'Publication of Whitepaper V2',
        'Introduction of revenue sharing for token holders',
        'Listing on centralized exchanges (CEX)',
        'Announcement of long-term vision for Heroic Al',
        'Expansion of partnerships',
      ],
    },
  ];

  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <section id='Roadmap'>
      <div className='road-text-overlap'>
        <p className='road-overlap-t-1'>Project</p>
        <p className='road-overlap-t-2'>Roadmap</p>
        <p className='overlap-road-text'>
          Our roadmap signifies our ongoing commitment to innovation, ensuring
          Heroic AI remains efficient, reliable, and user-centric throughout
          development.
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={breakpoints}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <p className='stage'>{slide.stage}</p>
            {slide.content.map((item, itemIndex) => (
              <div key={itemIndex} className='content'>
                <p className='content-text'>{item}</p>
                <div className='radio-btn'></div>
              </div>
            ))}
          </SwiperSlide>
        ))}
        <SwiperSlide className='coming-soon-container'>
          <p className='coming-soon'>Coming Soon</p>
        </SwiperSlide>
      </Swiper>
      <div className='road-btns'>
        <button className='swiper-button-prev' onClick={handlePrev}>
          <img src={prev} alt='prev' />
        </button>
        <button className='swiper-button-next' onClick={handleNext}>
          <img src={next} alt='next' />
        </button>
      </div>
    </section>
  );
}

export default RoadMap;
