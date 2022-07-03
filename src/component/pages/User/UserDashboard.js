import React from "react";
import styled from "styled-components";
import pix from "../../../ASSETS/fa6-solid_user-doctor.png";
import log from "../../../ASSETS/Ellipse 12.png";
import { BiCurrentLocation, BiLocationPlus, BiSearchAlt } from "react-icons/bi";
const DetailUser = () => {
  return (
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
            <Title>Doctors</Title>
          </div>

          <Holder>
            <SearchBar>
              <Top>
                {/* <Icons /> */}
                <div>By+</div>
                {/* <select>
                  <option>Location</option>
                </select> */}
              </Top>
              <Input placeholder="Doctors, Specalists" />
              <Icon1 />
            </SearchBar>
          </Holder>
        </Row2>
        <Row>
          {/* <Div>
            <Topic>Build up your Profile</Topic>
          </Div> */}
          <Hold>
            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>

            {/* card2 */}
            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>
            {/* card 3 */}

            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>
          </Hold>
        </Row>

        {/* Row two */}

        <Row>
          <Hold>
            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>

            {/* card2 */}
            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>
            {/* card 3 */}

            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>
          </Hold>
        </Row>

        {/* Row 3 */}
        <Row>
          <Hold>
            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>

            {/* card2 */}
            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>
            {/* card 3 */}

            <Card>
              {/* <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left> */}
              <Right>
                <Profile>
                  <ImageHold>
                    <Image src={log} />
                    {/* <Div></Div> */}
                  </ImageHold>
                  <NameHold>
                    <Name>Kelechi Dickson</Name>
                    <NameTag>Neurosurgeon</NameTag>
                  </NameHold>
                </Profile>

                {/* <Product>My Product</Product> */}
                <Text>
                  <Icons />
                  <span>Nigeria, Lagos State</span>
                </Text>
                <End>
                  <span>
                    Patients: <b>230</b>
                  </span>
                  <Click>Book Appointment</Click>
                </End>
              </Right>
            </Card>
          </Hold>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default DetailUser;
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
    background: #e5e5e5;
    font-size: 20px;
  }
  display: flex;
  /* align-items: center; */
  /* height: 100%; */
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  flex: 1;
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
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  width: 100%;
  font-weight: bolder;

  align-items: center;
  display: flex;
  margin: 20px 0;

  @media (max-width: 800px) {
    /* min-height: 200px; */
    height: 80%;
    /* margin-bottom: 20px; */
    /* text-align: center; */
    font-size: 80%;
    /* width:80%; */
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
  flex-direction: column;
  height: 100%;
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

const Topic = styled.div``;
const Card = styled.div`
  width: 350%;
  /* height: 200px; */
  display: flex;
  background: #fff;
  align-items: flex-start;
  padding: 30px 15px;
  /* padding-right: 40px;
  padding-left: 40px; */
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
  @media (max-width: 800px) {
    width: calc(100vw - 150px);
    padding: 0;
    align-items: center;
    left: 150px;
  }
`;
