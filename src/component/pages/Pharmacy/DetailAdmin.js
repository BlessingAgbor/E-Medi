import React from 'react'
import styled from "styled-components"
import pix from "../../../ASSETS/file-icons_dashboard.png"
import PharmacyDashboard from "../Pharmacy/PharmacyDashboard"
const DetailAdmin = () => {
  return (
    <div>
      <PharmacyDashboard />
      <Container>
        <Wrapper>
          <Row2>
            <Icon2 src={pix} />
            <Title>Dashboard</Title>
          </Row2>
          <Row>
            <Div>
              <Topic>Build up your Profile</Topic>
            </Div>
            <Hold>
              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    <Number>24</Number>
                  </Div1>
                </Left>
                <Right>
                  <Product>My Product</Product>
                  <Text>
                    List all your products to start using the other features in
                    your dashboard
                  </Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>

              {/* card2 */}
              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    {/* <Number>24</Number> */}
                  </Div1>
                </Left>
                <Right>
                  <Product>Company Profile</Product>
                  <Text>
                    Complete or edit all information related to your company
                  </Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>

              {/* card 3 */}

              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    {/* <Number>24</Number> */}
                  </Div1>
                </Left>
                <Right>
                  <Product>Personal Information</Product>
                  <Text>Complete or edit information about you</Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>
            </Hold>
          </Row>

          {/* Row two */}

          <Row>
            <Div>
              <Topic>Get new serious leads</Topic>
            </Div>
            <Hold>
              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    {/* <Number>24</Number> */}
                  </Div1>
                </Left>
                <Right>
                  <Product>Company distributors</Product>
                  <Text>
                    Browse distributors who are interested in your product range
                  </Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>

              {/* card2 */}
              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    {/* <Number>24</Number> */}
                  </Div1>
                </Left>
                <Right>
                  <Product>Intelligent Matching</Product>
                  <Text>
                    Get 2 recommended matches of MENA distributor every month
                  </Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>

              {/* card 3 */}

              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    {/* <Number>24</Number> */}
                  </Div1>
                </Left>
                <Right>
                  <Product>Priority as Search</Product>
                  <Text>
                    Be the first to show in search results for one reserved
                    keyword
                  </Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>
            </Hold>
          </Row>

          {/* Row 3 */}
          <Row>
            <Div>
              <Topic>Build up your Profile</Topic>
            </Div>
            <Hold>
              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    <Number>24</Number>
                  </Div1>
                </Left>
                <Right>
                  <Product>My Product</Product>
                  <Text>
                    List all your products to start using the other features in
                    your dashboard
                  </Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>

              {/* card2 */}
              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    {/* <Number>24</Number> */}
                  </Div1>
                </Left>
                <Right>
                  <Product>Company Profile</Product>
                  <Text>
                    Complete or edit all information related to your company
                  </Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>

              {/* card 3 */}

              <Card>
                <Left>
                  <Div1>
                    <Dot></Dot>
                    {/* <Number>24</Number> */}
                  </Div1>
                </Left>
                <Right>
                  <Product>Personal Information</Product>
                  <Text>Complete or edit information about you</Text>
                  {/* <Click>Click here...</Click> */}
                </Right>
              </Card>
            </Hold>
          </Row>
        </Wrapper>
      </Container>
    </div>
  );
}

export default DetailAdmin
// const Container = styled.div``
const Icon2 = styled.img`
  /* color: red; */
  padding:0  30px;
  
`;
const Row2 = styled.div`
  width: 100%;
  padding: 20px 0;
  background: #e5e8ef;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
const Title = styled.div`
color:grey;
text-transform: uppercase;
font-size: 20px;
font-weight: 600;
`;
const Click = styled.div`
  color: red;
`;
const Text = styled.div`
  width: 100%;
  font-weight: bolder;
  height: 80px;
  /* background: orange; */
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
`
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
const Number = styled.div`
  width: 30px;
  text-align: center;
  /* height: 20px; */
  color: #fff;
  background: #009688;

  margin-top: 15px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-top: 10px;

  border-radius: 50%;
  background: #009688;

  @media (max-width: 800px) {
    margin: 0;
  }
`;
const Left = styled.div`
  height: 120px;
  width: 2px;
  background: #009688;

  display: flex;
  justify-content: center;
  margin-right: 40px;
  /* align-items: center; */
 
  @media (max-width: 800px) {
    height: 2px;
    width: 120px;
    margin: 20px 0;
  }
`;
const Div = styled.div`
/* width: 100%; */
display: flex;
padding: 10px 0;
padding-left: 40px;

/* align-items: flex-start; */
/* background: green; */
`
const Topic = styled.div``
const Card = styled.div`
  width: 350%;
  /* height: 200px; */
  display: flex;
  background: #fff;
  align-items: flex-start;
  padding: 30px;
  padding-right: 40px;
  padding-left: 40px;
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  transition: all 350ms;
  :hover {
    transition: all 350ms;
    background: #009688;
    cursor: pointer;
    color: #fff;
    ${Left} {
      background: #fff;
    }
    ${Dot} {
      background: #fff;
    }
    ${Number} {
      background: #fff;
      color: #009688;
    }
    ${Product} {
      color: #fff;
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
  flex:1;
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
  @media (max-width: 500px) {
    width: calc(100vw - 100px);
    left: 100px;
  }
`;