import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import { AiFillHome, AiOutlineHeart, AiFillSchedule } from "react-icons/ai";
import {MdDashboard} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {GoRequestChanges} from "react-icons/go"
import {BiBookAlt} from "react-icons/bi"
// import pix from "/logo192.png"
import log1 from "../../../ASSETS/techFairLogo.svg";
import log from "../../../ASSETS/Ellipse 12.png";
import log2 from "../../../ASSETS/ant-design_dashboard-outlined.png";
import log3 from "../../../ASSETS/bx_log-out-circle.png";
import log4 from "../../../ASSETS/fontisto_doctor.png";
import log5 from "../../../ASSETS/la_tablets.png";



const PharmacyDashboard = () => {
  return (
    <Container>
      <Wrapper>
        <Divs>
          <img src={log1} />
          <Logo>E-Medi</Logo>
        </Divs>
        <Profile>
          <ImageHold>
            <Image src={log} />
            <Div></Div>
          </ImageHold>
          <NameHold>
            <Name>Kai Smith</Name>
            <NameTag>General Surgeon</NameTag>
          </NameHold>
        </Profile>

        <Hold>
          <NavHold>
            <Link
              to="/pharm"
              style={{
                textDecoration: "none",
              }}
            >
              <Nav>
                <NV>
                  <Icon1 src={log2} />
                  <span>Dashboard</span>
                </NV>
                {/* <Span></Span> */}
              </Nav>
            </Link>

            <Link
              to="/doc"
              style={{
                textDecoration: "none",
              }}
            >
              <Nav>
                <NV>
                  <Icon1 src={log4} />
                  <span>Doctors</span>
                </NV>
                {/* <Span></Span> */}
              </Nav>
            </Link>

            <Nav>
              <NV>
                <Icon3 />
                <span>Requests</span>
                <Span>1</Span>
              </NV>
            </Nav>

            <Link to="drugs" style={{
                textDecoration:"none"
            }}>
              <Nav>
                <NV>
                  <Icon1 src={log5} />
                  <span>Pharmacy</span>
                </NV>
                {/* <Span>1</Span> */}
              </Nav>
            </Link>
          </NavHold>
          <Settings>
            <div>
              <Icon1 src={log3} />
              <span>Logout</span>
            </div>
          </Settings>
        </Hold>
      </Wrapper>
    </Container>
  );
}

export default PharmacyDashboard
const NV = styled.div`
  display: flex;
  justify-content: flex-start;
  /* background: grey; */
  align-items: center;
  cursor: pointer;
  span{
    font-size: 15px;
    margin:0  15px ;
  }
  width: 80%;
  /* justify-content:space-between; */
  @media (max-width: 800px) {
    justify-content:center;
span{
  display:none;
}

  }
  /* border: none;
  outline: none;
  background: none;
  background: #fff; */
  /* background: red; */
  align-items: center;
`;

const Span = styled.div`
  padding: 0 7px;
  border-radius: 3px;
  background: #009688;
  color: #fff;
  font-size: 14px;
  @media (max-width: 800px) {
    margin-left: 10px;
  }
`;
// const Icon9 = styled(FiSettings)`
//   font-size: 30px;

//   margin-right: 10px;
// `;
const Settings = styled.div`
  display: flex;
  justify-content: center;
  /* background: red; */
  align-items: center;
  font-size: 15px;
  width: 100%;

  div {
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
      display: flex;
      width: 80%;
    }
  }
  padding: 20px 0;
  span {
    margin: 0 15px;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
// const Icon4 = styled(BiBookAlt)`
//   font-size: 30px;

//   margin-right: 5px;
// `;
const Name = styled.div`
@media (max-width: 500px){
  font-size: 10px;
}
`
const NameTag = styled.div`
font-size: 12px;
@media (max-width: 500px){
  font-size: 6px;
}
`
const NameHold = styled.div`
/* width: 100%; */

`
const ImageHold = styled.div`
/* width: 100%; */
margin-right: 15px;
display: flex;
/* background: red; */

`
const Image = styled.img`
width:40px;
height: 40px;

border-radius:50%;
border: 1px solid silver;
`
const Div = styled.div`
width:10px;
border-radius: 50%;
height: 10px;
background: chartreuse;
position: absolute;
margin:0 5px;
`
const NavHold = styled.div`
height: 60%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top:20px;
/* height:50vh; */
/* background: peachpuff; */
width: 100%;
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  height: 50px;
  justify-content: center;
  /* background: red; */
  /* padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  margin: 20px 0; */

  /* background: green; */
  cursor: pointer;
  &.active {
    border-left: 1px solid #009688;
    background: #009688;
  }

  /* background: #123456; */
  font-size: 18px;
  /* justify-content: space-around; */
  align-items: center;
  /* border-radius: 5px; */
  /* background: blanchedalmond; */
`;
// const Icon5 = styled(AiFillHome)`
//   font-size: 30px;

//   margin-right: 5px;
// `;
 const Icon3 = styled(GoRequestChanges)`
   font-size: 15px;
`
//   margin-right: 5px;
// `;
// const Icon2 = styled(AiFillSchedule)`
//   font-size: 30px;

//   margin-right: 5px;
// `;
const Icon1 = styled.img`
  /* font-size: 30px; */
  margin-right: 5px;
`;
const Logo = styled.div`
font-size: 20px;
/* margin-bottom: 35px; */
color:#fff;
@media (max-width:500px){
  font-size: 15px;
  padding-bottom: 20px;
}
/* display: flex;
justify-content:center;
align-items: center; */
/* padding-left: 20px; */

`
const Hold = styled.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  /* background: yellow; */
  /* align-items: center; */
 /* flex:1; */
 width: 100%;
  height: 100%;
`;


const Profile = styled.div`
  display: flex;
  /* margin: 20px 0; */
  height: 15%;
  width:100%;
  justify-content:center;
  align-items: center;
  @media(max-width: 500px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  background: #009688;
  /* justify-content: space-between; */
  /* width: 70%; */
  /* flex-direction: row; */
`;

const Container = styled.div`
  /* width: 100%; */
  font-family: poppins;
  width: 220px;
  display: flex;
  position: fixed;
  height: 100vh;
  color: #2e3097;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 10;
  @media (max-width: 800px) {
    width: 150px;
    height: 100%;
    position: fixed;
  }
  @media(max-width: 500px){
    width:100px;
    /* left:100px; */

  }
  background: #33354a;
  color: #fff;
`;
 const Divs = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width:500px){
    flex-direction:column;
    justify-content: center;
    align-items: center;
   }
   background: #e5e8ef;
   img {
     width: 50px;
     height: 50px;
   }
 `;
const Wrapper = styled.div`
  width: 100%;
  /* background: grey; */
  display: flex;
  /* padding: 0 15px; */
  height: 100%;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  /* min-height: 80vh; */

`;

// const Container = styled.div``;
