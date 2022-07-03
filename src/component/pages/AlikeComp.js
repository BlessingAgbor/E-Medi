import React from "react"
import styled from "styled-components"
import pix from "../../ASSETS/Rectangle 26.png"
import pix2 from "../../ASSETS/Rectangle 30.png";
import { BsFillCartPlusFill } from "react-icons/bs";

export const AlikeComp = ()=>{
    return (
      <Container>
        <Wrapper>
          <Left>
            <Back></Back>
            <Image src={pix} />
          </Left>
          <Right>
            <H1>Fast Delivery Service</H1>
            <Text>
              Surprise steepest recurred landlord mr wandered amounted of.
              Continuing devonshire but considered its. Rose past oh shew roof
              is song neat. Do depend better praise do friend garden an
            </Text>
            <Button>Become a Doctor <Icon /></Button>
          </Right>
        </Wrapper>
      </Container>
    );
}

export const AlikeComp2 = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Back></Back>
          <Image src={pix2} />
        </Left>
        <Right>
          <H1>Fast Delivery Service</H1>
          <Text>
            Surprise steepest recurred landlord mr wandered amounted of.
            Continuing devonshire but considered its. Rose past oh shew roof is
            song neat. Do depend better praise do friend garden an
          </Text>
          <Button>
            Become a Pharmacist <Icon />
          </Button>
        </Right>
      </Wrapper>   
    </Container>
  );
};

const Container = styled.div`
width:100%;
/* height:100%; */
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  height: 40vh;
  /* background: green; */
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction:column;
    height:100%;
  }
`;
const Left = styled.div`
  flex: 0.6;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background: brown; */
  @media (max-width: 800px) {
    flex: 1;
  }
`;
const Back = styled.div`
  width: 300px;
  height: 200px;
  background: #1069e1;
  position: relative;
  margin-right: 70px;
  margin-top: 30px;
`;
const Image = styled.img`
width:400px;
height:200px;
/* background: red; */
object-fit: contain;
position:absolute;
`
const Right = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  /* background: yellow; */
  @media (max-width: 800px) {
    flex:1;
    justify-content:center;
    align-items: center;
    padding: 0 10px;
  }
`;
const H1 = styled.div`
font-size: 30px;
margin: 15px 0;
`;
const Text = styled.div`
opacity: 0.9;
font-size: 15px;
`;
const Button = styled.div`
  width: 200px;
  margin-top: 5px;
  border-radius: 5px;
  margin: 15px 0;

  height: 50px;
  font-family: Poppins;
  font-size: 15px;
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
const Icon = styled(BsFillCartPlusFill)`

`;






