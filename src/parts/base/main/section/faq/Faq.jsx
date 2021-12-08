import React, { useState } from "react";

export default function Faq() {
  const [state, setState] = useState(null);
  const setStateOrClose = (tab) => {
    if (tab === state) setState(null);
    else setState(tab);
  };

  return (
    <section className="faq">
      <div className="faq__circle">
        <img src="images/coins/circle.svg" alt="" />
      </div>
      <div className="faq__tri">
        <img src="images/coins/polygon-2.png" alt="" />
      </div>
      <div className="faq__tri-2">
        <img src="images/coins/polygon-3.png" alt="" />
      </div>
      <div className="faq__crypto">
        <img src="images/coins/bitcoin.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="faq__inner">
          <h2
            className="wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
          >
            FAQ
            <span>FAQ</span>
          </h2>
          <div
            className="accord wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
          >
            <div className="accord__inner">
              <div
                className={`accord__inner-btn ${
                  state === "accord-1" ? "active" : ""
                }`}
                onClick={() => setStateOrClose("accord-1")}
              >
                What is Mastermind Protocol?
                <img src="images/icons/chevron.svg" alt="" />
              </div>
              <div
                className={`accord__inner-para ${
                  state === "accord-1" ? "active" : ""
                }`}
              >
                <p>
                  Yes. Rewards will be given to MMD holders who have, one way or
                  the other, contributed to the development of the ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div
            className="accord wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".3s"
          >
            <div className="accord__inner">
              <div
                className={`accord__inner-btn ${
                  state === "accord-2" ? "active" : ""
                }`}
                onClick={() => setStateOrClose("accord-2")}
              >
                What are the Use Cases of MMD Token?
                <img src="images/icons/chevron.svg" alt="" />
              </div>
              <div
                className={`accord__inner-para ${
                  state === "accord-2" ? "active" : ""
                }`}
              >
                <p>
                  Yes. Rewards will be given to MMD holders who have, one way or
                  the other, contributed to the development of the ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div
            className="accord wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".4s"
          >
            <div className="accord__inner">
              <div
                className={`accord__inner-btn ${
                  state === "accord-3" ? "active" : ""
                }`}
                onClick={() => setStateOrClose("accord-3")}
              >
                Will the MMD holders be rewarded with Mastermind NFTs?
                <img src="images/icons/chevron.svg" alt="" />
              </div>
              <div
                className={`accord__inner-para ${
                  state === "accord-3" ? "active" : ""
                }`}
              >
                <p>
                  Yes. Rewards will be given to MMD holders who have, one way or
                  the other, contributed to the development of the ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div
            className="accord wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".5s"
          >
            <div className="accord__inner">
              <div
                className={`accord__inner-btn ${
                  state === "accord-4" ? "active" : ""
                }`}
                onClick={() => setStateOrClose("accord-4")}
              >
                What About Mastermind Decentralize Exchange?
                <img src="images/icons/chevron.svg" alt="" />
              </div>
              <div
                className={`accord__inner-para ${
                  state === "accord-4" ? "active" : ""
                }`}
              >
                <p>
                  Yes. Rewards will be given to MMD holders who have, one way or
                  the other, contributed to the development of the ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div
            className="accord wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".5s"
          >
            <div className="accord__inner">
              <div
                className={`accord__inner-btn ${
                  state === "accord-5" ? "active" : ""
                }`}
                onClick={() => setStateOrClose("accord-5")}
              >
                What is the Mastermind Commerce Hub?
                <img src="images/icons/chevron.svg" alt="" />
              </div>
              <div
                className={`accord__inner-para ${
                  state === "accord-5" ? "active" : ""
                }`}
              >
                <p>
                  Yes. Rewards will be given to MMD holders who have, one way or
                  the other, contributed to the development of the ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div
            className="accord wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".5s"
          >
            <div className="accord__inner">
              <div
                className={`accord__inner-btn ${
                  state === "accord-6" ? "active" : ""
                }`}
                onClick={() => setStateOrClose("accord-6")}
              >
                Governance Proposals and Voting concern?
                <img src="images/icons/chevron.svg" alt="" />
              </div>
              <div
                className={`accord__inner-para ${
                  state === "accord-6" ? "active" : ""
                }`}
              >
                <p>
                  Yes. Rewards will be given to MMD holders who have, one way or
                  the other, contributed to the development of the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
