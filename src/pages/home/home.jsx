import React from "react";
import "./style.css";
class Home extends React.Component {
  render() {
    return (
      <div id="landing">
        <img
          src="https://freesvg.org/img/1527825209.png"
          alt="cat logo"
          height="100px"
          width="100px"
          className="animated zoomInUp delay-1s"
          id="catLogo"
        />
        <h4 id="katnip">Katnip </h4>
        <h4 id="tagLine">Web Development & Design</h4>
        <div id="colors">
          <div id="darkGreen"></div>
          <div id="lightGreen"></div>
          <div id="blue"></div>
          <div id="darkPurple"></div>
          <div id="lightPurple"></div>
        </div>
      </div>
    );
  }
}
export default Home;
