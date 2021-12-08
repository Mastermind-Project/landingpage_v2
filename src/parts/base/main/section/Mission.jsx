import React from "react";

export default function Mission() {
  return (
    <section className="mission">
      <div className="auto__container">
        <div className="mission__inner">
          <div className="mission__inner-bg">
            <img src="images/mission.png" alt="" />
            <div className="mission__inner-shadow">
              <img src="images/shadow.svg" alt="" />
            </div>
          </div>
          <h3
            className="mission wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
          >
            Mission and Vision
          </h3>
          <div className="mission__inner-row">
            <div
              className="mission__inner-column wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              <div className="mission__inner-column-icon">
                <img src="images/icons/mission.png" alt="" />
              </div>
              <div className="mission__inner-column-title">Mission</div>
              <div className="mission__inner-column-text">
                To maximize our community's financial bargaining strength
                through strategic unity, growth, and continous engagement.
              </div>
            </div>
            <div
              className="mission__inner-column wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".6s"
            >
              <div className="mission__inner-column-icon">
                <img src="images/icons/vision.png" alt="" />
              </div>
              <div className="mission__inner-column-title">Vision</div>
              <div className="mission__inner-column-text">
                To drive financial inclusion and economic prosperity using
                blockchain technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
