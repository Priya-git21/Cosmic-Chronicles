import React, { Component } from "react";
import BlogData from "./BlogData.json";
import NewsItem from "./NewsItem";
import "./News.css";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      width: 4,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
    this.updateWidth();
    window.addEventListener("resize", () => this.updateWidth());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateWidth());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.width !== this.state.width) {
      this.updateWidth();
    }
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

  render() {
    const { loading, width } = this.state;
    return (
      <div className="container my-3">
        <h1 className="font">Astro Blogs</h1>
        {loading && (
          <div style={{ color: "white", fontSize: "20px" }}>Loading...</div>
        )}

        <div className="row">
          {BlogData.map((element) => {
            return (
              <div
                className={`col-md-${width} border-white mobile`}
                key={element.id}
              >
                <NewsItem
                  className="NewsItem"
                  title={element.title}
                  description={element.summary}
                  images={element.imageUrl}
                  readMore={`/blogs/${element.id}`}
                  timeDifference={0}
                  isBlog={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
