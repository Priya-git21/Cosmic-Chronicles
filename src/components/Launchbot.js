import React, { useEffect, useState } from 'react';
import { IoMdRocket } from 'react-icons/io';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Launchbot.css';

function Launchbot() {
  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
      .then((response) => response.json())
      .then((data) => setLaunchData(data.result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const renderTimelineElements = () => {
    if (!Array.isArray(launchData) || launchData.length === 0) {
      console.error('Invalid launchData:', launchData);
      return null;
    }

    return launchData.map((element) => (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{
          background: "rgba(0, 0, 0, 0.2)",
          color: '#fff',
          borderLeft: "1px solid white",
          borderBottom: "3px solid white",
          boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 1.5)"
        }}
        key={element.id}
        date={<h1 className="font" style={{ color: 'white' }}>{element.date_str}</h1>}
        iconStyle={{ background: 'black',fontSize :"30px" }}
        icon={<IoMdRocket color='white' />}
      >
        <div >
          <h6 className='vertical-timeline-element-title, font'>{element.name}</h6>
          <p className='vertical-timeline-element-subtitle'>
            <p>
              <ul className="custom-list">
                <li><span className="custom-bold-text">Provider:</span> {element.provider.name}</li>
                <li><span className="custom-bold-text">Vehicle:</span> {element.vehicle.name}</li>
                <li><span className="custom-bold-text">Launch Pad:</span> {element.pad.location.statename}, {element.pad.location.country}</li>
                <li><span className="custom-bold-text">Date:</span> {element.est_date.day} {element.est_date.month}, {element.est_date.year}</li>
                <li><span className="custom-bold-text">Mission:</span> {element.missions[0]?.name}</li>
                <li><span className="custom-bold-text">Launch Description:</span> {element.launch_description}</li>
              </ul>
            </p>

          </p>
        </div>
      </VerticalTimelineElement>
    ));
  };

  return (
    <div className="container my-3">
      <h1 className="font">Satellite Launch Bot</h1>
      <VerticalTimeline className="custom-timeline">
        {renderTimelineElements()}
      </VerticalTimeline>
    </div>
  );
}

export default Launchbot;
