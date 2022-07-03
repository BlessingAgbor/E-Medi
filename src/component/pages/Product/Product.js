import React from "react";
import styled from "styled-components";
import pix from "../../../ASSETS/fa6-solid_user-doctor.png";
import log from "../../../ASSETS/clofenac.png";
import pharm from "../../../ASSETS/pharm.png";
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
              <Icon2 src={pharm} />
              <Title>Pharmacy</Title>
            </div>

            <Holder>
              <SearchBar>
                <Input placeholder="Location" />
                <Icons />
              </SearchBar>
              <SearchBar2>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  By
                  <select>
                    <option>Name</option>
                    <option>Brand</option>
                    <option>API</option>
                  </select>
                </div>

                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Input placeholder="Search" />
                  <Icon1 />
                </div>
              </SearchBar2>
            </Holder>
          </Row2>
          <Row>
            <Hold>
              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <div>
                      <img src={pharm} />
                      <span>Shanna Pharmacy</span>
                    </div>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>

              {/* card2 */}
              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>
              {/* card 3 */}

              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>
            </Hold>
          </Row>

          {/* Row two */}

          <Row>
            {/* <Div>
            <Topic>Build up your Profile</Topic>
          </Div> */}
            <Hold>
              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>

              {/* card2 */}
              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>
              {/* card 3 */}

              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>
            </Hold>
          </Row>

          {/* Row 3 */}
          <Row>
            {/* <Div>
            <Topic>Build up your Profile</Topic>
          </Div> */}
            <Hold>
              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>

              {/* card2 */}
              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>
              {/* card 3 */}

              <Card2>
                <Right>
                  <Profile2>
                    <Image2 src={log} />
                  </Profile2>
                  <Text>
                    <NameHold>
                      <Name>Paracetamol</Name>
                      <NameTag>120mg</NameTag>
                    </NameHold>
                    <span>#200</span>
                  </Text>
                  <End>
                    <img src={pharm} />
                    <span>Shanna Pharmacy</span>
                    <Click>Buy</Click>
                  </End>
                </Right>
              </Card2>
            </Hold>
          </Row>
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
  width: 100%;
  display: flex;
  flex-direction: column;
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
`;
const Icon1 = styled(BiSearchAlt)`
  font-size: 20px;
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
const SearchBar2 = styled.div`
  height: 50px;
  :focus {
    outline: 3px solid #009688;
  }
  border-radius: 3px;
  padding: 0 10px;
  background: #fff;
  /* width:100%; */
  /* border: 1px solid blue; */
  width: 40%;
  @media (max-width: 800px) {
    width: 80%;
    margin: 10px 0;
    flex-direction: column;
    height: 100%;
    padding: 10px 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.div`
  height: 50px;
  select {
    width: 80%;
    background: blue;
    cursor: pointer;
    color: #009688;
    background: #e5e5e5;
    font-size: 15px;
    border: none;
    background: #fff;
    margin-left: 10px;
  }
  :focus {
    outline: 3px solid #009688;
  }
  border-radius: 3px;
  padding: 0 10px;
  background: #fff;
  /* width:100%; */
  /* border: 1px solid blue; */
  width: 40%;
  @media (max-width: 800px) {
    width: 80%;
    margin: 10px 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Holder = styled.div`
  /* margin-bottom: 30px; */
  margin-top: 30px;
  select {
    width: 40%;
    /* background: blue; */
    cursor: pointer;
    color: #009688;
    background: #e5e5e5;
    font-size: 15px;
    border:none;
    background: #fff;
    margin-left: 10px;
  }
  display: flex;
  /* align-items: center; */
  /* height: 100%; */
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* flex: 1; */
  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 0;
    flex-direction: column;
  }
  /* background-color:blue; */
  /* justify-content: center; */
`;
const Icons = styled(BiLocationPlus)`
  margin-right: 10px;
  /* color: red; */
  cursor: pointer;
`;
const Top = styled.div`
  /* width: 100%; */
  font-size: 19px;
  display: flex;
  width: 40%;
  /* justify-content:center; */
  align-items: center;
  background: #fff;
  select {
    border: none;
    outline: none;
    font-size: 20px;
  }
`;
const Icon2 = styled.img`
  /* color: red; */
  padding: 0 30px;
  font-size: 18px;
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
  /* justify-content: center; */
  flex-direction: column;

  /* align-items: center; */
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
  width: 70px;
  height: 40px;
  padding: 0 10px;
  background: #009688;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 50%;
    font-size: 80%;
  }
`;
const End = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  @media (max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
    @media (max-width: 800px) {
      display: none;
    }
    div{
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
  align-items: center;
`;
const Text = styled.div`
  width: 100%;
  font-weight: bolder;

  align-items: center;
  display: flex;
  margin: 20px 0;
  justify-content:space-between;
  @media (max-width: 800px) {
    height: 80%;
    flex-direction: column;
    font-size: 80%;
    justify-content:center;
    
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
  /* width: 50%; */

  display: flex;
  flex-direction: column;
  height: 100%;
 
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Image2 = styled.img`
  width: 150px;
  height: 150px;
position: absolute;
margin-bottom: 40px;
  /* border-radius: 50%; */
  /* border: 1px solid silver; */
  @media(max-width:800px){
    width: 80px;
    height: 80px;
  }
`;

const Profile2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* height:70px;
  background: red; */
  margin-bottom:30px ;
  margin-top: 20px;
  @media (max-width: 800px) {
    width:80%;
  }
  /* background: #009688; */
  /* justify-content: space-between; */
  /* width: 70%; */
  /* flex-direction: row; */
`;

const Card2 = styled.div`
  width: 350%;
  /* height: 200px; */
  display: flex;
  background: #e5e8ef;
  align-items: flex-start;
  padding: 30px ;
  padding-right: 30px;
  padding-left: 30px;
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  transition: all 350ms;
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
    width: 50%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin: 20px 0;
    min-height: 200px;
    height: 100%;
    flex-direction: column;
    /* padding-bottom:10px; */
  }
`;


const Hold = styled.div`
  width: 100%;
  display: flex;
  /* height: 212px; */
  /* background: brown; */
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  /* background: hotpink; */
`;

const Container = styled.div`
  width: calc(100vw - 250px);
  /* min-height: 100vh; */
  /* height: 150%; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  /* left:0; */
  left: 220px;
  /* padding: 0; */
  /* background: wheat; */
  @media (max-width: 500px) {
    width: calc(100vw - 100px);
    left:100px;
  }
  @media (max-width: 800px) {
    width: calc(100vw - 150px);
    padding: 0;
    align-items: center;
    /* left: 150px; */
  }
`;
