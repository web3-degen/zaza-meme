import React from "react";
import "../styles/Footer.css";
import Coingecko from "../assets/coingecko.png";
import CoinMarketCap from "../assets/coinmarketcap.png";
import Twitter from "../assets/twitter.png";
import Telegram from "../assets/telegram.png";
import Dextools from "../assets/dextools.png";

const SOCIAL_ITEMS = [
  {
    link: "https://t.me/yuno_on_sol",
    icon: Telegram,
  },
  {
    link: "https://twitter.com/solana_yuno",
    icon: Twitter,
  },
  // {
  //   link: "",
  //   icon: CoinMarketCap,
  // },
  // {
  //   link: "",
  //   icon: Coingecko,
  // },
  // {
  //   link: "",
  //   icon: Dextools,
  // },
];

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <p className="copyright"> &copy; 2024 Yuno on Solana</p>
      </div>
      <div className="right">
        {SOCIAL_ITEMS.map(({ link, icon }) => (
          <a className="socials" href={link} target="blank">
            <img className="social-logo" src={icon} alt={link} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
