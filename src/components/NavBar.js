import React from "react";
import Logo from "../assets/navbar-logo.png";
import "../styles/NavBar.css";
import Twitter from "../assets/twitter.png";
import Telegram from "../assets/telegram.png";
import Dexscreener from "../assets/dexscreener.png";
import Pumpfun from "../assets/pumpfun.png";

const SOCIAL_ITEMS = [
  {
    link: "https://t.me/charlie_sol_portal",
    icon: Telegram,
    alt: "Telegram",
  },
  {
    link: "https://x.com/Charlies_BDay",
    icon: Twitter,
    alt: "Twitter",
  },
  {
    link: "https://pump.fun/",
    icon: Pumpfun,
    alt: "Pumpfun",
  },
  {
    link: "https://dexscreener.com/solana/",
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
