import React from 'react'
import styled from "styled-components"
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import SideNav from "../Pharmacy/PharmacyDashboard"

const UploadDrugs = () => {
  return (
    <div>
      <SideNav />
      <Container>
        <Wrapper>
          <MainCard>
            <LogoTitle1>Upload a Product</LogoTitle1>
            <Card>
              <Title>Browse Files</Title>
              <Uplod>Upload</Uplod>
            </Card>
            <Name>
              <InputTitle>Name</InputTitle>
              <Input
                placeholder="e.g: Shanna Pharmacy"

                //   {...register("schoolName")}
              />
            </Name>
            <Error>{/* {errors?.schoolName?.message} */}</Error>
            <Name>
              <InputTitle>Type-of</InputTitle>

              <select>
                <option>OTC (over the counter) </option>
                <option>Ethical Drug</option>
              </select>
            </Name>
            <Error>{/* {errors?.displayName?.message} */}</Error>
            {/* <br /> */}

            <Hold>
              <PhoneData>
                <Phone>
                  <InputTitle>Drug API</InputTitle>
                  <Input
                    placeholder="e.g: Tetracyclin"

                    //   {...register("phoneNumber")}
                  />
                </Phone>
                <Error>{/* {errors?.phoneNumber?.message} */}</Error>
              </PhoneData>
            </Hold>

            <Name>
              <InputTitle>Category</InputTitle>

              <select>
                <option>Wellness and Fitness</option>
                <option>Family Care</option>
                <option>Skin Care</option>
                <option>Child Care</option>
                <option>Sexual Wellness</option>
              </select>
            </Name>
            <Error>{/* {errors?.displayName?.message} */}</Error>
            {/* <br /> */}
            <Name>
              <InputTitle>NAFDAC Number</InputTitle>
              <Input
                placeholder="Nafdac no:"
                // {...register("displayName")}
              />
            </Name>
            <Error>{/* {errors?.displayName?.message} */}</Error>
            <Button type="submit">Continue</Button>

            {/* <Social>
              <SocialText>Use Social Media</SocialText>
              <Icons>
                <Icon />
                <Icon1 />
                <Icon2 />
                <Icon3 />
              </Icons>
              <SocialText>
                Have an Account? <Span to="/signin">Login</Span>
              </SocialText>
            </Social> */}
          </MainCard>
        </Wrapper>
      </Container>
    </div>
  );
}

export default UploadDrugs

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Icon3 = styled(AiFillLinkedin)`
  font-size: 35px;
  color: #0077b7;
  :hover {
    cursor: pointer;
  }
`;
const Icon = styled(AiFillGoogleCircle)`
  font-size: 35px;
  color: red;
  :hover {
    cursor: pointer;
  }
`;
const Icon1 = styled(AiFillFacebook)`
  font-size: 35px;
  color: #475993;
  :hover {
    cursor: pointer;
  }
`;
const Icon2 = styled(AiFillTwitterSquare)`
  font-size: 35px;
  color: #50abf1;
  :hover {
    cursor: pointer;
  }
`;
const Span = styled(Link)`
  margin: 0 5px;
  color: #742e9d;
  font-weight: 700;
  text-decoration: none;
`;
const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;
const SocialText = styled.div`
  font-size: 12px;
  display: flex;
  margin-top: 50px;
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  outline: none;
  border: 0;
  font-family: Poppins;
  background-color: #009688;
  height: 45px;
  width: 100%;
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;
const Phone = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-right: 5px;
`;
const Phone1 = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-left: 5px;
`;
const PhoneData = styled.div`
  width: 100%;
`;
const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 500;
`;
const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0;
  width: 100%;
  height: 100%;
  padding-left: 10px;

  ::placeholder {
    color: lightgray;
    font-family: Poppins;
    font-size: 8px;
  }
`;
const InputTitle = styled.div`
  font-size: 13px;
  position: absolute;
  top: -10px;
  left: 7px;
  padding: 0 3px;
  background-color: #e5e8ef;
  /* background-clip: content-box; */
  font-weight: 700;
  color: #009688;
`;
const Name = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin: 10px 0;
  select {
    background-color: transparent;
    outline: none;
    border: 0;
    width: 100%;
    height: 100%;
    padding-left: 10px;
  }
`;
const LogoTitle1 = styled.div`
  font-weight: 700;
  color: #009688;
  margin-bottom: 50px;

  font-size: 30px;
  /* text-transform: uppercase; */
`;
const MainCard = styled.form`
  width: 50%;
  height:100%;
  flex-direction: column;
  display: flex;
  color: #e5e8ef;
  align-items: center;
  @media (max-width: 800px) {
    width: 80%;
    justify-content: center;
    margin-top: 40px;
  }
`;
const Title = styled.div`
border: 1px dashed grey;
font-weight: 600;
font-size: 12px;
display: flex;
justify-content:center;
align-items: center;
width:100px;
height: 50px;
background: #fff;

color:#009688;

`
const Uplod = styled.div`
    width: 40%;
    margin-top: 20px;
    background: #009688;
    color: #fff;
    padding: 10px 0;
    text-align: center;
`;
 const Card = styled.div`
 width:200px;
 min-height:150px;
 height: 100%;
 display: flex;
 background: #e5e5e5;
justify-content: center;
align-items: center;
flex-direction: column;

 `
const Hold = styled.div`
  width: 100%;
  height: 60%;
  /* background-color: #ebeaf1; */
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items: center;

`
const Container = styled.div`
  width: calc(100vw - 250px);
  display: flex;
  justify-content: center;
  position: absolute;
  left: 220px;
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