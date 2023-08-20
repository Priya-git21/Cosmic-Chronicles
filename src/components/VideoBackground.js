import React from 'react';
import video from './bg.mp4'; 

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
