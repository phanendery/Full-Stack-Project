import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-content">
          <div className="img-container">
            <img
              className="home-page-picture"
              src="https://web.500px.com/static/media/discover.be9b60f7.jpg"
              alt="home-page-picture"
            />
            <span className="pic-text">"J"tier in Studio by Milton Smith</span>
          </div>

          <div className="home-text">
            <h3 className="slogan">The global network for photographers</h3>
            <h1 className="under-slogan">
              Discover and share the world's best photos
            </h1>
            <div className="bottom-slogan">
              Get inspired with incredible photos from diverse styles and genres
              around the world. We're not guided by fads—just great photography.
            </div>
            <div className="big-signup">
              <Link to="/signup" className="sign-up-button2">
                Experience Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
