import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './News.css';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      loading: false,
      width: 4, // Default value for device width greater than 800px
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res.json())
      .then((data) => this.setState({ news: data }));
    this.setState({ loading: false });

    // Call the function to update width based on screen width
    this.updateWidth();
    // Add an event listener for the resize event using an arrow function
    window.addEventListener('resize', () => this.updateWidth());
  }

  componentWillUnmount() {
    // Clean up the event listener on component unmount
    window.removeEventListener('resize', () => this.updateWidth());
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the width has changed and update it accordingly
    if (prevState.width !== this.state.width) {
      this.updateWidth();
    }
  }

  calculateTimeDifference(updatedAt) {
    const updatedAtDate = new Date(updatedAt);
    const currentDate = new Date();
    const day = currentDate - updatedAtDate; // Time difference in milliseconds
  
    const days = Math.floor(day / (1000 * 60 * 60 * 24));
    const hours = Math.floor((day % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((day % (1000 * 60 * 60)) / (1000 * 60));
  
    return { days, hours, minutes };
  }
  

  // Function to update width based on screen width
  updateWidth() {
    const screenWidth = window.innerWidth;
    let newWidth = 4; // Default value for device width greater than 800px

    if (screenWidth <= 1000 && screenWidth >= 780) {
      newWidth = 6; // Set to 6 for width between 800px and 500px
    } else if (screenWidth < 780) {
      newWidth = 8; // Set to 8 for width less than 500px
    }

    this.setState({ width: newWidth });
  }

  render() {
    const { news, loading, width } = this.state;

    return (
      <div className="container my-3">
        <h1 className="font">Latest Updates</h1>
        {loading && (
          <div  style={{ color: "white", fontSize:"20px" }}>Loading...</div>
        )}

        <div className="row">
          {news?.map((element) => {
            const { days, hours, minutes } = this.calculateTimeDifference(element.updatedAt);

            return (
              <div className={`col-md-${width} border-white mobile`} key={element.url}>
                <NewsItem
                  className="NewsItem"
                  title={element.title}
                  description={element.summary}
                  images={element.imageUrl}
                  readMore={element.url}
                  timeDifference={{ days, hours, minutes }}
                  isBlog="false"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
