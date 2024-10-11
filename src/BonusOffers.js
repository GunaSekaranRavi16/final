// BonusOffers.js
import React from 'react';
import './BonusOffers.css'
import Animated from '../src/immg/Animated Assets.png';
import sfx from '../src/immg/SFX Mockup.png';
import png from '../src/immg/PNG Mockup.png';
import overlay from '../src/immg/Overlays.png';


const BonusOffers = () => {
  return (
    <section className="bonus-offers">
      <h2>But Wait!!! I've Got Something More For You...</h2>
      <br></br>
      <p className='bon'>
      Get you Assets worth of RS 3000 for <h1>FREE!!</h1>
      </p>
      <div className="bonuses">
        <img src={Animated} height="auto" width="50%" className='b1'/>
        <img src={sfx} height="auto" width="50%" className='b1' />
        <img src={png} height="auto" width="50%"className='b1' />
        <br></br>
        <img src={overlay} height="auto" width="50%"className='b1' />
      </div>
    </section>
  );
};

export default BonusOffers;
