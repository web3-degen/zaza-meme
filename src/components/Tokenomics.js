import React from "react";
import "../styles/Tokenomics.css";
import TokenomicsLogo from "../assets/tokenomics-logo.png";
import FireIcon from "../assets/fire.png";
import AllIcon from "../assets/all.png";
import PreSaleIcon from "../assets/presale.png";
import CexIcon from "../assets/cexlisting.png";

const TOKENOMICS_ITEMS = [
  {
    title: "Supply",
    description: "1,000,000,000",
    icon: AllIcon,
  },
  {
    title: "Pre-Sale",
    description: "500,000,000",
    icon: PreSaleIcon,
  },
  {
    title: "Burned LP",
    description: "300,000,000",
    icon: FireIcon,
  },
  {
    title: "CEX Listings",
    description: "200,000,000",
    icon: CexIcon,
  },
];

function Tokenomics() {
  return (
    <div id="tokenomics" className="tokenomics">
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
