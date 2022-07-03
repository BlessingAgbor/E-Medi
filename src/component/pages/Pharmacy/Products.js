import React from "react";
import styled from "styled-components";
import bg from "../../../ASSETS/steward-masweneng-uIvjLq_q5g8-unsplash.jpg";

import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import Product from "../../BlessingComp/Display"
const Detail = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Icon />
          <Holder>
            <div
              style={{
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  color: "blue",
                }}
              >
                Search by:
              </div>
              <select
                style={{
                  marginLeft: "20px",
                }}
              >
                <option>Category</option>
                <option>API</option>
                <option>Name</option>
                <option>Brand</option>
              </select>
            </div>
          </Holder>
          <SearchBar>
            <Input placeholder="Search here" />
            <Icon1 />
          </SearchBar>
        </Holder>
        {/* <Hero>
          <Top></Top>
          <Div>
            <BText>
              We offer <b>dental health </b>
              <br />
              sevices for alll ages.
            </BText>
            <SText>
              Our main dental services include family dentistry, dental
              implants, teeth whitening and different treatments.{" "}
            </SText>
          </Div>
          <Button>MAKE AN APPOINTMENT</Button>
        </Hero> */}
        {/* <Hold>
          <Card>
            <Image src={bg} />
            <Name>Paracetamol</Name>
            <API>Adenotopin Trisphosphate</API>
            <Span></Span>
          </Card>
        </Hold> */}
        <Product />
      </Wrapper>
    </Container>
  );
};

export default Detail;
// const Container = styled.div``

const Icon1 = styled(BiSearchAlt)`
  font-size: 25px;
  cursor: pointer;
`;
const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: none;
  flex: 1;
  height: 100%;
  ::placeholder {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  padding-left: 10px;
`;

const SearchBar = styled.div`
  height: 40px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid blue;
  width: 60%;
  display: flex;
  align-items: center;
  padding:  0 10px;
  justify-content: center;
  @media (max-width: 800px) {
    width: 40%;
  }
`;
const Icon = styled(GiHamburgerMenu)`
  font-size: 30px;
  margin-right: 15px;
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    /* display: block; */
  }
`;
const Holder = styled.div`
  @media (max-width: 800px) {
  width: 80%;
  }
  margin-bottom: 30px;
  margin-top: 30px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  /* background: pink; */
  padding: 0 10px;
  select {
    width: 200px;
    background: #fff;
    cursor: pointer;
    color: darkblue;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 20px;

  }
  display: flex;
  height: 50px;

  align-items: center;
  /* padding: 0 10px; */
`;


const Wrapper = styled.div`
  width: 100%;
  /* background: yellowgreen; */
`;
const Container = styled.div`
  width: 100% ;
  height: 100vh;
  display: flex;
 
`;
