import React, { Component } from 'react'
import './NewsItem.css'
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {
  render() {
    let { title, description, images, readMore, timeDifference } = this.props;

    const defaultImageUrl = 'https://c4.wallpaperflare.com/wallpaper/438/143/772/launch-dark-rocket-launching-wallpaper-preview.jpg';

    return (
      <>
        <div className="my-3 border-white">
          <div className="card custom-bg-gradient text-white color border-white list-group" style={{ width: "18rem", height: "510px", borderRadius: "16px" }}>
            <div className="h-40">
              <img src={images ? images : defaultImageUrl} alt='' className="card-img-top" style={{ height: "200px", objectFit: "cover", borderRadius: "16px" }} />
            </div>
            <div className="card-body h-40 overflow-hidden">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description.slice(0, 200)}</p>
            </div>
            <div className="card-body card-dark">
              <button type="button" href={readMore} className="btn btn-outline-primary card-link">
                <Link to={readMore} target='_blank' className="card-link text-decoration-none">
                  Read More
                </Link>
              </button>
            </div>
            <div className="card-footer bg-black border-secondary custom-bg-secondary" style={{ borderRadius: "16px" }}>
              <div className="text-body-secondary text-center">Last updated {timeDifference.hours} hours, {timeDifference.mins ? timeDifference.mins : 0} mins ago</div>
            </div>
          </div>
        </div>
      </>

    )
  }
}
