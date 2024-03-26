import React from "react";
import "../styles/Tokenomics.css";
import TokenomicsLogo from "../assets/tokenomics-logo.png";
import FireIcon from "../assets/fire.png";
import AllIcon from "../assets/all.png";
import AirdropIcon from "../assets/airdrop.png";

const TOKENOMICS_ITEMS = [
  {
    title: "Supply",
    description: "10,000,000,000",
    icon: AllIcon,
  },
  {
    title: "Burned LP",
    description: "7,500,000,000",
    icon: FireIcon,
  },
  {
    title: "Airdrop",
    description: "2,500,000,000",
    icon: AirdropIcon,
  },
];

function Tokenomics() {
  return (
    <div className="tokenomics">
      <ul>
        {TOKENOMICS_ITEMS.map(({ title, description, icon }) => (
          <li>
            <img className="icons" src={icon} alt={title} /> {title}:{" "}
            <strong>{description}</strong>
          </li>
        ))}
      </ul>
      <img className="logo" src={TokenomicsLogo} alt="Tokenomics Logo" />
    </div>
  );
}

export default Tokenomics;
