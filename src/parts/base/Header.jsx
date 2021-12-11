import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Header() {
  const [menu, setMenu] = useState(false);
  var links = document.querySelectorAll(".nav__inner-link");


  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const start = 300;
  const onScroll = () => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
    
  };

  const menuClose = React.useCallback((e) => {
    const target = e.target;
    if (target === document.querySelector(".nav")) {
      document.body.classList.remove("active");
      document.body.removeEventListener("click", menuClose);
      setMenu(false);
    }
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.addEventListener("click", menuClose);
      document.body.classList.add("active");
    }
  }, [menu]);

  var body = document.body;
  links.forEach((e) => {
    onLinkClick(e);
  });

  function onLinkClick(linkItem) {
    linkItem.addEventListener("click", function () {
      setMenu(false);
      body.classList.remove("active");
    });
  }

  const tOptions = {
    error: {
      style: {
        background: '#ff1a1a',
        color: '#ffffff',
        paddingRight: '30px',
        paddingLeft: '30px',
        fontWeight: '500',
        fontSize: '18px'
      }
    }
  };

  
  const notify = () => toast.error('Coming soon');

  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <a href="#top" className="header__inner-logo nav__inner-link">
            <img src="images/logo.png" alt="" />
          </a>
          <nav className={"nav " + (menu ? "active" : "")} id="menu">
            <div className="nav__inner">
              <a href="#products" className="nav__inner-link">
                Products
              </a>
              <a href="#manage" className="nav__inner-link">
                About
              </a>
              <a href="#distribution" className="nav__inner-link">
                Distribution
              </a>
              <a href="#roadmap" className="nav__inner-link">
                Roadmap
              </a>
              <a href="#mission" className="nav__inner-link">
                Mission
              </a>
              <a href="#faq" className="nav__inner-link">
                FAQ
              </a>
              <a href="#contact" className="nav__inner-link">
                Contact
              </a>
              <a href="javascript:void(0)" style={{ marginRight: "6px" }} className="button link" onClick={notify}>
                Use Ecom
              </a>
              <a href="javascript:void(0)" className="button link" onClick={notify}>
                Use Swap
              </a>
            </div>
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            id="menuBtn"
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
        </div>
      </div>
      <Toaster toastOptions={tOptions} />
    </header>
  );
}
