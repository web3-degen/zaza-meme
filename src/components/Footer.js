import React from "react";
import "../styles/Footer.css";
import Coingecko from "../assets/coingecko.png";
import CoinMarketCap from "../assets/coinmarketcap.png";
import Twitter from "../assets/twitter.png";
import Telegram from "../assets/telegram.png";
import Dexscreener from "../assets/dexscreener.png";
import Pinksale from "../assets/pinksale.png";
import Dexview from "../assets/dexview.png";

const SOCIAL_ITEMS = [
  {
    link: "https://t.me/yuno_on_sol",
    icon: Telegram,
  },
  {
    link: "https://twitter.com/solana_yuno",
    icon: Twitter,
  },
  {
    link: "https://www.pinksale.finance/solana/launchpad/AV1U12fwCQva5QMD83yt5VMhLXXJyFPgVehJj3N9Nsk",
    icon: Pinksale,
  },
  {
    link: "https://www.dexview.com/solana/7MvzAc4P8rFKdT5hszKhX1jyxrBfY1iZRyKhggbZa5tU",
    icon: Dexview,
  },
  {
    link: "https://dexscreener.com/solana/7MvzAc4P8rFKdT5hszKhX1jyxrBfY1iZRyKhggbZa5tU",
    icon: Dexscreener,
  },
  // {
  //   link: "",
  //   icon: CoinMarketCap,
  // },
  // {
  //   link: "",
  //   icon: Coingecko,
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
