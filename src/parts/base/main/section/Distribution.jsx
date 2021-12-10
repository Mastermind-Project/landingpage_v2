import React from "react";
import Graph from "./Graph";

export default function Distribution() {
  return (
    <section className="distribution">
      <div className="distribution__illu">
        <img src="images/illustration/illuToken.png" alt="" />
      </div>
      <div className="auto__container">
        <h3
          className="dis wow fadeInUpSmall"
          data-wow-duration=".6s"
          data-wow-delay=".2s"
        >
          Token distribution
        </h3>
        <div className="distribution__inner">
          <div className="distribution__inner-chart">
            <div className="distribution__inner-chart-header">
              <p>Tokenomics</p>
              <div className="dropdown">
                <div className="dropdown__btn">
                  Metrics
                  {/* <img src="images/icons/arrow-down.svg" alt="" /> */}
                </div>
                <div className="dropdown__content">
                  <div className="dropdown__content-btn">Dayly</div>
                  <div className="dropdown__content-btn">Monthly</div>
                </div>
              </div>
            </div>
            <div className="distribution__inner-chart-inner">
              <div
                className="distribution__inner-chart-body wow fadeIn"
                data-wow-duration=".6s"
                data-wow-delay=".6s"
              >
                <div className="chart__outer">
                  <Graph />
                </div>
              </div>
              <div className="distribution__inner-chart-footer">
                <div className="distribution__inner-chart-footer-row">
                  <img src="images/icons/upStatus.svg" alt="" />
                  Total Supply: <span> 10 000 000 $MMD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="distribution__inner-content">
            <h4
              className="wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".1s"
            >
              LOCKED LIQUIDITY
            </h4>
            <div
              className="distribution__inner-content-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".2s"
            >
              <img src="images/icons/tick.svg" alt="" />
              <p className="sm">
                Liquidity pool will be permanently locked and funded with the
                proceeds from presale
              </p>
            </div>
            <h4
              className="wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".3s"
            >
              PRESALE
            </h4>
            <div
              className="distribution__inner-content-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              <img src="images/icons/tick.svg" alt="" />
              <p className="sm">
                Token to be made available for sale to potential investors
                proior to launching.
              </p>
            </div>
            <h4
              className="wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              MARKETING
            </h4>
            <div
              className="distribution__inner-content-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".5s"
            >
              <img src="images/icons/tick.svg" alt="" />
              <p className="sm">
                Token will be vested for 5years. 4% of the allocation to be
                released quaterly.
              </p>
            </div>
            <h4
              className="wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".5s"
            >
              DEVELOPMENT
            </h4>
            <div
              className="distribution__inner-content-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".6s"
            >
              <img src="images/icons/tick.svg" alt="" />
              <p className="sm">
                Token will be vested for 5years. 4% of the allocation to be
                released quaterly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
