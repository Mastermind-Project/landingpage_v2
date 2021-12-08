import React from "react";

export default function Product() {
  return (
    <section className="products">
      <div className="about">
        <div className="about__cube">
          <img src="images/coins/cube.png" alt="" />
        </div>
        <div className="auto__container">
          <div className="about__inner">
            <div className="about__inner-content">
              <h3
                className="title-about wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".2s"
              >
                NFTs
              </h3>
              <p
                className="wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".4s"
              >
                NFT’s marketplace where NFTs can be traded and rewarded to MMD
                holders that has contributed to the MMD community
              </p>
              <a
                href="#"
                className="button primary wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".6s"
              >
                Enter
              </a>
            </div>
            <div
              className="about__inner-image wow fadeIn"
              data-wow-duration=".6s"
              data-wow-delay=".6s"
            >
              <img src="images/illustration/illuNft.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="about dex">
        <div className="about__rocket">
          <img src="images/coins/rocket.svg" alt="" />
        </div>
        <div className="auto__container">
          <div className="about__inner">
            <div
              className="about__inner-image wow fadeIn"
              data-wow-duration=".6s"
              data-wow-delay=".6s"
            >
              <img src="images/illustration/illuDex.svg" alt="" />
            </div>
            <div className="about__inner-content">
              <h3
                className="title-about wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".2s"
              >
                DEX
              </h3>
              <p
                className="wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".4s"
              >
                For secure peer-to-peer transactions without the need for any
                intermediary.
              </p>
              <a
                href="#"
                className="button primary wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".6s"
              >
                Enter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about aboutWave">
        <div className="about__steam">
          <img src="images/coins/steam.svg" alt="" />
        </div>
        <div className="auto__container">
          <div className="about__inner">
            <div className="about__inner-content">
              <h3
                className="title-about wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".2s"
              >
                HUB
              </h3>
              <p
                className="wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".4s"
              >
                This is the platform where buyers and sellers meet to transact
                with the use of MMD token as the medium of exchange.
              </p>
              <a
                href="#"
                className="button primary wow fadeInUpSmall"
                data-wow-duration=".6s"
                data-wow-delay=".6s"
              >
                Enter
              </a>
            </div>
            <div className="about__inner-image wow fadeIn"
              data-wow-duration=".6s"
              data-wow-delay=".6s">
              <img src="images/illustration/illuHub.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
