import React from 'react'
import styled from "styled-components"
import ic1 from "../../ASSETS/fxemoji_ambulance.png"
import ic2 from "../../ASSETS/emojione_factory.png";
import ic3 from "../../ASSETS/openmoji_first-aid-bag.png";
import ic4 from "../../ASSETS/Ex.png";

const Services = () => {
  return (
    <Container>
      <Holds>
        {/* First Card */}
        <Card>
          <IconHold>
            <Icon src={ic1} />
          </IconHold>
          <BText>Health First</BText>
          <PGraph>
            On no twenty spring of
            <br /> in esteem spirit likely
          </PGraph>
        </Card>

        {/* Second card */}
        <Card>
          <IconHold>
            <Icon src={ic3} />
          </IconHold>
          <BText>Health First</BText>
          <PGraph>
            On no twenty spring of
            <br /> in esteem spirit likely
          </PGraph>
        </Card>

        {/* Third card */}
        <Card >
          <IconHold>
            <Icon src={ic4} />
          </IconHold>
          <BText>Affordable</BText>
          <PGraph>
            On no twenty spring of
            <br /> in esteem spirit likely
          </PGraph>
        </Card>

        {/* fourth card */}
        <Card>
          <IconHold>
            <Icon src={ic2} />
          </IconHold>
          <BText>Health First</BText>
          <PGraph>
            On no twenty spring of
            <br /> in esteem spirit likely
          </PGraph>
        </Card>
      </Holds>
    </Container>
  );
}

export default Services

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  display: flex;
  /* background:yellowgreen; */
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    padding: 40px 0;
    padding-bottom:50px;
  }
`;

const Holds = styled.div`
  width: 75%;
  height: 180px;
  display: flex;
  background: #3e435e;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  /* flex-wrap:wrap; */
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding:40px 0
  }
`;
const Card = styled.div`
  width: 220px;
  height: 170px;
  background: transparent;
  /* border: 1px solid grey; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  @media (max-width:800px){
    width:80%;
    height:80%;

  }

  :hover {
    background: blue;
    margin-bottom: 100px;
    cursor: pointer;
    transition: all 350ms;

  }
`;
const IconHold = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #33354a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  img {

  }
`;
const Icon = styled.img``;
const BText = styled.div`
color:#fff;

`;
const PGraph = styled.p`
font-size: 12px;
color:#ddd;
text-align: center;
`;
// const Holds = styled.div``;
