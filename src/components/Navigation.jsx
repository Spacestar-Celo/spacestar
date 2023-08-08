import React from "react";
import { GiExitDoor } from "react-icons/gi";
import { AiFillHome, AiFillWechat, AiFillMoneyCollect } from "react-icons/ai";

import { BiBitcoin } from "react-icons/bi";
import styled from "styled-components";
import { ButtonContainer } from "../styled/Button";
import { useChat } from "../context/ChatProvider";
import Logo from "../assets/LOGO.png";
import { LoginButton } from "../connect-wallet/connectButton";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  width: 14.75em;
  gap: 30px;
  // border: 1px solid black;
  // align-items: center;
  // padding: 6vh 5px;
  // background: #ebe8e8;
  background: #194185;

  & div {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 820px) {
    width: 70%;
    justify-content: start;
    height: 100%;
    // flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
`;

const LogoImg = styled.picture`
  // border: 1px solid white;
  padding:10px;
  background-color: white;
  // border-radius: 10px;
  display: flex;
  // justify-content: start;
  align-items center;
  height: ${(props) => (props.size ? "auto" : "3.9em")};

  & img {
    width: 100%;
  }

   @media (max-width: 820px) {
    // display: none;

    & img{
      width:50%;
    }
  }
`;

const Navigation = ({ openRoomNav }) => {
  const { currentRoom, setCurrentRoom } = useChat();

  const leaveClickHandler = () => {
    setCurrentRoom(null);
  };

  return (
    <Nav>
      <LogoImg>
        <img src={Logo} alt="Spacetar Logo" />
      </LogoImg>

      <ButtonContainer active="true">
        <a href="/">
          <AiFillHome size="25px" />
          <p>
            <b>Home</b>
          </p>
        </a>
      </ButtonContainer>

      {/* <ButtonContainer device="mobile" onClick={openRoomNav}>
          <a href="/">
            <AiFillWechat size="30px" />
          </a>
        </ButtonContainer> */}

      <ButtonContainer active="true">
        <a href="/claim">
          <BiBitcoin size="25px" />
          <p>
            <b>Claim </b>
          </p>
        </a>
      </ButtonContainer>

      <ButtonContainer active="true" onClick={leaveClickHandler}>
        <a href="#">
          <GiExitDoor size="25px" />
          <p>
            <b>Exit Room</b>
          </p>
        </a>
      </ButtonContainer>
    </Nav>
  );
};

export default Navigation;
