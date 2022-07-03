import React, {useState} from 'react'
import styled from "styled-components"
import pix from "../../../ASSETS/natural-skin-care-products-1524492911.jpg"
import pix2 from "../../../ASSETS/pharm.png"
import {AiOutlineDelete} from "react-icons/ai"
const AddToCart = () => {
  const [count, setCount] =useState(0)
  const Add = ()=>{
    setCount(count + 1)
  }
   const Remove = () => {
     if(count>1){
      setCount(count - 1);
     }else{
      setCount(count)
     }
   };
  return (
    <Container>
      <Wrapper>
        <CartHold>
          <Head>
            Cart<span>(3)</span>
          </Head>
          <Carts>
            <Row>
              <Detail>
                <Image src={pix} />

                <Div>
                  <div>Diclofenac 100mg</div>
                  <div>
                    <img src={pix2} />
                    Shanna Pharmacy
                  </div>
                </Div>
              </Detail>
              <Price>
                <DivBig>#4,360</DivBig>
                <Small>
                  <span>#8,824</span>
                  <Percent>51%</Percent>
                </Small>
              </Price>
            </Row>

            <Row>
              <Detail>
                <span>
                  <div>REMOVE</div>
                  <AiOutlineDelete />
                </span>
              </Detail>
              <Price>
                <Small>
                  <Divs
                    onClick={() => {
                      Remove();
                    }}
                  >
                    -
                  </Divs>
                  <span
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {count}
                  </span>
                  <Divs
                    onClick={() => {
                      Add();
                    }}
                  >
                    +
                  </Divs>
                </Small>
              </Price>
            </Row>
          </Carts>
          <Carts>
            <Row>
              <Detail>
                <Image src={pix} />

                <Div>
                  <div>Diclofenac 100mg</div>
                  <div>
                    <img src={pix2} />
                    Shanna Pharmacy
                  </div>
                </Div>
              </Detail>
              <Price>
                <DivBig>#4,360</DivBig>
                <Small>
                  <span>#8,824</span>
                  <Percent>51%</Percent>
                </Small>
              </Price>
            </Row>

            <Row>
              <Detail>
                <span>
                  <div>REMOVE</div>
                  <AiOutlineDelete />
                </span>
              </Detail>
              <Price>
                <Small>
                  <Divs
                    onClick={() => {
                      Remove();
                    }}
                  >
                    -
                  </Divs>
                  <span
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {count}
                  </span>
                  <Divs
                    onClick={() => {
                      Add();
                    }}
                  >
                    +
                  </Divs>
                </Small>
              </Price>
            </Row>
          </Carts>
        </CartHold>
        <CartSum>
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
}

export default AddToCart
const Div = styled.div`
  color: black;

  img {
    width: 12px;
    height: 12px;
  }
`;

const Divs = styled.button`
  padding: 0 8px;
  background: #3e4353;
  color: #fff;
  border:none;
  outline: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  font-size: 25px;
`;
const Small = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span{
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
  padding:5px 5px;
  text-align: center;
`;
const DivBig = styled.div`
font-size: 20px;
font-weight: 700;

`

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
  width: 60%;
  display: flex;
  /* color: red; */
  color: #3e4353;
  /* justify-content:center; */
  align-items: center;
  font-weight: 700;
  span {
    /* color: red; */
    margin-left: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  @media (max-width: 800px) {
    /* flex-direction: column; */
    justify-content: center;
    span {
      margin: 20px 0;
      padding: 10px 10px;
      background: #3e4353;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      ${AiOutlineDelete} {
        margin-left: 18px;
      }
    }

    width: 100%;
  }
`;

const Row = styled.div`
width: 90%;
display: flex;
margin-top: 20px;
justify-content:space-between;
/* padding:0 10px; */
/* background: yellow; */
@media (max-width: 800px) {
  flex-direction: column;
  justify-content: center;
}

`
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
  }
`;
const CartSum = styled.div`
  height: 100%;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: #fff;
  /* padding: 10px 10px; */

  @media (max-width: 800px) {
    width: 100%;
    margin:20px 0;
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 12px;
  @media (max-width: 800px) {
    /* flex-direction: column; */
    justify-content: center;
    width: 60%;
    height:150px;
    margin-right: 10px;
  }
`;
const Head = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 10px; 
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
`;
const Heading = styled.div`
  width: 100%;
  /* border-bottom: 1px solid grey; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* div {
    width: 100%;

  } */
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
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  padding: 20px 0;
  @media (max-width: 800px) {
    flex-direction:column-reverse;
    width: 90%;
  }
`;
const Container = styled.div`
width:100%;
height:100%;
display: flex;
justify-content:center;
align-items: center;

`;