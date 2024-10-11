import React from 'react';
import './VideoSection.css';

const videos = [
  {
    id: 1,
    src: 'https://youtube.com/embed/rE0bu0pz6Mw?si=l1mOHheD7jjw8dow',
    title: 'Guerrilla Marketing',
  },
  {
    id: 2,
    src: 'https://youtube.com/embed/HLzTGai8DSg?si=6mDeNTGReyoFN4Qp',
    title: 'MRF Ad',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/mpUBAB-topY',
    title: 'Character Development',
  },
  {
    id: 4,
    src: 'https://youtube.com/embed/_JGXg9xJc80?si=ErviERgwAfqVv6-g',
    title: 'Business Growth',
  },
];

const VideoSection = () => {
  return (
    <div className="video-section">
      <h2>Want to Create Videos That <span className='wow'>Wowww !!</span></h2> 
      <div className="videos-container">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <iframe
              width="240"
              height="500"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
