import React, { useEffect, useId } from "react";
import "../styles/HowToBuy.css";

const ORDER_ITEMS = [
  {
    title: "setup a wallet",
    description: "Download phantom or wallet of choice on your device",
  },
  {
    title: "Get some $SOL",
    description: "Buy $SOL and send to your wallet of choice",
  },
  {
    title: "Go to Jupiter",
    description:
      "Go to jup.ag and connect your wallet, paste the $YUNO address and exchange $YUNO for $SOL",
  },
  {
    title: "$YUNO",
    description:
      "Participate in the $YUNO community. Share memes, interact on TG and spread the word on Twitter",
  },
];

function HowToBuy() {
  const id = useId();

  useEffect(() => {
    if (!window) return;

    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: id,
      endpoint: "https://api.mainnet-beta.solana.com",
      formProps: {
        fixedOutputMint: true,
        initialOutputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      },
    });
  }, []);

  return (
    <div className="howtobuy">
      <h1>HOW TO BUY ?</h1>
      <div className="container">
        <div className="leftSide">
          <ol>
            {ORDER_ITEMS.map(({ title, description }) => (
              <li>
                <strong>{title}</strong>: {description}
              </li>
            ))}
          </ol>
          <a className="buy">BUY $YUNO</a>
        </div>
        <div className="rightSide">
          <div id={id} />
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
