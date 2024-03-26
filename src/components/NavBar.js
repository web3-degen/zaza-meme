import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Slider from "react-slick";
import Logo from "../assets/navbar-logo.png";
import "../styles/NavBar.css";
import { CiBurger } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const MENU_ITEMS = [
  {
    title: "HOME",
    url: "/#home",
  },
  {
    title: "ABOUT",
    url: "/#about",
  },
  {
    title: "TOKENOMICS",
    url: "/#Tokenomics",
  },
  {
    title: "HOW TO BUY",
    url: "/#HowToBuy",
  },
];

const CA = "F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(CA);
    toast.success("Copied to clipboard");
  };

  return (
    <nav className="navbar-container">
      <div className="topbar">
        <Slider
          dots={false}
          speed={10000}
          arrows={false}
          autoplay={true}
          infinite={true}
          cssEase="linear"
          slidesToShow={1}
          centerMode={true}
          slidesToScroll={1}
          autoplaySpeed={2000}
          variableWidth={true}
        >
          <h1 onClick={copyToClipboard}>
            <strong>Contract Address:</strong> {CA}
          </h1>
          <h1 onClick={copyToClipboard}>
            <strong>Contract Address:</strong> {CA}
          </h1>
          <h1 onClick={copyToClipboard}>
            <strong>Contract Address:</strong> {CA}
          </h1>
        </Slider>
      </div>
      <div className="navbar">
        <div className="left-side">
          <img src={Logo} alt="Navbar Logo" />
        </div>
        <div className="right-side">
          {MENU_ITEMS.map(({ title, url }) => (
            <a className="nav-item" href={url} target="blank">
              {title}
            </a>
          ))}
        </div>
        <div className="burger">
          <div onClick={() => setOpen(true)}>
            <FaBars size={32} />
          </div>
          {isOpen && (
            <div class="menu">
              <div className="close-button" onClick={() => setOpen(false)}>
                <FaTimes size={32} />
              </div>
              {MENU_ITEMS.map(({ title, url }) => (
                <a className="nav-item" href={url} target="blank">
                  {title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
