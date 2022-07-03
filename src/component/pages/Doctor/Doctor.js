import React from 'react'
import styled from "styled-components"
import pix from "../../../ASSETS/pexels-thirdman-5327656.jpg"
import pix2 from "../../../ASSETS/steward-masweneng-uIvjLq_q5g8-unsplash.jpg";
import {AiFillFacebook, AiFillLinkedin, AiFillMail} from "react-icons/ai"
import pix3 from "../../../ASSETS/pexels-rodnae-productions-6129681.jpg";
import pix4 from "../../../ASSETS/pexels-tima-miroshnichenko-5452201.jpg";


const Doctor = () => {
  return (
    <Container>
      <Wrap>
        <Butt
          style={{
            width: "150px",
            textAlign: "center",
            color: "#1069E1",
            backgroundColor: "##E5E5E5",
            borderRadius: "5px",
          }}
        >
          Our Doctors
        </Butt>
        <Text>
          Meet our <span style={{ color: "#1069E1" }}>Qualified</span> Doctors
        </Text>
        <Hold>
          <Card>
            <Image src={pix} />
            <Name>Dr. Collin PhD</Name>
            <div>
              <Descrip>200+ patients</Descrip>
              <Descrip>Neurosugeon</Descrip>
            </div>
            <Info>
              <span>
                <Icon1 />
              </span>
              <span>
                <Icon2 />
              </span>
              <span>
                <Icon3 />
              </span>
            </Info>
          </Card>

          <Card>
            <Image src={pix3} />
            <Name>Dr. Emmanuel PhD</Name>
            <div>
              <Descrip>200+ patients</Descrip>
              <Descrip>Neurosugeon</Descrip>
            </div>
            <Info>
              <span>
                <Icon1 />
              </span>
              <span>
                <Icon2 />
              </span>
              <span>
                <Icon3 />
              </span>
            </Info>
          </Card>

          <Card>
            <Image src={pix4} />
            <Name>Dr. Romanus PhD</Name>
            <div>
              <Descrip>200+ patients</Descrip>
              <Descrip>Neurosugeon</Descrip>
            </div>
            <Info>
              <span>
                <Icon1 />
              </span>
              <span>
                <Icon2 />
              </span>
              <span>
                <Icon3 />
              </span>
            </Info>
          </Card>

          <Card>
            <Image src={pix} />
            <Name>Dr. Blessing PhD</Name>
            <div>
              <Descrip>200+ patients</Descrip>
              <Descrip>Neurosugeon</Descrip>
            </div>
            <Info>
              <span>
                <Icon1 />
              </span>
              <span>
                <Icon2 />
              </span>
              <span>
                <Icon3 />
              </span>
            </Info>
          </Card>

          <Card>
            <Image src={pix2} />
            <Name>Dr. Cynthia PhD</Name>
            <div>
              <Descrip>200+ patients</Descrip>
              <Descrip>Neurosugeon</Descrip>
            </div>
            <Info>
              <span>
                <Icon1 />
              </span>
              <span>
                <Icon2 />
              </span>
              <span>
                <Icon3 />
              </span>
            </Info>
          </Card>
        </Hold>
      </Wrap>
    </Container>
  );
}

export default Doctor

const Container = styled.div`
width:100%;
display: flex;
/* background:pink; */
flex-direction: column;
/* height */
`
const Wrap = styled.div`
  width: 100%;
  display: flex;
  /* background: blue; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

`;

const Butt = styled.div`
margin: 20px 0;
padding:5px 0;
`
const Text = styled.div`
  margin-bottom: 30px;
`;
const Icon1 = styled(AiFillMail)``;
const Icon2 = styled(AiFillFacebook)``;
const Icon3 = styled(AiFillLinkedin)``;
const Info = styled.div`
  width: 100%;
  height: 70px;
  background: #1069e1;
  /* position:absolute; */
  border-radius: 10px 10px 0 0;
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: none;
  span {
    color: #fff;
    :hover {
      transition: all 350ms;
      transform: scale(1.2);
    }

    /* height:50%;
    width:50%; */
    /* border-radius: 100%; */
    /* background-color:#fff; */
  }
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-direction: column;
  align-items: center;
  height: 300px;
  /* background: darkblue; */
  text-align: center;
  width: 17%;
  padding: 0 30px;
  margin: 20px 0;
  border-radius: 50px 50px 0 0;
  transition: all 250ms;
  background-color: #fff;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    width: 40%;
  }
  :hover {
    opacity: 0.9;
    padding: 20px 30px;
    cursor: pointer;
    ${Info} {
      margin-top: 20px;
      display: flex;
      opacity: 1;
      transition: all 350ms;
      transform: scale(1.07);
      cursor: pointer;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

const Image = styled.img`
width:150px;
height:150px;
object-fit: cover;
border-radius:50%;
`
const Name = styled.div``
const Descrip = styled.div``


const Hold = styled.div`
width:100%;
display:flex;
padding: 15px 0;
justify-content:space-between;
/* align-items: center; */
height:100%;
flex-wrap:wrap;
@media (max-width: 800px) {
justify-content:center;
align-items: center;
}
/* background: purple; */
`



// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``;