import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Robot from "../assets/robot.gif";
import HomeLogo from "../assets/w.png";
import Logout from "./Logout";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={HomeLogo} alt="Logo" />
      <h1>
        Welcome, <span>{userName} !</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
      <h3 className="logout"> 
        Logout {<Logout/>}
      </h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
    padding-bottom:50px;
    mix-blend-mode:difference;
  }
  span{
    color: 	#D2691E;
  }
  .logout{
    display:flex;
    justify-contest:center;
    align-items:center;
    gap:20px;
    text-align:center;
    margin-top:20px;
    font-family: "Josefin Sans", sans-serif;
  }

`;
