import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <h5>Social media links</h5>
          <div className="footer__inner-socials">
            <a 
              href="https://t.me/mastermindtoken" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__inner-social"
            >
              <img src="images/icons/telegram.svg" alt="Telegram community" />
            </a>
            <a 
              href="https://www.twitter.com/mastermindtoken" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__inner-social"
            >
              <img src="images/icons/twitter.svg" alt="Twitter community" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100071318033104" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer__inner-social"
            >
              <img src="images/icons/facebook.svg" alt="Facebook community" />
            </a>
            <a 
              href="https://medium.com/@mastermindtoken"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__inner-social"
            >
              <img src="images/icons/medium.svg" alt="Medium community" style={{ boderRadius: '200px' }}/>
            </a>
            <a 
              href="https://www.instagram.com/mastermindtokens/" 
              className="footer__inner-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/icons/insta.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
