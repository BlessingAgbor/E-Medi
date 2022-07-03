import React from 'react';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import bg6 from "../images/nathaniel-yeo-747NDboAWNY-unsplash.jpg";
import bg7 from "../images/markus-winkler-pOu_UmkOG-0-unsplash.jpg";
import bg8 from "../images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg";
import bg1 from "../images/towfiqu-barbhuiya-uM5mnbNm8eA-unsplash.jpg";
import bg2 from "../images/arpad-czapp-tvP6pCnq9iI-unsplash.jpg";
import bg3 from "../images/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg";
import bg4 from "../images/national-cancer-institute-byGTytEGjBo-unsplash.jpg";
import bg5 from "../images/nathaniel-yeo-gUZo-UA0VGQ-unsplash.jpg";


const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    // { width: 768, itemsToShow: 5 },
    // { width: 1200, itemsToShow: 4 }
];

const Categorys = () => {
    return (
        <>
            <Container>
                <Holder>
                    <Title>
                        Popular Products
                    </Title>
                </Holder>
                <Div breakPoints={ breakPoints }>
                    {/* <Item>
                        <img src='/images/images (1).jpg' />
                    </Item> */}
                    <Item>
                        <ImageHold>
                            <img src={bg1 } />
                        </ImageHold>
                        <ContentHold>
                            <Title>
                                Bevon Capsule
                            </Title>
                            <PayMent>
                                $130.05
                            </PayMent>
                        </ContentHold>
                    </Item>
                    <Item>
                        <ImageHold>
                            <img src={ bg2 } />
                        </ImageHold>
                        <ContentHold>
                            <Title>
                                Bevon Capsule
                            </Title>
                            <PayMent>
                                $130.05
                            </PayMent>
                        </ContentHold>
                    </Item>
                    <Item>
                        <ImageHold>
                            <img src={ bg3} />
                        </ImageHold>
                        <ContentHold>
                            <Title>
                                Bevon Capsule
                            </Title>
                            <PayMent>
                                $130.05
                            </PayMent>
                        </ContentHold>
                    </Item>
                    <Item>
                        <ImageHold>
                            <img src={ bg5} />
                        </ImageHold>
                        <ContentHold>
                            <Title>
                                Bevon Capsule
                            </Title>
                            <PayMent>
                                $130.05
                            </PayMent>
                        </ContentHold>
                    </Item>
                    <Item>
                        <ImageHold>
                            <img src={bg6} />
                        </ImageHold>
                        <ContentHold>
                            <Title>
                                Bevon Capsule
                            </Title>
                            <PayMent>
                                $130.05
                            </PayMent>
                        </ContentHold>
                    </Item>
                </Div>

            </Container>

        </>
    );
};

export default Categorys;


const Container = styled.div`
    margin-top: 30px;
    /* padding: 10px; */
`;
const Div = styled(Carousel)`
  /* width: 100%; */
  background-color: none;
  border: none;

  button {
    display: block;
    background-color: none;
    /* font-size: 12px; */
    border: none;
    outline: none;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
const Item = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* height: 250px; */
    width: 100%;
    /* background-color: #cbad93; */
    /* color: #fff; */
    margin: 0 10px;
    font-size: 4em;
    border-radius: 5px;
    flex-direction: column;
    border: 1px solid gray;

   

    @media (max-width: 300px){
        height: 100px;
        /* font-size: 13px; */
    }
`;
const Holder = styled.div`
    margin: 0 20px; 
`;
const Title = styled.div`
    font-weight: 600;
    color: black;
    margin-bottom: 30px;
    font-size: 20px;
    margin-left: 10px;

`;
const ImageHold = styled.div`
  width: 100%;
  height: 250px;
  @media (max-width: 800px) {
    height: 150px;
    img{
        object-fit: cover;
    }
  }

  img {
    width: 100%;
    height: 100%;
    /* border-radius: 5px; */
  }
`;
const ContentHold = styled.div`

    border-top: 1px solid gray;
`;
const PayMent = styled.div`
    margin-left: 10px;
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: 600;
    color: black;
`;