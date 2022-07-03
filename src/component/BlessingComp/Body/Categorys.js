import React from 'react';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import bg1 from "../images/towfiqu-barbhuiya-uM5mnbNm8eA-unsplash.jpg"
import bg2 from "../images/arpad-czapp-tvP6pCnq9iI-unsplash.jpg";import bg3 from "../images/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg";import bg4 from "../images/national-cancer-institute-byGTytEGjBo-unsplash.jpg";import bg5 from "../images/nathaniel-yeo-gUZo-UA0VGQ-unsplash.jpg";

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    // { width: 1200, itemsToShow: 4 }
];

const Categorys = () => {
    return (
        <>
            <Container>
                <Holder>
                    <Title>
                        Categories
                    </Title>
                </Holder>
                <Div breakPoints={ breakPoints }>
                    {/* <Item>
                        <img src='/images/images (1).jpg' />
                    </Item> */}
                    <Item>
                        <img src={ bg1 } />
                    </Item>
                    <Item>
                        <img src={bg2 } />
                    </Item>
                    <Item>
                        <img src={bg3 } />
                    </Item>
                    <Item>
                        <img src={bg4 } />
                    </Item>
                    <Item>
                        <img src={ bg5} />
                    </Item>
                    {/* <Item>
                        <img src={ require('../images/bg-hero-4-900-x1.png') } />
                    </Item> */}
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
  button {
    display: block;
    background-color: none;
    border: none;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: #cbad93;
    color: #fff;
    margin: 0 15px;
    font-size: 4em;
    border-radius: 10px;
    @media (max-width: 800px) {
        height:200px;
    }

    img{
        width: 100%;
        height: 100%;
    border-radius: 10px;

    }

    @media (max-width: 300px){
        height: 250px;
        /* font-size: 13px; */
    }
`;
const Holder = styled.div`
    margin: 0 20px; 
`;
const Title = styled.div`
    font-weight: 600;
    color: gray;
    margin-bottom: 20px;
    font-size: 20px;
`;
const Content = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: gray;
`;