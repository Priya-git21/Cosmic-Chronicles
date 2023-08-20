import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import './News.css';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res.json())
      .then((data) => this.setState({ news: data }));
    this.setState({ loading: false });
  }

  // Function to calculate the time difference in hours and minutes
  calculateTimeDifference(updatedAt) {
    const updatedAtDate = new Date(updatedAt);
    const currentDate = new Date();
    const timeDifference = Math.floor((currentDate - updatedAtDate) / (1000 * 60)); // in minutes

    const hours = Math.floor(timeDifference / 60);
    const minutes = timeDifference % 60;

    return { hours, minutes };
  }

  render() {
    const { news } = this.state;

    return (
      <div className="container my-3">
        <h1 className='font'>Cosmic Chronicles- Latest Updates</h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {news?.map((element) => {
            // Calculate the time difference for each news item
            const { hours, minutes } = this.calculateTimeDifference(element.updatedAt);

            return (
              <div className="col-md-4 border-white" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.summary}
                  images={element.imageUrl}
                  readMore={element.url}
                  timeDifference={{ hours, minutes }} // Pass time difference as a prop
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
