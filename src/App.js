import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import VideoBackground from "./components/VideoBackground";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <VideoBackground /> */}
        <Navbar />
        <News />
      </div>
    );
  }
}
