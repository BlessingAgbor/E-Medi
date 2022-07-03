import React from "react";
import styled from "styled-components";
import bg from "../../../ASSETS/steward-masweneng-uIvjLq_q5g8-unsplash.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
 
const Detail = () => {
  return (
    <Container>
      <Wrapper>

        
        
        
        <Hero>
          <Top>Welcome to E-Medi dental care</Top>
          <BText>
            We offer <b>dental health </b>
            <br />
            sevices for alll ages.
          </BText>
          <SText>
            Our main dental services include family dentistry, dental implants,
            teeth whitening and different treatments.
          </SText>
          <Button>MAKE AN APPOINTMENT</Button>
        </Hero>
          <SearchBar>
            <Input placeholder="Search here" />
            <Icon1 />
          </SearchBar>
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
  padding-left: 10px;
`;

const SearchBar = styled.div`
  height: 40px;
  border-radius: 30px;
  background: #fff;
  border: 1px solid blue;
  width: 40%;
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
  padding: 0 10px;
`;
const Button = styled.div``;
const SText = styled.div``;
const BText = styled.div``;
const Top = styled.div``;
const Hero = styled.div``;
const Wrapper = styled.div`
  width: 60%;
  display: flex;
`;
const Container = styled.div`
  width: calc(100vw - 250px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-position: center;
  /* left:250; */
  right: 0;
  background-image: url(${bg});
`;
