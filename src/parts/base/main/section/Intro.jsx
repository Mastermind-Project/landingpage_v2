import React from "react";

export default function Intro() {
  return (
    <section className="intro">
      <div className="auto__container">
        <div className="intro__inner">
          <div className="intro__inner-content">
            <h1
              className=" wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".2s"
            >
              The New DeFi
              <br /> Tribe
            </h1>
            <p
              className="wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              The first asset backed deflationary token built on Fantom Opera.
            </p>
            <div
              className="intro__inner-content-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".6s"
            >
              <a href="https://drive.google.com/file/d/1zl__qDgow9VZQ-LV27SFpLD-AVTzT7Z4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button primary">
                Whitepaper
              </a>
            </div>
          </div>
          <div className="intro__inner-image wow fadeIn"
              data-wow-duration=".6s"
              data-wow-delay=".6s">
            <img src="images/intro/introLaptop.png" alt="" />
            <div className="intro__inner-not">
              <img src="images/intro/notification.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
