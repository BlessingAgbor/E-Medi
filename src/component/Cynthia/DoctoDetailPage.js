import React, { Profiler } from 'react';
import styled from 'styled-components';
import MedicationIcon from '@mui/icons-material/Medication';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link} from "react-router-dom"

const DetailPage = () => {
  return (
   <Container>
       <Head>
                   <div style={{
                       width: "90%",
                    //    backgroundColor: "blue"
                   }}>
                   <h1 style={{
                        color: "white",
                    }}>Specialists</h1>
                    <h4 style={{
                        color:"#afdcea"
                    }}>Home/Doctors</h4>
                   </div>
                </Head>
       <Wrapper>
           <NewWrapper>
               
            <Left>
                <HeroHold>
                </HeroHold>
                <Title style={{
                    lineHeight:"50px"
                }}>
                    <Holder> 
                        <div style={{
                            width:"70%"
                        }}>
                        <div style={{
                                lineHeight: "40px",
                            }}>
                            <h1 style={{
                                color:"black",
                            }}>Doctor Ade Geoffrey</h1>
                            </div>
                            <div style={{
                                width: "100px",
                                height: "2px",
                                marginBottom:"20px",
                                backgroundColor: "#5699AE"
                            }}></div>
                                </div>
                                <SocialIcons>
                                    <MailIcon/>
                                    <TwitterIcon/>
                                    <LinkedInIcon/>
                                    <FacebookIcon/>
                                </SocialIcons>
                            </Holder>
                                <div style={{
                                lineHeight: "20px",
                                width: "480px",
                                color:"#888F94",
                                fontSize:"20px"
                            }}>The department of the dermatology strives to improve your well-being. We are recognised by WHO, the region and nation as a center of excellence and innovation in health care. Our department will continue to improve our abilities through the support and opportunities provided by the department</div>
                </Title>

            </Left>
            <Right>
                <h1>Quick Profile</h1>
                <Profile>
                   <div>
                       <h3>Name</h3>
                       <h3>Dr Oluomo Goodluck</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Email</h3>
                       <h3>oluomo112@gmail.com</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Specialty</h3>
                       <h3>Cardiology</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Degree</h3>
                       <h3>Dr Oluomo Goodluck</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Category</h3>
                       <h3>Specialty</h3>
                   </div>
                   <p></p>
                   
                </Profile>
                <Button0 to='/appointment' >Request Appointment</Button0>
            </Right>
           </NewWrapper>
           <CertDiv>
                           <Cert src='/card.jpg' alt=''/>
                           <Cert src='/card2.jpg' alt=''/>
                           <Cert  src='/card3.jpg' alt=''/>
                           <Cert src='/card4.jpg' alt=''/>
                           <Cert src='/doc8.jpg' alt=''/>
             </CertDiv>
            <ReviewHold>
                    <h1>People Say</h1>
                    <Box>
                    <Up>
                        As the number of mobile users continue to outspace the number of desktop users, it should go without saying designers  now have to design on mobile first mentally
                    </Up>
                    <Down>
                        <Image></Image>
                        <div>
                        <View>John Doe</View>
                        <View>Designer</View>
                        </div>
                    </Down>
                    </Box>
            </ReviewHold>
            </Wrapper>
                    <Wrap4 >
                            <Hold>
                            <MedicationIcon style={{
                                width:"100px",
                                height:"100px",
                                color:"white"
                            }}/>
                            <div style={{
                                "display":"flex",
                                "flex-direction":"column",
                            }}>
                            <h3 style={{
                              color:"white"
                            }}>Encompassing All Accessible Exclusive Medical Treatment</h3>
                            <p style={{
                              color:"white"
                            }}>We offer extensive medical procedures to outbound and inbound patients</p>
                            </div>
                            <PharmButton to='/pharm'  style={{
                                width:"200px",
                                height:"50px",
                                "background":"transparent",
                                margin: "10px",
                                border:"1px solid white",
                                cursor:"pointer",
                                color:"white",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                textDecoration:"none",
                            }}>Get In Touch</PharmButton>
                            </Hold>
                            <Footer>
                                <div>
                      <div>
                    <h3 style={{
                            color:"white",
                        }}>Departments</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>Neurology</p>
                                <p>Traumatology</p>
                                <p>Gynacology</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>
                                
                                <div>
                                    
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Head Office</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>#4 Barr Ahmed Musa</p>
                                <p>Orege, Mechanic Bus stop</p>
                                <p>Opposite 1&2 Hotel</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>

                                <div>  
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Quick Links</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>Home</p>
                                <p>Doctors</p>
                                <p>Departments</p>
                                <p>Pages</p>
                                <p>News</p>
                                <p>Register</p>
                                </div>

                                <div>
                                    
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Quick Links</h3>
                        <div style={{
                            width: "125px",
                            height: "1px",
                            marginBottom:"20px",
                            backgroundColor: "silver"
                        }}></div>
                    </div>
                    <p>Neurology</p>
                                <p>Traumatology</p>
                                <p>Gynacology</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>

                            </Footer>
                      <Button><a style={{
                        color: "white",
                        textDecoration:"none"
                      }} href=''>Have A Question? Ask US</a></Button>

                      </Wrap4>
   </Container>
  )
}

export default DetailPage;


const NewWrapper = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */

    @media Screen and (max-width: 768px){
        flex-direction: column;

    }
`;
const PharmButton = styled(Link)``;


const Footer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    color: white;
`;

const Wrap4 = styled.div`
    width: 100%;
    background-color: darkblue;
    /* height: 100vh; */
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Hold = styled.div`
    width: 90%;
    height: 100px;
    /* background-color: red; */
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid silver;
    margin-top: 10px;
    /* align-items: center; */
`;


const View = styled.div``;
const Image = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url('/ART ME.png');
    background-size: cover;
    border: 1px solid grey;
    margin-bottom: 20px;
`;
const CertDiv = styled.div`
       width:90%;
       display:flex;
       justify-content:space-between;
       align-items:center;
       /* background-color:yellow; */
       margin-top: 50px;
`;

const Cert = styled.img`
    width: 250px;
    height: 200px;
    background-color: aqua;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ReviewHold = styled.div`
    width: 90%;
    margin-top: 100px;
`;
const Box = styled.div`
    width: 60%;
    border: 1px solid black;
    /* background-color: #5699AE; */
    color: black;
    border-radius: 5px;
    padding: 10px;
`;
const Up = styled.div`
    width: 300px;
    margin-bottom: 30px;

`;
const Down = styled.div`
    width: 300px;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`;

const Button0 = styled(Link)`
     width: 300px;
     height: 50px;
     text-decoration: none;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 50px;
    color: darkblue;
    font-weight: bold;

    :hover{
        cursor: pointer
    }
`;

const Profile = styled.div`
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    div{
        width: 90%;
        /* height: 1px; */
        /* background-color: white; */
        display: flex;
        justify-content: space-between;
        align-items: center;

        h6{
        margin-top: 10px;
        }
    }
    p{
        width: 90%;
        height: 1px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
`;
const ButtonHold = styled.div``;

const SocialIcons = styled.div`
    width:30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
const Holder = styled.div`
    /* background-color: red; */
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        flex-direction: column;

        h1{
            font-size: 25px;
            width: 300px;
        }
    }
`;
const Container = styled.div`
    width: 100%;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Poppins;
`;

const Head = styled.div`
    width: 100%;
    height: 200px;
    background-color: darkblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 10px;

    @media (max-width: 768px) {
        /* display: flex; */
        
    }
`;

const Wrapper = styled.div`
    width: 100%;
    /* height: 100vh; */
    /* background-color: tomato; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Left = styled.div`
    width: 50%;
    height: auto;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* margin: 10px; */

    @media Screen and (max-width: 768px){
        
    }
    
    
`;
const Right = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: darkblue;
    margin: 10px;


    h1{
        color: white
    }
`;

const Title = styled.div`
    line-height: 10px;
    /* background-color: red; */

`;
const HeroHold = styled.div`
    width: 600px;
    height: 500px;
    /* background-color: red; */
    background-image: url('/doc4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    @media Screen and (max-width: 768px){
        width: 250px;
        height: 250px;
    }

`;


const Button = styled.div`
    width: 600px;
    height: 50px;
    /* background-color: #5699ae; */
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    /* padding-left: 10px;
    padding-right: 10px; */
    margin-top: 50px;

    :hover{
        cursor: pointer
    }
`;