import React from 'react'
import styled from 'styled-components'
import MedicationIcon from '@mui/icons-material/Medication';
import { Link } from 'react-router-dom';
import Boxer from '../Components/Boxer';


const Home = (props) =>{
    return(
        <Container>
             <Head>
                 {/* <HealthAndSafetyIcon/> */}
                   <div style={{
                       width: "90%",
                    //    backgroundColor: "blue"
                   }}>
                   <h1 style={{
                        color: "white",
                    }}>Pharmacists</h1>
                    <h4 style={{
                        color:"#afdcea"
                    }}>Home/Specialists</h4>
                   </div>
                </Head>
            <Wrapper>
               <Wrap>
                   <Texts>
                       <div style={{
                        lineHeight: "40px",
                       }}>
                       <h1 style={{
                           color:"black",
                       }}>Meet Our Professional Team</h1>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "#5699AE"
                       }}></div>
                       <p style={{
                           lineHeight: "20px",
                        //    width: "480px",
                           color:"#888F94",
                           fontSize:"20px"
                       }}>The structure of the neurological center includes an outpatient department, the department of functional studies of the Nervous system and the Visual Diagnostics and rehabilitation Department. Medical Center provides diagnosis and treatments for patients of all ages.</p>
                       </div>
                   </Texts>
                   <div style={{
                       
                   }}>
                      <img style={{
                          "box-shadow": "box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                          margin: "15px",
                      }} src='/docs.jpg' alt='Hero'/>
                    </div>
               </Wrap>
               <Wrap2>
                    
                   <div>
                   <h1 style={{
                           color:"black",
                       }}>Medical Specialists</h1>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "silver"
                       }}></div>
                   </div>
                   <CardHold>
                       <Div style={{
                           width: "100%",
                        //    height: "400px",
                          //  backgroundColor: "tomato",
                           display: "flex",
                           justifyContent: "space-between",
                           alignItems: "center",
                       }}>
                           <Boxer bg='/doc4.jpg' but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Muna Ekeke'/>
                           <Boxer bg='/doc4.jpg' but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Ada Geoffrey'/>
                           <Boxer bg='/doc4.jpg' but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Precious Oluomo'/>
                           <Boxer bg='/doc4.jpg' but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Ajala Jalingo'/>
                       </Div>
                       <Div style={{
                           width: "100%",
                           height: "400px",
                        //    backgroundColor: "tomato",
                           display: "flex",
                           justifyContent: "space-between",
                           alignItems: "center",
                       }}>
                           <Boxer but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Dickson Eneh'/>
                           <Boxer but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Nelson Elaye'/>
                           <Boxer but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Toheeb Raheem'/>
                           <Boxer but='Meet Pharmacist' spec='Pharmacy' title='customers: ' name='Luciana Anozie'/>
                       </Div>
                       <Button2 to='/allspecialist'>View All Specialists</Button2>
                   </CardHold>
               </Wrap2>
               <Wrap3>
                      <div>
                    <h1 style={{
                            color:"black",
                        }}>Meet Our Professional Team</h1>
                        <div style={{
                            width: "100px",
                            height: "2px",
                            marginBottom:"20px",
                            backgroundColor: "#5699AE"
                        }}></div>
                    </div>
                    <div style={{
                           lineHeight: "20px",
                        //    textAlign: "center",
                           width: "30%",
                           display: 'flex',
                        //    justifyContent:"center",
                           alignItems:"center",
                           color:"#888F94",
                           fontSize:"20px"
                       }}>Medical Center has been a medical service provider in all fields of medicine for the Diplomats and their families for the past twenty years and keeps on maintaining a successful cooperation between the two bodies.</div>
                       <CertDiv>
                           <Cert src='/doccert.jpg' alt=''/>
                           <Cert src='/doccert2.jpg' alt=''/>
                           <Cert  src='/cert.jpg' alt=''/>
                           <Cert src='/cert4.jpg' alt=''/>
                           <Cert src='/cert6.png' alt=''/>
                       </CertDiv>
                      </Wrap3>
                      <Wrap4 >
                            <Hold>
                                <span>
                            <MedicationIcon style={{
                                width:"100px",
                                height:"100px",
                                color:"white"
                            }}/>
                                </span>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                // textAlign:"center"
                            }}>
                            <h3 style={{
                              color:"white",
                            //   width:"80%",
                            //   backgroundColor:"red",
                            //   display: "flex",
                            //   justifyContent:"center",
                            //   alignItems:"center",
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
                      <Button style={{
                        color: "white"
                      }}>Have A Question? Ask US</Button>

                      </Wrap4>
            </Wrapper>
        </Container>
    )
}

export default Home;

const Navi = styled.div``;
const PharmButton = styled(Link)``;
const Button3 = styled(Link)`
    width: 150px;
    height: 40px;
    background-color: #5698ad;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    color: white;
`;

const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    /* background-image: ${({bg})=> bg}; */
    background-image: url('/doc4.jpg');
    background-size: cover;

`;

const Bio = styled.div`
    width: 250px;
    height: 70px;
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Location = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardDiv = styled.div`
    width: 350px;
    height: 200px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;

const One = styled.div`
    margin: 10px;
`;
const Two = styled.div`
    margin-bottom: 10px;
    margin-left: 10px;
    width: 300px;
    height: 30px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Footer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    color: white;

    @media Screen and (max-width: 768px){
        display: none;
    }
`;

const Wrap4 = styled.div`
    width: 100%;
    background-color: #5699AE;
    height: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media Screen and (max-width: 768px){
    }
`;
const Hold = styled.div`
    width: 70%;
    height: auto;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid silver;
    margin-top: 10px;
    margin-right: 55px;
    text-align: center;
    align-items: center;

    @media Screen and (max-width:768px){
        flex-direction: column;
        /* text-align: center; */
        justify-content: center;
        /* margin: 20px; */

        span{
            display: none;
        }
        h3{
            font-size: 15px;
            text-align: center;
        }
    }
`;

const CertDiv = styled.div`
       width:70%;
       display:flex;
       justify-content:space-between;
       align-items:center;
       /* background-color:yellow; */
       margin-top: 50px;

       @media Screen and (max-width: 768px){
           flex-direction: column;
           justify-content: center;
           align-items: center;
       }
`;

const Cert = styled.img`
    width: 250px;
    height: 200px;
    background-color: aqua;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 5px;

    @media Screen and (max-width: 768px){
    }

`;


const Button2 = styled(Link)`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5699AE;
    border-radius: 10px;
    color: white;
    font-size: 20px ;
    text-decoration: none;

    @media Screen and (max-width: 768px){
    margin-top: 420px;
    }
`;

const Wrap3 = styled.div`
     width: 90%;
     height: auto;
     /* background-color: red; */
     display: flex;
     flex-direction: column;
     justify-content: center;
     /* align-items: center; */
     margin-top: 100px;

     @media Screen and (max-width: 768px){
         margin-top: 50px;
         h1{
             /* text-align: center; */
             font-size: 25px;
             width: 100%;
         }
     }
`;

const Div = styled.div`
    width: 90%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
`;

const Button = styled.div`

    :hover{
        cursor: pointer
    }
`;
const Button1 = styled(Link)``;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Poppins;
    /* align-items: center; */
    /* object-fit: fill; */
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background-color: grey; */
`;
const Head = styled.div`
    width: 100%;
    padding-top: 200px;
    padding-bottom: 50px;
    height: 200px;
    background-color: #5699AE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0%;

    @media Screen and (max-width: 768px) {
        
    }

`;
const Wrap = styled.div`
    width: 90%;
    /* background-color: grey; */
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
   @media Screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* text-align: center; */
        margin-top: 10px;
        img{
            width: 300px;
        }
    }

`;
const Texts = styled.div`
    width: 100%;
    height: auto;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media Screen and (max-width: 768px){
        /* text-align: center; */

        p{
            /* text-align: center; */
        }
        h1{
            font-size: 25px;
            /* justify-content: flex-end; */
        }
    }
`;
const Wrap2 = styled.div`

    width: 90%;
    @media (min-width: 330px) and (max-width: 768px) {
       /* display: block; */
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;

   };
   /* background-color: #5699AE; */
    /* background-image: url('/desert bg.jpg');
    background-size: cover;
    background-repeat: no-repeat; */
`;

const CardHold = styled.div`
    width: 100%;
    /* height: 100vh; */
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
   @media (max-width: 768px) {
       flex-direction: column;
   }
    
`;
const Card = styled.div`
    width: 300px;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    /* object-fit: cover; */
    /* margin-bottom: 30px; */

`;
const Card1 = styled.div`
    width: 300px;
    height: 450px;
    margin-top: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: white;
    border-radius: 10px;
`;