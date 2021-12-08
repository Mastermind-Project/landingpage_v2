import React from "react";

export default function Manage() {
  return (
    <section className="manage">
      <div className="manage__bg">
        <img src="images/managementBg.svg" alt="" />
      </div>
      <div className="auto__container">
        <div className="manage__inner">
          <div className="manage__inner-content">
            <h3
              className="dark wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".2s"
            >
              Contract Management
            </h3>
            <p
              className="mid wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              Have full visibility & control of your contracts
            </p>
            <div
              className="manage__inner-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".5s"
            >
              <div className="manage__inner-row-icon">
                <img src="images/icons/search.svg" alt="" />
              </div>
              <div className="manage__inner-row-content">
                <h5>BACKED BY FTM</h5>
                <p className="xsm">
                  The Fantom token (FTM) which is the native the currency of the
                  Fantom blockchain will be used to back the Mastermind token.
                </p>
              </div>
            </div>
            <div
              className="manage__inner-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".6s"
            >
              <div className="manage__inner-row-icon">
                <img src="images/icons/search.svg" alt="" />
              </div>
              <div className="manage__inner-row-content">
                <h5>RUG PROOF LIQUIDITY</h5>
                <p className="xsm">
                  Funds from the presale will be used to create a MMD/FTM pool
                  that will be permanently locked (rug proof).
                </p>
              </div>
            </div>
            <div
              className="manage__inner-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".7s"
            >
              <div className="manage__inner-row-icon">
                <img src="images/icons/search.svg" alt="" />
              </div>
              <div className="manage__inner-row-content">
                <h5>REWARDS</h5>
                <p className="xsm">
                  Holders earn passive rewards through static reflection. They
                  are also rewarded with part of the transaction fees from the
                  DEX
                </p>
              </div>
            </div>
          </div>
          <div className="manage__inner-image wow fadeIn"
              data-wow-duration=".6s"
              data-wow-delay=".6s">
            <img src="images/management.png" alt="" />
            <div className="manage__inner-image-phone">
              <img src="images/managementphone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
