import React, { useContext, useState } from "react";
import { GiExitDoor } from "react-icons/gi";
import { AiFillHome, AiFillWechat, AiFillMoneyCollect } from "react-icons/ai";

import { BiBitcoin, BiDonateBlood } from "react-icons/bi";
import styled from "styled-components";
import { ButtonContainer } from "../../styled/Button";
import { useChat } from "../../context/ChatProvider";
import Logo from '../../assets/LOGO.png'
import { LoginButton } from "../../connect-wallet/connectButton";
import { ChatContext } from "../../context/ChatProvider";
import './Navigation.css'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  width: 14.75em;
  height: 100vh;
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
    z-index: 99
    display: none;
  }
`;

const LogoImg = styled.picture`
  padding:10px 30px;
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
  const { closeMenu, isMenuOpen, isRoomOpen, setIsMenuOpen } = useContext(ChatContext);


  const leaveClickHandler = () => {
    setCurrentRoom(null);
  };

  return (
    <>
      {/* {!isMenuOpen ? ( */}
      <div className={isMenuOpen ? 'nav-body': 'hide'}>
        <Nav>
          <LogoImg>
            <img src={Logo} alt="Spacetar Logo" />
          </LogoImg>

          <ButtonContainer
            active="true"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="/">
              <AiFillHome size="25px" />
              <p>
                <b>Home</b>
              </p>
            </a>
          </ButtonContainer>

          <ButtonContainer
            active="true"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="/claim">
              <BiBitcoin size="25px" />
              <p>
                <b>Claim </b>
              </p>
            </a>
          </ButtonContainer>

          <ButtonContainer
            active="true"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="/claim">
              <BiDonateBlood size="25px" />
              <p>
                <b>Donate </b>
              </p>
            </a>
          </ButtonContainer>

          <ButtonContainer
            active="true"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              leaveClickHandler();
            }}
          >
            <a href="#">
              <GiExitDoor size="25px" />
              <p>
                <b>Exit Room</b>
              </p>
            </a>
          </ButtonContainer>
        </Nav>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default Navigation;
