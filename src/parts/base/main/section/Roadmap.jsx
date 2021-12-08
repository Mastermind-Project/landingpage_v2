import React from "react";

export default function Roadmap() {
  return (
    <section className="roadmap">
      <div className="roadmap__circle">
        <img src="images/coins/circle.svg" alt="" />
      </div>
      <div className="roadmap__bitcoin">
        <img src="images/coins/bitcoin.png" alt="" />
      </div>
      <div className="roadmap__squares">
        <img src="images/coins/squares.svg" alt="" />
      </div>
      <div className="auto__container">
        <h3
          className="map wow fadeInUpSmall"
          data-wow-duration=".6s"
          data-wow-delay=".2s"
        >
          Road map
        </h3>
        <div className="roadmap__inner">
          <div
            className="roadmap__inner-line wow fadeIn"
            data-wow-duration=".6s"
            data-wow-delay=".7s"
          >
            <img src="images/roadmap/roadLine.svg" alt="" />
          </div>
          <div className="roadmap__inner-outer">
            <div
              className="roadmap__inner-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".2s"
            >
              <div className="roadmap__inner-row-shape">
                <img src="images/roadmap/firstShape.svg" alt="" />
              </div>
              <div className="roadmap__inner-column">
                <div className="roadmap__inner-column-title">Q1 2021</div>
                <div className="roadmap__inner-column-content">
                  <div className="roadmap__inner-column-content-title">
                    Development
                  </div>
                  <ul>
                    <li>Creation of an interactive website</li>
                    <li>Token creation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="roadmap__inner-row reverse wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              <div className="roadmap__inner-row-shape">
                <img src="images/roadmap/secondShape.svg" alt="" />
              </div>
              <div className="roadmap__inner-column">
                <div className="roadmap__inner-column-title">Q2 2021</div>
                <div className="roadmap__inner-column-content">
                  <div className="roadmap__inner-column-content-title">
                    Merketing
                  </div>
                  <ul>
                    <li>Referal programm marketing</li>
                    <li>Presale</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="roadmap__inner-row double wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".6s"
            >
              <div className="roadmap__inner-row-etherium">
                <img src="images/coins/etherium.png" alt="" />
              </div>
              <div className="roadmap__inner-row-shape">
                <img src="images/roadmap/thirdShape.svg" alt="" />
              </div>
              <div className="roadmap__inner-column">
                <div className="roadmap__inner-column-title">Q3 2021</div>
                <div className="roadmap__inner-column-content first">
                  <div className="roadmap__inner-column-content-title">
                    Development
                  </div>
                  <ul>
                    <li>Commerce hub development</li>
                    <li>Dex development</li>
                    <li>Community expansion</li>
                  </ul>
                </div>
                <div className="roadmap__inner-column-content">
                  <div className="roadmap__inner-column-content-title">
                    Listing
                  </div>
                  <ul>
                    <li>Token Listing</li>
                    <li>Liquidity pool locked</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="roadmap__inner-row double reverse wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".7s"
            >
              <div className="roadmap__inner-row-shape">
                <img src="images/roadmap/fourthShape.svg" alt="" />
              </div>
              <div className="roadmap__inner-column">
                <div className="roadmap__inner-column-title">Q3 2021</div>
                <div className="roadmap__inner-column-content first">
                  <div className="roadmap__inner-column-content-title">
                    REWARDS
                  </div>
                  <ul>
                    <li>NFT rewards to MMD holders</li>
                    <li>NFT plattform</li>
                  </ul>
                </div>
                <div className="roadmap__inner-column-content second">
                  <div className="roadmap__inner-column-content-title">
                    Governance
                  </div>
                  <ul>
                    <li>Governance</li>
                    <li>
                      Continuous development as voted for by the MMD community
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
