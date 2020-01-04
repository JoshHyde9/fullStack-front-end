import React, { Component } from "react";

// Materialize JS
import M from "materialize-css";

// Img
import landingParallax from "../img/landing-page-parallax.jpg";

export default class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        <div className="parallax-container">
          <br />
          <div className="container center-align section" id="opacity-bg">
            <h2 className="header">NASA's Public Data</h2>
            <p>
              The National Aeronautics and Space Administration is an
              independent agency of the United States Federal Government
              responsible for the civilian space program, as well as aeronautics
              and aerospace research. NASA was established in 1958, succeeding
              the National Advisory Committee for Aeronautics.
            </p>
            <p>
              This site gets and displays some of NASA's public data via NASA's
              API in an easy to read and convient way.
            </p>
          </div>
          <div className="parallax">
            <img src={landingParallax} alt="" />
          </div>
          <i className="material-icons center-align tool-tip">
            arrow_drop_down_circle
          </i>
        </div>
        <div className="container">
          <section className="section white">
            <div className="row">
              <div className="col s12 m6 l4">
                <div class="card hoverable">
                  <div class="card-image">
                    <img src="https://source.unsplash.com/300x200/" />
                    <span class="card-title">
                      APOD (Astronomy Picture of the Day)
                    </span>
                  </div>
                  <div class="card-content">
                    <p>
                      One of the most popular websites at NASA is the Astronomy
                      Picture of the Day. In fact, this website is one of the
                      most popular websites across all federal agencies. It has
                      the popular appeal of a Justin Bieber video.
                    </p>
                  </div>
                  <div class="card-action">
                    <a class="waves-effect waves-light btn">Visit</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div class="card hoverable">
                  <div class="card-image">
                    <img src="https://source.unsplash.com/300x200/" />
                    <span class="card-title">
                      Insight (Mars Weather Service)
                    </span>
                  </div>
                  <div class="card-content">
                    <p>
                      NASA’s InSight Mars lander takes continuous weather
                      measurements (temperature, wind, pressure) on the surface
                      of Mars at Elysium Planitia, a flat, smooth plain near
                      Mars’ equator.
                    </p>
                  </div>
                  <div class="card-action">
                    <a class="waves-effect waves-light btn">Visit</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div class="card hoverable">
                  <div class="card-image">
                    <img src="https://source.unsplash.com/300x200/" />
                    <span class="card-title">Mars Rover Photos</span>
                  </div>
                  <div class="card-content">
                    <p>
                      Mars Rover Photos is designed to collect image data
                      gathered by NASA's Curiosity, Opportunity, and Spirit
                      rovers on Mars and make it more easily available to other
                      developers, educators, and citizen scientists.
                    </p>
                  </div>
                  <div class="card-action">
                    <a class="waves-effect waves-light btn">Visit</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div class="card hoverable">
                  <div class="card-image">
                    <img src="https://source.unsplash.com/300x200/" />
                    <span class="card-title">Card Title</span>
                  </div>
                  <div class="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div class="card-action">
                    <a class="waves-effect waves-light btn">Visit</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div class="card hoverable">
                  <div class="card-image">
                    <img src="https://source.unsplash.com/300x200/" />
                    <span class="card-title">Card Title</span>
                  </div>
                  <div class="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div class="card-action">
                    <a class="waves-effect waves-light btn">Visit</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div class="card hoverable">
                  <div class="card-image">
                    <img src="https://source.unsplash.com/300x200/" />
                    <span class="card-title">Card Title</span>
                  </div>
                  <div class="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div class="card-action">
                    <a class="waves-effect waves-light btn">Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
