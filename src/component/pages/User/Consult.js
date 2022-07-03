import React from 'react'
import styled  from 'styled-components';
import {AiFillPhone} from "react-icons/ai"
import { GiHamburgerMenu , } from "react-icons/gi";
import { BiCurrentLocation, BiLocationPlus } from "react-icons/bi";
import { BiSearchAlt  } from "react-icons/bi";
const Consult = () => {
  return (
    <Container>
      <Wrapper>
        <Head>
          <Logo>E-Medi</Logo>
          <Navig>
            <Contact>
              <IconPhone />
              <span>08074496258</span>
            </Contact>
          </Navig>
        </Head>
        <Hero>
          <Top>
            <Icons/>
            <select>
              <option>Ikeja</option>
            </select>
          </Top>
          <Holder>
            <SearchBar>
              <Input placeholder="Doctors, Clinics, Specalists" />
              <Icon1 />
            </SearchBar>
          </Holder>
          <MainHero>
            <Left>
              <Log>Emedi</Log>
              <Span>
                <Big>FREE</Big>
                <Small>Consultation</Small>
                <br />
                <Dan>at clinic with E-Medi Surgeons</Dan>
                <Button>KNOW MORE</Button>
              </Span>
            </Left>
            <Right>
              <Image />
            </Right>
          </MainHero>
          {/* <Form>
            <Top2>FREE FIRST CONSULTATION</Top2>

            <Hold>
               
            </Hold> */}
          {/* </Form> */}
          <HeroHold>
            <Top3>Our Offerings</Top3>
            <HeroHold>
              <Card>
                <Up>
                  <Tag>50% OFF</Tag>
                </Up>
                <Down>
                  <Text>
                    Instant Video
                    <br />
                    Consultation
                  </Text>
                  <Txt>Connect within minutes</Txt>
                </Down>
              </Card>
            </HeroHold>
          </HeroHold>
          <HeroHold>
            <Card2>
              <Up2>
                <Image2 />
              </Up2>
              <Down2>
                <div>Medicines</div>
              </Down2>
            </Card2>
          </HeroHold>
        </Hero>
      </Wrapper>
    </Container>
  );
}

export default Consult
// const Container = styled.div``
// const Image = styled.div``;
const Down2 = styled.div``;
const Image2 = styled.div``;
const Up2 = styled.div``;
const Card2 = styled.div``;

const Txt = styled.div``;
const Text = styled.div``;
const Down = styled.div``;
const HeroHold = styled.div``;

const Tag = styled.div``;
const Up = styled.div``;
const Card = styled.div``;
const Top3 = styled.div``;

const Image = styled.div``
const Right = styled.div``
const Button = styled.div``
const Dan = styled.div``
const Small = styled.div``;
const Big = styled.div``
const Span = styled.div``
const Log = styled.div``
const Left = styled.div``
const MainHero = styled.div`

`;
const Icons = styled(BiLocationPlus)``;
const Top = styled.div`
width: 100%;
font-size: 19px;
display: flex;
/* justify-content:center; */
align-items: center;
select{
  border: none;
  outline: none;
  font-size: 20px;
}
`;
const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Icon1 = styled(BiSearchAlt)`
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  background: grey;
  height: 100%;
  width: 40px;
  padding: 0 10px;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: none;
  flex: 1;
  height: 100%;
  padding-left: 15px;
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
  ::placeholder {
    font-size: 20px;
    color: grey;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

const SearchBar = styled.div`
  height: 50px;
  :focus {
    outline: 3px solid blue;
  }
  border-radius: 3px;
  background: #fff;
  border: 1px solid blue;
  width: 60%;
  @media (max-width: 800px) {
    width: 80%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled(GiHamburgerMenu)`
  font-size: 30px;
  margin-right: 15px;
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;
const Holder = styled.div`
  margin-bottom: 30px;
  select {
    width: 200px;
    background: blue;
    cursor: pointer;
    color: #fff;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 20px;
  }
  display: flex;
  /* align-items: center; */
  /* height: 100%; */
  /* justify-content:center; */
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const IconPhone = styled(AiFillPhone)`
  font-size: 20px;
  color: darkblue;
`;
const Contact = styled.div`
  padding: 10px 10px;
  cursor: pointer;
  transition: all 350ms;
  width: 150px;
  font-size: 20px;

  :hover {
    transition: all 350ms;
    transform: scale(1.02);
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  border: 2px solid darkblue;
`;
const Navig = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
/* background: red; */
`
const Logo = styled.div`
font-size: 25px;

`
const Head = styled.div`
  width: 100%;
  /* flex: 1; */
  padding: 10px 0;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  /* background-color: plum; */
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const Container = styled.div`
height: calc(100vw - 70px);
width: 100%;
display: flex;
background: cadetblue;
`;