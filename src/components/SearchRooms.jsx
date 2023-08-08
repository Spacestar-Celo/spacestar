import React ,{useContext}from "react";
import { BiReset } from "react-icons/bi";
import styled from "styled-components";
import { ButtonContainer } from "../styled/Button";
import { LoginButton } from "../connect-wallet/connectButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChatContext } from "../context/ChatProvider";

const SearchRoomsMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding:10px
`;

const SearchRoomsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  width: 45%;
  padding: 0.5em;
  border-radius: 1.2em;
  // float: right;

  & input {
    width: 85%;
    background: transparent;
    border: none;
  }

  @media (max-width: 820px) {
    // display: none;
  }
`;

const RightAlignedDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const SearchRooms = ({ query, setQuery }) => {

  const { isOpen, setIsOpen, openMenu, closeMenu } = useContext(ChatContext);

  return (
    <SearchRoomsMain>
      <GiHamburgerMenu size="25px" />
      <SearchRoomsContainer >
        <input
          type="text"
          placeholder="Search Group"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* <ButtonContainer padding="0" active= 'true'  size="3em" > */}
        <a href="#">
          <BiReset fill="194185" size={"1.1em"}></BiReset>
        </a>
        {/* </ButtonContainer> */}
      </SearchRoomsContainer>
      <button onClick={()=>{
        setIsOpen(true)
      }}>Open Rooms</button>
    </SearchRoomsMain>
  );
};

export default SearchRooms;
