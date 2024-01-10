import React, { Component } from 'react';
import ScrollToTopLink from "./ScrollToTopLink";
import './NewsItem.css';

export default class NewsItem extends Component {

  render() {
    const { title, description, images, readMore, timeDifference, isBlog } = this.props;

    const defaultImageUrl =
      'https://c4.wallpaperflare.com/wallpaper/438/143/772/launch-dark-rocket-launching-wallpaper-preview.jpg';
    const handleImageError = (event) => {
      event.target.src = defaultImageUrl;
    };


    return (
      <>
        <div className="my-3 border-white">
          <div
            className="card custom-bg-gradient text-white color border-white list-group"
            style={{ width: '18rem', height: '510px', borderRadius: '16px' }}
          >
            <div className="h-40">
              <img
                src={images ? images : defaultImageUrl}
                alt=""
                onError={handleImageError}
                className="card-img-top"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
              />
            </div>
            <div className="card-body h-50 overflow-hidden">
              <h5 className="card-title">{title}</h5>
              {description && description.length > 0 ? (
                <p className="card-text">{description.slice(0, 200)}</p>
              ) : <small className="fw-lighter, fst-italic">
                <br />
                No summary provided by news panel, please read full article from the link below.
              </small>}
            </div>
            <div className="card-body card-dark">

              <ScrollToTopLink
                to={isBlog ? readMore : { pathname: readMore, state: { isExternalLink: true } }}
                onClick={(e) => {
                  if (isBlog === "false") {
                    e.preventDefault();
                    window.open(readMore, '_blank');
                  }
                }}
                className="card-link text-decoration-none"
              >
                <button
                  type="button"
                  href={readMore}
                  className="btn btn-outline-primary card-link"
                >
                  Read More
                </button>
              </ScrollToTopLink>
            </div>
            {isBlog === "false" && <div
              className="card-footer bg-black border-secondary custom-bg-secondary"
              style={{ borderRadius: '16px' }}
            >
              <div className="text-body-secondary text-center">
                Last updated&nbsp;
                {timeDifference.days !== 0 && (
                  <span>{timeDifference.days} days </span>
                )}
                {timeDifference.hours !== 0 && (
                  <span>{timeDifference.hours} hours </span>
                )}
                {timeDifference.minutes !== 0 && (
                  <span>{timeDifference.minutes} mins </span>
                )}
                {timeDifference.days !== 0 ||
                  timeDifference.hours !== 0 ||
                  timeDifference.minutes !== 0
                  ? ' ago'
                  : ''}
              </div>
            </div>}
          </div>
        </div>
      </>
    );
  }
}
