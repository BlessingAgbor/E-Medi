import React from "react";
import styled from "styled-components";
import bg from "../../../ASSETS/pexels-rodnae-productions-6129681.jpg";
import bgg from "../../../ASSETS/deliverGuy.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
const Detail = () => {
  return (
    <Container>
      <Wrapper>
        <Hero>
          <Div>
            <Top>Your home for health</Top>
            <BText>
              <b>Book an appointment</b>
            </BText>
          </Div>
          <Holder>
            <SearchBar>
              <Input placeholder="Doctors, Clinics, Specalists" />
              <Icon1 />
            </SearchBar>
          </Holder>
        </Hero>

        {/* Check up */}
        <CheckUp>
          <Top1>
            Affordable full health <br />
            checkups at home
          </Top1>
        </CheckUp>
        <CheckUp>
          {/* first card */}
          <Card>
            <Color>
              <Name>Young Nigerian Health Checkup</Name>
              <DivHold>
                <Up></Up>
                <Left></Left>
                <Down></Down>
              </DivHold>
            </Color>
            <Middle>
              <div
                style={{
                  width: "10px ",
                  height: "10px",
                  border: "1px solid black",
                  borderRadius: "2px",
                }}
              ></div>
              <Li>
                <b>Includes 60 Tests</b>
              </Li>
              <Div2>and 57 other tests</Div2>
            </Middle>
            <Down2>
              <Consult>
                <b>Offer 0 FREE online doctor consultation</b>
              </Consult>
              <Price>
                <Span
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <b>#749 </b>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "3px",
                      textDecoration: "line-through",
                    }}
                  >
                    #1150
                  </span>
                </Span>
                <View>View More</View>
              </Price>
            </Down2>
          </Card>

          {/* Second card */}

          <Card>
            <Color>
              <Name>Young Nigerian Health Checkup</Name>
              <DivHold>
                <Up></Up>
                <Left></Left>
                <Down></Down>
              </DivHold>
            </Color>
            <Middle>
              <div
                style={{
                  width: "10px ",
                  height: "10px",
                  border: "1px solid black",
                  borderRadius: "2px",
                }}
              ></div>
              <Li>
                <b>Includes 60 Tests</b>
              </Li>
              <Div2 style={{ borderButtom: "1px solid grey" }}>
                and 57 other tests
              </Div2>
            </Middle>
            <Down2>
              <Consult>
                <b>Offer 0 FREE online doctor consultation</b>
              </Consult>
              <Price>
                <Span
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <b>#749 </b>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "3px",
                      textDecoration: "line-through",
                    }}
                  >
                    #1150
                  </span>
                </Span>
                <View>View More</View>
              </Price>
            </Down2>
          </Card>

          {/* third card */}

          <Card>
            <Color>
              <Name>Young Nigerian Health Checkup</Name>
              <DivHold>
                <Up></Up>
                <Left></Left>
                <Down></Down>
              </DivHold>
            </Color>
            <Middle>
              <div
                style={{
                  width: "10px ",
                  height: "10px",
                  border: "1px solid black",
                  borderRadius: "2px",
                }}
              ></div>
              <Li>
                <b>Includes 60 Tests</b>
              </Li>
              <Div2 style={{ borderButtom: "1px solid grey" }}>
                and 57 other tests
              </Div2>
            </Middle>
            <Down2>
              <Consult>
                <b>Offer 0 FREE online doctor consultation</b>
              </Consult>
              <Price>
                <Span
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <b>#749 </b>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "3px",
                      textDecoration: "line-through",
                    }}
                  >
                    #1150
                  </span>
                </Span>
                <View>View More</View>
              </Price>
            </Down2>
          </Card>

          {/* fourth card */}
        </CheckUp>

        <Button>
          <b>More packages</b>
        </Button>
        {/* Components alike */}

        {/* One */}
        <Two>
          <RightDoc>
            <LiHold>
              <Top3>
                Instant appointments with <br />
                doctors.<b>Guaranteed.</b>
              </Top3>
            </LiHold>
            <LiHold>
              <Rate>
                <b>100,000 </b> Verified Doctors
              </Rate>
              <Rate>
                <b>3M+ </b>
                Patient Recommendation
              </Rate>
              <Rate>
                <b>25M </b>
                Patient/ year
              </Rate>
              <Connect>Connect with top doctors from</Connect>
              <Button>Find me the right doctors</Button>
            </LiHold>
          </RightDoc>
          <RightDoc>
            <img
              src={bg}
              style={{
                background: "none",
              }}
            />
          </RightDoc>
        </Two>
        {/* two */}
        <Two>
          <RightDoc>
            <img src={bgg} />
          </RightDoc>
          <RightDoc>
            <LiHold>
              <Top3>
               Get all your medicines. <br />
                <b>Everytime. On time.</b>
              </Top3>
            </LiHold>
            <LiHold>
              <Rate>Guaranteed availability</Rate>
              <Rate>
                Over
                <b>130,000+ </b>
                genuine medicines
              </Rate>
              <Rate>
                Home delivery in
                <b>24hrs </b>
              </Rate>
              {/* <Connect>Connect with top doctors from</Connect> */}
              <Button>Order Medicines</Button>
              <div style={{
                marginBottom:"20px"
              }}>
                Last order delivered <b>33mins ago</b> in Jakande
              </div>
            </LiHold>
          </RightDoc>
        </Two>
      </Wrapper>
    </Container>
  );
};

export default Detail;
// const Container = styled.div``
// const Container = styled.div``;
const Two = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: azure;
  @media (max-width: 800px) {
    flex-direction: column;

  }
`;
const Connect = styled.div`
margin-top: 20px;
color: grey;
margin-bottom: 40px;
`;
const Rate = styled.li`
list-style: square;
font-size: 17px;
margin: 13px 0;

`;
const LiHold = styled.div`
width: 80%;
/* background: papayawhip; */
/* display: flex;
align-items: flex-end;
flex-direction: column; */
margin-top: 30px;
@media (max-width: 800px) {
  display: flex;
  justify-content:center;
  /* align-items: center; */
  flex-direction: column;
}
`;
const Top3 = styled.div`
font-size: 30px;
@media (max-width: 800px) {
  /* font-size: 20px; */
  font-size: larger;
}
`;
const RightDoc = styled.div`
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
  padding: 30px 10px;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
      object-fit:contain;
      height: 100%;
    }
  }
  img {
    /* flex: 1; */
    width: 100%;
    height: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      background: darkblue;
      object-fit:contain;
  }
`;
const Button = styled.div`
  width: 250px;
  background: darkblue;
  padding: 10px 0;
  text-align: center;

  margin: 20px 0;
  color: #fff;
  border-radius: 3px;
  margin-left: 20px;
`;
const View = styled.div`
  width: 30%;
  border: 1px solid blue;
  text-align: center;
  padding: 5px 0;
  color: blue;
  transition: all 500ms;

  :hover {
    cursor: pointer;
    transition: all 500ms;
    transform: scale(1.02);
    color: #fff;
    border: 2px solid #fff;
    background: darkblue;
  }
`;
const Span = styled.div`

`
const Price = styled.div`
display: flex;
width: 100%;
justify-content:space-between;
`;
const Consult = styled.div`
color:green;
margin-bottom: 20px;
`
const Down2 = styled.div`
  background: azure;
  height: 70px;
  padding: 15px 10px;
  @media (max-width: 800px) {
    padding: 25px 10px;
  }
`;
const Div2 = styled.div`
  padding-left: 15px;
  margin-bottom: 10px;
  border-bottom:1px solid grey ;
`;
const Li = styled.div`
  padding-left: 15px;
  margin-bottom: 10px;
`;
const Middle = styled.div`
  width: 80%;
  background: #fff;
  padding-left: 10px;
  padding-top: 10px;
`;
const Down = styled.div`
  width: 10px;
  height: 10px;
  background: lightgray;
  border-radius: 50%;
`;
const Left = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 30px;
  border: 7px solid lightgray;
  border-radius: 50%;
`;
const Up = styled.div`
width:30px;
height:30px;
background: lightgray;
border-radius: 50%;

`;
const DivHold = styled.div`
  width: 20%;
  /* background: pink; */

  opacity: 0.4;
  @media (max-width: 800px) {
    /* width: 40%; */
    padding-right: 15px;
  }
`;
const Name = styled.div`
font-size: 17px;
`
const Color = styled.div`
  /* padding: 0 10px; */

  width: 100%;
  /* height: 60%; */
  background: navy;
  border-radius: 3px 3px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* padding: 10px 20px; */
  font-size: 19px;
  color: #fff;
`;
const Card = styled.div`
  width: 30%;
  /* min-height: 200px;
  height: 100%; */
  background: #fff;

  border-radius: 3px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  /* background: tan; */
  @media (max-width: 800px) {
    width: 100%;
  }
  margin: 20px 0;
`;
const Top1 = styled.div`
  font-size: 23px;
  font-weight: 600;
  @media (max-width: 800px) {
  text-align: center;
  }
`;
const CheckUp = styled.div`
  width: 95%;
  justify-content:space-between;
  flex-wrap: wrap;
  display: flex;
  /* height: 100%; */
  padding: 0 10px ;
  /* flex-direction: column; */
  @media (max-width: 800px) {
    width: 80%;
    justify-content: center;
    align-items: center;
  }
`;
const Nav = styled.div`
  width: 20%;
  transition: all 350ms;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* background-color: lightgray; */
  text-align: center;
  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(0.95);
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;

  /* align-items: center; */
  justify-content: space-around;
  margin: 10px 0;
  margin-bottom: 30px;
`;
const API = styled.div``;
// const Name = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
`;
// const Card = styled.div`
//   width: 200px;
//   padding: 10px 20px;
//   height: 200px;
//   border-radius: 3px;
//   background: brown;
// `;
const Hold = styled.div`
  width: 100%;
  display: flex;
  background: #123456;
  justify-content: center;
`;
const Icon1 = styled(BiSearchAlt)`
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  background: grey;
  height: 100%;
  width: 40px;
  padding:0 10px;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: none;
  flex: 1;
  height: 100%;
  padding-left: 15px;
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
  ::placeholder {
    font-size: 20px;
    color: grey;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

const SearchBar = styled.div`
  height: 50px;
  :focus {
    outline:3px solid blue;
  }
  border-radius: 3px;
  background: #fff;
  border: 1px solid blue;
  width: 60%;
  @media (max-width: 800px) {
    width: 80%;
  }
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Icon = styled(GiHamburgerMenu)`
  font-size: 30px;
  margin-right: 15px;
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;
const Holder = styled.div`
  margin-bottom: 30px;
  select {
    width: 200px;
    background: blue;
    cursor: pointer;
    color: #fff;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 20px;
  }
  display: flex;
  /* align-items: center; */
  /* height: 100%; */
  /* justify-content:center; */
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20vh;
  height: 100px;
  margin-bottom: 20px;
  /* background: red; */
`;

const SText = styled.div`
  font-size: 20px;
`;
const BText = styled.div`
  font-size: 30px;
  @media (max-width: 800px) {
    font-size: 19px;
  }
`;
const Top = styled.div``;
const Hero = styled.div`
  width: 100%;
  color: #fff;
  height: 40vh;
  background-color: darkblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width:100%;
  }
  /* padding: 30px 0; */
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* height: 100%; */

  flex-direction: column;
  @media (max-width: 800px) {
    align-items: center;
  }
  /* background: yellowgreen; */
`;
const Container = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 70px); */
  height: 100%;
  margin: 0;
  display: flex;
  box-sizing: border-box;
  padding: 0;
  /* background: #fff; */
  /* background: lightgray; */

  /* justify-content:center; */
  /* align-items: center; */
  /* background-position: center; */
  /* left:250; */
  /* background-image: url(); */
`;
