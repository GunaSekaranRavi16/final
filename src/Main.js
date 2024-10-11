import React from 'react';
import './Main.css'; // Import your CSS file for styling
import logo from './logo.jpg';
import capcut from './Capcut_course_black.jpg';
import { Link } from 'react-router-dom';

const courses = [
  {
    img: capcut,
    title: 'CapCut Crash Course- Edit Like a Pro in 2Hrs',
    instructor: 'Yogaram Vignesh, Video Editor & CEO',
    rating: '4.7',
    reviews: '405,894',
    price: '₹401',
    originalPrice: '₹1,499',
    isBestSeller: true,
  },
];

function Main() {
  return (
    <div className="app">
      <header className="course-header">
        <div className="course-logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>

      <main className="course-cards">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p className="course-offer">LIMITED &#9200; OFFER !!</p>
            <p className="course-price">
              {course.price} <span className="course-original-price">{course.originalPrice}</span>
            </p>
            <p className="course-gst">(including 18% GST)</p>
            <a href="https://club.waytofortuneclub.in/cdp/i6aSJpebGu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button id="course-buy">Buy Now !!</button></a>
            <Link target='_blank'  to='/capcut_course' className="course-buy_now"> {/* Changed to '/app' */}
              Learn More <span>&#8600;</span>
            </Link>
          </div>
        ))}
      </main>

      <footer className="course-footer">
        <p>&copy; 2024 ccmedia</p>
      </footer>
    </div>
  );
}

export default Main;
