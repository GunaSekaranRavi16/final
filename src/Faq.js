import React, { useState } from 'react';
import './Faq.css'; // Make sure to include this CSS file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What premium skills will I learn in this CapCut course?', answer: 'You will learn advanced techniques, including color grading, masking, keyframing, and adding animations and effects.' },
    { question: 'Is prior video editing experience required for this premium course?', answer: 'No, this course is designed to take your interest to the next level, making it suitable for both beginners and those with some experience.' },
    { question: 'Who is the mentor?', answer: 'He is M. Yogaram Vignesh, owner of CC MEDIA, a video marketing agency based out of Chennai.' },
    { question: 'For whom is this course suitable?', answer: 'Business owners, women looking for work-from-home opportunities, students looking to make part-time money, content creators, and those who have a deep interest in video editing.' },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <h3 className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question} 
              {/* Add the triangle icon that toggles direction */}
              <span className="faq-icon">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </h3>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
