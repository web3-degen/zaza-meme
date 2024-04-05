import React, { useState } from "react";
import toast from "react-hot-toast";
import Logo from "../assets/navbar-logo.png";
import "../styles/NavBar.css";
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
    url: "/#tokenomics",
  },
  {
    title: "HOW TO BUY",
    url: "/#howtobuy",
  },
];

const CA = "7MvzAc4P8rFKdT5hszKhX1jyxrBfY1iZRyKhggbZa5tU";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(CA);
    toast.success("Copied to clipboard");
  };

  return (
    <nav className="navbar-container">
      <div className="topbar">
        <h1 className="topbar-ca" onClick={copyToClipboard}>
          <strong>CA:</strong> <br className="topbar-br" />{" "}
          <br className="topbar-br" /> {CA}
        </h1>
      </div>
      <div className="navbar">
        <div className="left-side">
          <img src={Logo} alt="Navbar Logo" />
        </div>
        <div className="right-side">
          {MENU_ITEMS.map(({ title, url }) => (
            <a className="nav-item" href={url}>
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
                <a className="nav-item" href={url}>
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
