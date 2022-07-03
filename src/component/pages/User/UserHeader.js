import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
const UserHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Nav to="/">
            Book <br />
            appointment
          </Nav>
          <Nav to="/2">
            Consult <br />
            with a doctor
          </Nav>
          <Nav to="/1">
            Order <br />
            Medicines
          </Nav>
        </Header>
        
      </Wrapper>
    </Container>
  );
}

export default UserHeader
// const Container = styled.div``
const Nav = styled(Link)`
  width: 20%;
  text-decoration: none;
  padding: 10px 0;
  transition: all 350ms;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* background-color: lightgray; */
  text-align: center;
  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(0.95);
  }
  @media (max-width: 500px) {
    font-size: 12px;
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


const Wrapper = styled.div`
  width: 100%;
  /* display: flex; */
  /* background: yellowgreen; */
`;
const Container = styled.div`
  width: 100% ;
  height: 70px;
  display: flex;
  /* justify-content:center; */
  /* align-items: center; */
  /* background-position: center; */
  /* background-image: url(); */
`;