import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <h5>Social media links</h5>
          <div className="footer__inner-socials">
            <a href="#" className="footer__inner-social">
              <img src="images/icons/telegram.svg" alt="" />
            </a>
            <a href="#" className="footer__inner-social">
              <img src="images/icons/facebook.svg" alt="" />
            </a>
            <a href="#" className="footer__inner-social">
              <img src="images/icons/vk.svg" alt="" />
            </a>
            <a href="#" className="footer__inner-social">
              <img src="images/icons/insta.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
