import React from 'react';
import  BonusOffers from '../src/BonusOffers';
import '../src/course.css'; // Import your CSS file for styling
import capcut from '../src/immg/Software_Box_Mockup-Capcut.png';
function CapCutCourseSection() {
  const modules = [
    { title: 'Getting started with Capcut', description: '' },
    { title: 'Understanding the interface and Importing Media', description: '' },
    { title: 'Enhancing and Adding elements to your Videos', description: '' },
    { title: 'Pro Tips to Polish & Perfect Your Videos!', description: '' },
    { title: 'How to Monetize Your Videos Like a Pro!', description: '' },
    
  ];

  return (
    <div>
    <section className="capcut-course">
      <img src={capcut} className='cc'></img>
      <h2 className='t1' >What’s Inside the <span>Course</span>?</h2>
      <h4 >Your Journey to become a video editing Expert Starts Here</h4>
      <div className='arr'>
      {/* <img src={capcut} height='300' width='500' className='capcut'/> */}
      <div className="modules-container" >
        {modules.map((module, index) => (
          <div className="module-card" key={index}>
            <h1>Module #{index + 1}</h1>
            <p>{module.title}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
    <BonusOffers/>
    </div>
  );
}

export default CapCutCourseSection;