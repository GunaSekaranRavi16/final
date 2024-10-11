// Testimonials.js
import React from 'react';
import '../src/test.css';
import student from '../src/immg/students.png'
import content_crt from '../src/immg/content.png'
import teacher from '../src/immg/online-learning.png'
import gd from '../src/immg/graphic-designer.png'
import wp from '../src/immg/engineer.png'


const Testimonials = () => {
  const questions = [
    { text: 'Are you an aspiring content creator looking to boost your video editing skills with CapCut? ' },
    { text: 'Do you struggle to achieve that polished, professional look in your videos?  ' },
    { text: 'Searching for a beginner-friendly course in Tamil that covers everything from basic transitions to advanced editing effects?' },
  ];
  return (
    <section className="mastery-course">
      <h2>Who Should Join This <span className='master'>Masterclass</span>?</h2>
      <div className="course-categories">
        <div className="category">
      <img src={student}/> 
          <p>Business Owner</p>
        </div >
        <div className="category">
        <img decoding="async" width="300" height="300" 
        src={wp}/>
          <p>Working Professionals</p>
        </div>
        <div className="category">
        <img loading="lazy" decoding="async" width="243" height="223" 
        src={teacher}/>
          <p>Content creators/Digital Coaches</p>
        </div>
        <div className="category">
        <img loading="lazy" decoding="async" width="300" height="300" 
        src={gd}/>
          <p>person look for 
            full-time/freelance
          </p>
        </div>
        <div className="category" >
        <img loading="lazy" decoding="async" width="300" height="300" 
        src={content_crt}/>
          <p>interest in making video</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
