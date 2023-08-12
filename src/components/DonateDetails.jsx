import React from "react";
import Qrcode from "../assets/qrcode.png";
import styled from "styled-components";

const DonateDetails = ({ cryptoCoin, cryptoShort }) => {
  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    alert("User ID copied to clipboard!");
    console.log(text);
  };

  const walletAddress = "0xkdi09344385848ujr48uijr4r5u3i48548t8";

  return (
    <>
      <DonateStyle>
        <QrCodeImg>
          <img src={Qrcode} alt="" />
        </QrCodeImg>
        <article>
          <h2>Donate {cryptoCoin} to this address</h2>
          <p>
            Scan the Qr code or copy the address below into your wallet to send
            some {cryptoCoin}
          </p>
          <p>
            <span>Tag/Note:-</span> {cryptoShort} Donations
          </p>
          <WalletAddress>{walletAddress}</WalletAddress>
          <CopyButton
            onClick={() => handleCopy(walletAddress)}
            text={walletAddress}
          >
            Copy
          </CopyButton>
        </article>
      </DonateStyle>
    </>
  );
};

export default DonateDetails;

const DonateStyle = styled.div`
  @media (max-width: 920px) {
    text-align: center;
  }
  @media (min-width: 920px) {
    display: flex;
  }
`;

const QrCodeImg = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 40px;

  @media (max-width: 920px) {
    margin: 0 auto;
    margin-bottom: 30px; 
  }
`;

const WalletAddress = styled.p`
  background: white;
  padding: 10px;
  border-radius: 3px;
`;

const CopyButton = styled.button`
  padding: 10px;
  text-transform: uppercase;
  background: #161616;
  color: white;
  border: none;
  cursor: pointer;
`;
