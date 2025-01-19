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
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
      const data = await response.json();

      this.setState({ news: data.results || data || [], loading: false });
      console.log('API Response:', data);
    } catch (error) {
      console.error('Failed to fetch news:', error);
      this.setState({ loading: false });
    }

    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  updateWidth() {
    const screenWidth = window.innerWidth;
    let newWidth = 4;

    if (screenWidth <= 1000 && screenWidth >= 780) {
      newWidth = 6;
    } else if (screenWidth < 780) {
      newWidth = 8;
    }

    this.setState({ width: newWidth });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
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

  render() {
    const { news, loading, width } = this.state;

    return (
      <div className="container my-3">
        <h1 className="font">Latest Updates</h1>
        {loading && (
          <div style={{ color: "white", fontSize: "20px" }}>Loading...</div>
        )}

        <div className="row">
          {Array.isArray(news) &&
            news.map((element) => {
              const { days, hours, minutes } = this.calculateTimeDifference(element.updated_at);

              return (
                <div className={`col-md-${width} border-white mobile`} key={element.url}>
                  <NewsItem
                    className="NewsItem"
                    title={element.title}
                    description={element.summary}
                    images={element.image_url}
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
