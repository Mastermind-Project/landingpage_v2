import React from "react";
import Distribution from "./section/Distribution";
import Faq from "./section/faq/Faq";
import Intro from "./section/Intro";
import Manage from "./section/Manage";
import Mission from "./section/Mission";
import Product from "./section/Product";
import Roadmap from "./section/Roadmap";
export default function Main() {
  return (
    <>
      <div className="anchorPoints" id="top"></div>
      <Intro />
      <div className="anchorPoint" id="products"></div>
      <Product />
      <div className="anchorPoint" id="manage"></div>
      <Manage />
      <div className="anchorPoint" id="distribution"></div>
      <Distribution />
      <div className="anchorPoint" id="roadmap"></div>
      <Roadmap />
      <div className="anchorPoint" id="mission"></div>
      <Mission />
      <div className="anchorPoint" id="faq"></div>
      <Faq />
      <div className="anchorPoint footerAnchor" id="contact"></div>
    </>
  );
}
