import React from 'react'
import styled from "styled-components"
import log from "../../ASSETS/techFairLogo.svg"
import { BiSearch, BiMenuAltLeft } from "react-icons/bi";
import { HiOutlineMenuAlt2, HiMenu } from "react-icons/hi";
import { BsFillCartPlusFill } from "react-icons/bs";
import {MdOutlinePerson} from "react-icons/md"
import {GrMenu} from "react-icons/gr"
import {FaTimes, FaBars} from "react-icons/fa"
import Side from "./SideHeader"

const Header = () => {
  return (
    <>
      <Container>
        <Wrapp>
          <LogoHold>
            <Logo src={log} />
            <div>E-Medi</div>
          </LogoHold>
          <Navig>
            <Nav>Home</Nav>
            <Nav>Consult</Nav>
            <Nav>Pharmacy</Nav>
          </Navig>
          <Right>
            <Button>Appointment</Button>
            <Hld style={{ border: "none" }}></Hld>
          </Right>
          <Burger>
            <Men
              id="bar"
              onClick={() => {
                document.getElementById("display").style.top = "0px";
                document.getElementById("bar").style.display = "none";
                document.getElementById("times").style.display = "block";
              }}
            />
            <CancleIcon
              id="times"
              onClick={() => {
                document.getElementById("display").style.top = "-1000px";
                document.getElementById("bar").style.display = "block";
                document.getElementById("times").style.display = "none";
              }}
            />
          </Burger>
        </Wrapp>
      </Container>
      <SideMenu id="display">
        <Side />
      </SideMenu>
    </>
  );
}

export default Header
const Burger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: calc(100% - 30%);
    height: 70px;
    padding-right: 10px;
    left:80%;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 30px; */
    position: fixed;
    top: 0;
  }
`;
const SideMenu = styled.div`
  width: 200px;
  height: 650px;
  background-color: gray;
  position: fixed;
  top: -3000px;
  z-index: 10;
  transition: all 2s ease;
`;
const CancleIcon = styled(BiMenuAltLeft)`
  font-size: 30px;
  display: none;
`;
const BarIcon = styled(FaBars)`
  font-size: 30px;
`;
const Container = styled.div`
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 50px; */
  /* background: darkcyan; */
`;
const Wrapp = styled.div`
  display: flex;
  width: 100%;
  height:100%;
  justify-content: space-between;
  /* background: peachpuff; */
  align-items: center;
 
`;
const Logo = styled.img`
width:100px;
  height:60px;
  
`;
const Icon1 = styled.div`

`;
const Icon2 = styled.div``;
const Icon3 = styled.div``;
const Icon4 = styled.div``;


const Hld = styled.div`
width: 11%;
/* background: plum; */
border-right: 1px solid black;
display: flex;
justify-content:center;
align-items: center;
font-size: 20px;
display:none;
:hover{
  cursor: pointer;
}
`
const Men = styled(GrMenu)`
  font-size: 30px;
`;
const Right = styled.div`
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  @media (max-width: 800px) {
    display:none;
  }
`;

const Navig = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height:100%;
  width:50%;
  /* background:brown; */
  @media (max-width: 800px) {
    display: none;
  }
`;
const LogoHold = styled.div`
  width: 30%;
  @media (max-width:800px){
    width:70%;
  }
  /* background: red; */
  /* color: #fff; */
  display: flex;
  div {
    padding: 0;
    margin: 0;
      font-size: 25px;
      font-weight:600;
  
  }
  align-items: center;
`;
const Nav = styled.div`
  /* margin-right: 25px; */
  height: 60%;
  /* background:red; */
  display: flex;
  align-items: center;

  &.active {
    border-bottom: 1px solid skyblue;
    color:skyblue;

    transition: all 550ms;
    transform: scale(1);
    transform-origin: center left;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Button = styled.div`
  width: 150px;
  height: 50px;
  background: #3e435e;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 5px; */
  color: #fff;
  
  &.active {
      height: 3px;
      width: 80%;
      transition: all 550ms;
      transform: scale(1);
      transform-origin: center left;
    }
  
  :hover {
    cursor: pointer;
    transform: scale(1.02);
   
  }
`;


// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``


// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``;