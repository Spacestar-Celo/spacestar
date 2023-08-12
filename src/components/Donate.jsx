import { useState } from "react";
import styled from "styled-components";
import DonateDetails from "./DonateDetails";

function Donate() {
  const [cryptoCoin, setCryptoCoin] = useState("Bitcoin");
  const [cryptoShort, setCrpto] = useState("BTC");
  const [active, setActive] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabindex) => {
    setActiveTab('')
    setActiveTab( activeTab && tabindex);
    console.log(activeTab)
  };
  
  return (
    <>
      <DonatePage>
        <h1>Pls Donate Abeg</h1>
        <div>
          <DonateButton
            onClick={() => {
              setCryptoCoin("Bitcoin");
              setCrpto("BTC");
              setActive(true);
              handleTabClick(1);
            }}
          >
            Bitcoin
          </DonateButton>
          <DonateButton
            onClick={() => {
              setCryptoCoin("Etherium");
              setCrpto("ETH");
              setActive(true);
              handleTabClick(2);
            }}
          >
            Etherium
          </DonateButton>
          <DonateButton
            onClick={() => {
              setCryptoCoin("Xrp");
              setCrpto("XRP");
              setActive(true);
              handleTabClick(3);
            }}
          >
            Xrp
          </DonateButton>
        </div>
        <Detail>
          {activeTab === 1 && <DonateDetails cryptoCoin={cryptoCoin} cryptoShort={cryptoShort} />}
          {activeTab === 2 && <DonateDetails cryptoCoin={cryptoCoin} cryptoShort={cryptoShort} />}
          {activeTab === 3 && <DonateDetails cryptoCoin={cryptoCoin} cryptoShort={cryptoShort} />}
        </Detail>
      </DonatePage>
    </>
  );
}

export default Donate;

const DonatePage = styled.section`
  // border: 1px solid black;
  height: 100%;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  // align-items:center;
  justify-content: center;
  padding: 0 40px;

  & h1 {
    margin-bottom: 20px;
    font-size: 30px;
    color: #161616;
  }
`;

const DonateButton = styled.button`
  padding: 15px 40px;
  border: none;
  background: ${(props) => (props.activeTab === 1 ? "#f0f0f0" : "transparent")};
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 20px;
  color: grey;

  & img {
    width: 100%;
  }

  & h2 {
    margin-bottom: 10px;
    color: #161616;
  }
  & p {
    margin-bottom: 10px;
  }

  & span {
    font-size: 20px;
    font-weight: bold;
    color: #161616;
  }
`;
