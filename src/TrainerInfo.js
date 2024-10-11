// TrainerInfo.js
import React from 'react';
import vignesh from '../src/immg/Vignesh.jpg'

const TrainerInfo = () => {
  return (
    <section className="trainer-info">
      <h2 className='t1' >About Your Instructor</h2>
      <br></br>
      <br></br>
      <img className="profile" src={vignesh}   data-aos-duration="1000"/>
      <br></br>
      <br></br>
      <div className="trainer-details" >
        <h3 >Yogaram Vignesh M</h3>
        <p >Video Editor | Content Marketing Expert |
Agency Owner </p>
      <br></br>
        {/* <p>Graphic & Web Desig</p> */}
        <a href="https://club.waytofortuneclub.in/cdp/i6aSJpebGu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><button className="enroll-button01"><h2>Enroll Now to Unlock Your Potential!</h2>
        
        </button></a>
        <br></br>
      <br></br>
        <h2 className='dis' >Claim Your FREE Bonuses Worth ₹2,500!</h2>
      </div>
      {/* <div className="workshop-banner">
        
      </div> */}
    </section>
  );
};

export default TrainerInfo;
