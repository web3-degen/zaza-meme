import React from "react";
import Logo from "../assets/navbar-logo.png";
import "../styles/NavBar.css";
import Twitter from "../assets/twitter.png";
import Telegram from "../assets/telegram.png";
import Dexscreener from "../assets/dexscreener.png";
import Pumpfun from "../assets/pumpfun.png";

const SOCIAL_ITEMS = [
  {
    link: "https://t.me/yuno_on_sol",
    icon: Telegram,
    alt: "Telegram",
  },
  {
    link: "https://twitter.com/solana_yuno",
    icon: Twitter,
    alt: "Twitter",
  },
  {
    link: "",
    icon: Pumpfun,
    alt: "Pumpfun",
  },
  {
    link: "",
    icon: Dexscreener,
    alt: "Dexscreener",
  },
];

function NavBar() {
  return (
    <nav className="container">
      <div className="navbar">
        <div className="left-side">
          <img src={Logo} alt="Navbar Logo" className="main-logo" />
        </div>
        <div className="right-side">
          {SOCIAL_ITEMS.map(({ link, icon, alt }) => (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img className="social-logo" src={icon} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
