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
    { width: 1, itemsToShow: 1, auto: true },
    // { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    // { width: 1200, itemsToShow: 4 }
];

const Hero = () => {
    return (
        <>
            <Container>
                <Div breakPoints={ breakPoints }>
                    {/* <Item>
                        <img src='/images/images (1).jpg' />
                    </Item> */}
                    <Item>
                        <img src={ bg1} />
                    </Item>
                    <Item>
                        <img src={ bg2} />
                    </Item>
                    <Item>
                        <img src={ bg3 } />
                    </Item>
                    <Item>
                        <img src={ bg4} />
                    </Item>
                    <Item>
                        <img src={ bg5 } />
                    </Item>
                    {/* <Item>
                        <img src={ require('../images/bg-hero-4-900-x1.png') } />
                    </Item> */}
                </Div>

            </Container>

        </>
    );
};

export default Hero;


const Container = styled.div`
    margin-top: 30px;
`;
const Div = styled(Carousel)`
  button {
    display: block;
    background-color: none;
    border: none;
    @media(max-width: 800px){
        display: none;
    }
  }
`;
const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 100%;
    background-color: #cbad93;
    color: #fff;
    margin: 0 15px;
    font-size: 4em;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 300px){
        height: 250px;
        /* font-size: 13px; */
    }
`;