import React from 'react'
import styled from "styled-components"
import docMask from "../../ASSETS/Rectangle 11.png"
    
const About = () => {
  return (
    <Container>
      <Left>
        <Rate>
          <Grid>
            500+
            <Text> HAPPY PATIENT</Text>
          </Grid>
          <Grid>
            500+
            <Text> HAPPY PATIENT</Text>
          </Grid>
          <Grid>
            500+
            <Text> HAPPY PATIENT</Text>
          </Grid>
        </Rate>
        <Image src={docMask} />
      </Left>
      <Right>
        <Hold>
          <Button>About us</Button>
          <BText>The Heart And Science Of Medic Test</BText>
          <SText>
            It is a long established fact that a reader will be distracted by at
            its layout. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </SText>
          <List>
            <Li>Comprehensive Inpatient Services</Li>
            <Li>Medical And Surgical Services</Li>
            <Li>Outpatient Services</Li>
            <Li>Medicine & instrument</Li>
            <Li>Specialised Support Service</Li>
            <Li>Instant Operation & Appointment</Li>
          </List>
          <Button2>Register</Button2>
        </Hold>
      </Right>
    </Container>
  );
}

export default About
const Button2 = styled.div`
  width: 200px;
  margin-top: 5px;
  /* border-radius: 5px; */

  height: 50px;
  font-family: Poppins;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* text-transform: uppercase; */
  color: white;
  font-weight: 200;
  outline: none;
  border: 0;
  background-color: #3e435e;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const Left = styled.div`
  width: 50%;
  /* flex: 1; */
  border-top-right-radius: 5px;
  /* min-height: 400px; */
  height:100%;
  background-color: #3e435e;
  justify-content: center;
  align-items: center;
  display: flex;
  /* padding-bottom: 20px; */
  @media (max-width: 800px) {
    flex-direction: column;
    width:100%;
    margin-bottom:100px;
    
  }
`;
const Rate = styled.div`
  width: 30%;
  color:#fff;
  padding: 0 10px;
  height: 100%;
  justify-content: space-around;
  align-items: flex-start;
  display: flex;
  /* color: #fff; */
  /* background-color: peachpuff; */
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: row;
    height:100%;
    width:100%;
    padding:20px 0;
    justify-content:center;
    align-items: center;
  }
`;
const Text = styled.div`
font-size: 25px;
`
const Grid = styled.div`
  /* background: plum; */
  display: flex;
flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* margin-bottom: 30px; */
`;
const Image = styled.img`
  width: 70%;
  border-radius: 6px;
  height: 70%;
  @media (max-width: 800px) {
    object-fit: cover;
    height: 70%;
  }
  /* flex:1; */
`;
const Right = styled.div`
  width: 50%;
  /* flex:1; */
  padding-left: 6 0px;
  min-height: 500px;
  height: 100%;

  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;
const Hold = styled.div`
  display: flex;
  height: 100%;
  /* width: 100%; */

  /* align-items: center; */
  /* background-color: blue; */
  padding: 10px 40px;
  justify-content: space-around;
  flex-direction: column;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    width: 80%;
    padding:30px 20px;
    height:100%;
  }
  
`;
const BText = styled.div`
text-transform: uppercase;
font-weight: 500;
font-size: 40px;
@media(max-width:800px){
  width:80%;
  font-size:25px;
  text-align:center;
  margin:20px 0;
}
`;
const SText = styled.div``;
const List = styled.div`
  @media (max-width: 800px) {
    width: 100%;
    align-items: flex-start;
    margin:30px 0;
  }
`;
const Li = styled.li``;


// const Container = styled.div``;
// const Container = styled.div``;


const Container = styled.div`
  width: 100%;
  height: 100%;

  min-height: 80vh;
  font-family: Poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 150px 0;
  }
`;

const Button = styled.div`
  width: 120px;
  margin-top: 5px;
  border-radius: 5px;
  /* border:1px solid black; */
  height: 30px;
  font-family: Poppins;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* text-transform: uppercase; */
  color: white;
  font-weight: 200;
  outline: none;
  /* border: 0; */
  background-color: #c5c5c5;
  color: #1069f1;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;