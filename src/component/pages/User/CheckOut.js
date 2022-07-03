import React, { useState } from "react";
import styled from "styled-components";
import pix from "../../../ASSETS/paystack-logo-vector-removebg-preview.png";
import pix2 from "../../../ASSETS/MasterCard_Logo.svg.png";
import pix3 from "../../../ASSETS/Verve-Logo.png";
import pix4 from "../../../ASSETS/Visa_Inc._logo.svg.png";
import {GiStorkDelivery} from "react-icons/gi"

import { AiFillCheckCircle, AiOutlineDelete } from "react-icons/ai";
const AddToCart = () => {
  const [count, setCount] = useState(0);
  const Add = () => {
    setCount(count + 1);
  };
  const Remove = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };
  return (
    <Container>
      <Wrapper>
        <CartHold>
          <Headers>
            <Div1>CHECKOUT</Div1>
          </Headers>
          <Carts>
            <Head>
              <div>
                <AiFillCheckCircle />
                <div>1. ADDRESS DETAILS</div>
              </div>
              <Divs>CHANGE</Divs>
            </Head>
            <Row>
              <Detail>
                <Image>Blessing Agbor</Image>

                <Div>
                  <div>1a, Bakare Farro Mosafejo-close, Alaba.</div>
                  <div>
                    {/* <img src={pix2} /> */}
                    Shanna Pharmacy
                  </div>
                </Div>
              </Detail>
            </Row>
          </Carts>
          <Carts>
            <Head>
              <div>
                <AiFillCheckCircle />
                <div>2. DELIVERY METHOD</div>
              </div>
              <Divs>CHANGE</Divs>
            </Head>
            <Row>
              <Detail>
                <Image>Door Delivery</Image>

                <Div>
                  <div>
                    Delivered between <span>Friday 1 Apr</span> and{" "}
                    <span>Monday 4 Apr</span>
                  </div>
                  <div>
                    {/* <img src={pix2} /> */}
                    Shanna Pharmacy
                  </div>
                </Div>
              </Detail>
            </Row>
          </Carts>
          <Carts>
            <Head>
              <div>
                <AiFillCheckCircle />
                <div>3. PAYMENT METHOD</div>
              </div>
              <Divs>CHANGE</Divs>
            </Head>
            <Row>
              <Detail>
                <Image>How do you want your order</Image>

                <Div>
                  <Card>
                    <Top>
                      <Icon type="checkbox" />
                      <Txt>Cards or Bank Transfer (powered by Interswitch)</Txt>
                    </Top>
                    <Logos>
                      <img src={pix} />
                      <img src={pix4} />
                      <img src={pix2} />
                      <img src={pix3} />
                    </Logos>
                  </Card>
                  <Card>
                    <Top>
                      <Icon type="checkbox" />
                      <Txt>
                        <Icons />

                        <div>Cash on delivery</div>
                      </Txt>
                    </Top>
                  </Card>
                </Div>
              </Detail>
            </Row>
          </Carts>
        </CartHold>
        <CartSum>
          <Div2>SUMMARY</Div2>

          <Heading>
            <Head>CART SUMMARY</Head>
            <Head>
              <span>SubTotal</span>
              <span>#13,000</span>
            </Head>
            <Chec>
              <div>CHECKOUT #13,000</div>
            </Chec>
          </Heading>
        </CartSum>
      </Wrapper>
    </Container>
  );
};

export default AddToCart;
const Div1 = styled.div`
  width: 100%;
  color: #aaa;
  margin-bottom: 20px;
`;
const Div2 = styled.div`
width:300px;
color:#aaa;
margin-bottom: 20px;
`;
const Icons = styled(GiStorkDelivery)``;
const Logos = styled.div`
width:80%;
/* height: 100%; */
/* background: blue; */
padding-left: 60px;
img{
    width:15%;
}  
`
const Txt = styled.div`
display: flex;
`
const Icon = styled.input`
/* width:30px;
height:20px;
border-radius: 50%;
background: plum; */
`;
const Top = styled.div`
width:95%;
display: flex;
padding: 0 10px;
`;
const Card = styled.div`
width:90%;
border:1px solid black;
min-height:80px;
height:100%;
border-radius: 5px;
flex-direction: column;
display: flex;
justify-content:center;

margin-bottom: 30px;
/* padding-bottom: 10px; */
`
const Div = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
margin: 20px;
  color: black;
    strong{
        text-transform: italic;
    }


`;

const Divs = styled.button`
  color: red;
  transition: all 350ms;
  border: none;
  outline: none;
  background: none;
  padding: 0 20px;
  font-size: 16px;
  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1.06);
  }
`;
const Small = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    font-size: 19px;
    margin: 0 7px;
    text-decoration: none;
  }
  div {
    /* padding: 0 8px; */
    /* background: #3e4353; */
    /* color: #fff; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    /* font-size: 25px; */
  }
`;

const Percent = styled.div`
  background: #3e4353;
  /* color:#fff; */
  color: #97a0c1;

  /* width: 70px; */
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  /* height: 20px; */
  padding: 5px 5px;
  text-align: center;
`;
const DivBig = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Price = styled.div`
  span {
    text-decoration: line-through;
  }
  padding-right: 5px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  /* background: red; */
  @media (max-width: 800px) {
    /* flex-direction: column; */
    justify-content: center;
    width: 100%;
  }
`;

const Detail = styled.div`
  width: 80%;
  display: flex;
  color: #3e4353;
  flex-direction: column;
  font-weight: 500;
  span {
    font-weight: 700;
  }
  @media (max-width: 800px) {
    /* flex-direction: column; */
    justify-content: center;

    width: 100%;
  }
`;

const Row = styled.div`
  width: 90%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  /* padding:0 10px; */
  /* background: yellow; */
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Chec = styled.div`
  width: 100%;

  font-weight: 500;
  height: 100%;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  div {
    width: 70%;
    background: #3e4353;
    padding: 10px 0;
    color: #fff;
    transition: all 350ms;
    :hover{
      transition: all 350ms;
    transform: scale(1.05);
    cursor: pointer;
    }

  }
`;
const CartSum = styled.div`
  height: 100%;
  width: 300px;
 
  /* padding: 10px 10px; */

  @media (max-width: 800px) {
    width: 80%;
    margin: 20px 0;
  }
`;
const Image = styled.div`
  /* width: 100px;
  height: 100px;
  margin-right: 12px; */
  @media (max-width: 800px) {
    /* flex-direction: column; */
    justify-content: center;
    width: 60%;
    /* height: 150px; */
    margin-right: 10px;
  }
`;
const Head = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  width: 100%;
  margin: 10px 0;

  display: flex;
  div {
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  justify-content: space-between;
  align-items: center;
`;
const Headers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  
  /* flex-direction: column; */
`;


const Heading = styled.div`
  width: 100%;
  /* border-bottom: 1px solid grey; */
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  /* div {
    width: 100%;

  } */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: #fff;
  padding: 0 20px;
`;
const CartHold = styled.div`
  width: 60%;
  height: 100%;
  /* background: whitesmoke; */
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Carts = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  padding: 20px 0;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    width: 90%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e8ef;
`;
