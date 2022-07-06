import React from "react";
import styled from "styled-components";
import pix from "../../../ASSETS/file-icons_dashboard.png";
import user from  "../../../ASSETS/fa-solid_users.png"
import user2 from "../../../ASSETS/fa-solid_users2.png";
import user3 from "../../../ASSETS/uis_schedule.png"
import { BiCurrentLocation, BiLocationPlus, BiSearchAlt } from "react-icons/bi";
import SideNav from "../Pharmacy/PharmacyDashboard"
const DetailDoctor = () => {
  return (
    <div>
      <SideNav />
      <Container>
        <Wrapper>
          <Row2>
            <div
              style={{
                display: "flex",
                width: "30%",
                alignItems: "center",
              }}
            >
              <Icon2 src={pix} />
              <Title>Dashboard</Title>
            </div>
          </Row2>
          <Row>
            <Hold>
              <Card>
                <Right>
                  <End>
                    <img src={user} />
                    <Text>Number of available Doctors</Text>
                  </End>
                  <Divs>235</Divs>
                </Right>
              </Card>
              <Card>
                <Right>
                  <End>
                    <img src={user} />
                    <Text>Number of available Pharmacists</Text>
                  </End>
                  <Divs>315</Divs>
                </Right>
              </Card>
              <Card>
                <Right>
                  <End>
                    <img src={user3} />
                    <Text>Number of Appointments</Text>
                  </End>
                  <Divs>20</Divs>
                </Right>
              </Card>
            </Hold>
          </Row>

          {/* Row two */}
          <Row>
            <Hold>
              <Card>
                <Right>
                  <End>
                    <img src={user} />
                    <Text>Number of available Doctors</Text>
                  </End>
                  <Divs>235</Divs>
                </Right>
              </Card>
              <Card>
                <Right>
                  <End>
                    <img src={user} />
                    <Text>Number of available Pharmacists</Text>
                  </End>
                  <Divs>315</Divs>
                </Right>
              </Card>
              <Card>
                <Right>
                  <End>
                    <img src={user2} />
                    <Text>Number of Appointments</Text>
                  </End>
                  <Divs>20</Divs>
                </Right>
              </Card>
            </Hold>
          </Row>

          {/* Row 3 */}
        </Wrapper>
      </Container>
    </div>
  );
};

export default DetailDoctor;
// const Container = styled.div``
const Name = styled.div``;
const NameTag = styled.div`
  font-size: 12px;
`;
const NameHold = styled.div`
  /* width: 100%; */
`;
const ImageHold = styled.div`
  /* width: 100%; */
  margin-right: 15px;
  display: flex;
  /* background: red; */
`;
const Image = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid silver;
`;
const Div = styled.div`
  width: 10px;
  border-radius: 50%;
  height: 10px;
  background: chartreuse;
  position: absolute;
  margin: 0 5px;
`;
const Profile = styled.div`
  display: flex;
  /* margin: 20px 0; */
  /* height: 15%; */
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  /* background: #009688; */
  /* justify-content: space-between; */
  /* width: 70%; */
  /* flex-direction: row; */
  @media (max-width: 800px) {
    flex-direction:column;
    justify-content: center;

  }
`;
const Icon1 = styled(BiSearchAlt)`
  font-size:20px;
  /* color: ; */
  cursor: pointer;
  /* background: grey; */
  height: 100%;
  /* width: 40px; */
  padding: 0 10px;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
           

const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: none;
  /* flex: 1; */
  width: 100%;
  height: 100%;
  padding-left: 15px;
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
  ::placeholder {
    font-size: 15px;
    color: grey;
    text-align: center;
    font-family: Nunito;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;
const SearchBar = styled.div`
  height: 50px;
  :focus {
    outline: 3px solid #009688;
  }
  border-radius: 3px;
  padding: 0 10px;
  background: #fff;
  /* width:100%; */
  /* border: 1px solid blue; */
  width: 80%;
  @media (max-width: 800px) {
    width: 80%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Holder = styled.div`
  /* margin-bottom: 30px; */
  select {
    width: 200px;
    /* background: blue; */
    cursor: pointer;
    color: #009688;
    background: #E5E5E5;
    font-size: 20px;
  }
  display: flex;
  /* align-items: center; */
  /* height: 100%; */
  justify-content:center;
  align-items: center;
  /* width: 100%; */
  flex:1;
  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 0;
  }
  /* background-color:blue; */
  justify-content: center;
`;
const Icons = styled(BiLocationPlus)`
margin-right: 10px;
color: red;
`;
const Top = styled.div`
  /* width: 100%; */
  font-size: 19px;
  display: flex;
  width: 20%;
  /* justify-content:center; */
  align-items: center;
  select {
    border: none;
    outline: none;
    font-size: 20px;
  }
`;
const Icon2 = styled.img`
  /* color: red; */
  padding: 0 30px;
  @media (max-width: 800px) {
    /* flex-direction: column;
    align-items: flex-start; */
    width: 25px;
    height: 25px;
  }
`;
const Row2 = styled.div`
  width: 100%;
  padding: 20px 0;
  background: #e5e8ef;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 80%;
  }
`;
const Title = styled.div`
  color: grey;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 800px) {
    /* flex-direction: column;
    align-items: flex-start; */
    font-size: 10px;
  }
`;
const Click = styled.div`
  width: 150px;
  height: 40px;
  padding: 0 10px;
  background: #1069e1;
  display: flex;
  color:#fff;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width:50%;
    font-size: 50%;
  }
`;
const End = styled.div`
  width: 100%;
  /* margin-top:10px; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items:center ; */
  margin-right: 10px;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
const Text = styled.div`
  width: 100%;
  font-weight: lighter;
  font-size: 20px;
  align-items: center;
  display: flex;
  margin: 10px 0;

  @media (max-width: 800px) {
    /* min-height: 200px; */
    height: 80%;
    /* margin-bottom: 20px; */
    /* text-align: center; */
    font-size: 80%;
    /* width:80%; */
    span{
      font-size: 60%;
    }
    /* background:green; */
  }
`;
const Product = styled.div`
  color: grey;
  padding-bottom: 15px;
  @media (max-width: 800px) {
    font-size: 14px;
    /* padding-bottom: 5px; */
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  height: 100%;
  align-items: center;
  justify-content: center;
  color:#fff;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
const Div1 = styled.div`
  display: flex;
  /* justify-content:center; */
  align-items: center;
  flex-direction: column;
  /* position: absolute; */
  /* left:20px; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

const Divs = styled.div`
font-size: 26px;
font-weight: 800;
`;
const Card = styled.div`
  width: 30%;
  /* height: 200px; */
  display: flex;
  background: #009688;
  align-items: flex-start;
  padding: 30px 15px;
  margin-right: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 350ms;
  border-radius: 10px;
  :hover {
    transition: all 350ms;
    background: #009688;
    cursor: pointer;
    color: #fff;

    ${Product} {
      color: #fff;
    }
    ${Click} {
      background: #fff;
      color: #009688;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin: 20px 0;
    min-height: 200px;
    height: 100%;
    flex-direction: column;
    padding: 0 10px;
    justify-content:space-around;
    align-items: center;
    /* padding-bottom:10px; */
  }
`;
const Hold = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background: purple; */
 align-items: center;
 justify-content:center;
  margin: 40px 0;
  /* height: 212px; */
  background: #fff;
  @media (max-width: 800px) {
    /* width: 100%; */
    flex: 1;
    height: 100%;
  }
  /* flex-direction: column; */
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  /* justify-content: center; */
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 250px);
  display: flex;
  justify-content: center;
  position: absolute;
  left: 220px;
  @media (max-width: 800px) {
    width: calc(100vw - 150px);
    padding: 0;
    align-items: center;
    left: 150px;
  }
  @media (max-width: 500px) {
    width: calc(100vw - 100px);
    left: 100px;
  }
`;
