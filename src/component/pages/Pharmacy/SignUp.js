import React from "react";
import styled from "styled-components";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import axios from "axios";

const Register = () => {
  //   const yupSchema = yup.object().shape({
  //     schoolName: yup.string().required("Pharmacy name has to be filled"),
  //     fullName: yup.string().required("full name has to be entered"),
  //     phoneNumber: yup.number().integer().required(),
  //     email: yup.string().email().required("email has to be filled"),
  //     displayName: yup.string().required("displayed name has to be filled"),
  //     password: yup.string().required("Please enter your preferred password"),
  //     confirm: yup
  //       .string()
  //       .oneOf([yup.ref("password"), null], "Your password has to match"),
  //   });

  //   const {
  //     handleSubmit,
  //     reset,
  //     register,
  //     formState: { errors },
  //   } = useForm({ resolver: yupResolver(yupSchema) });

  // //   const onSubmit = handleSubmit(async (val) => {
  // //     console.log(val);
  // //     const localURL = "http://localhost:2331";
  // //     const url = `${localURL}/api/admin/register`;

  // //     await axios.post(url, val);

  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Please check your email for account verification",
  //       showConfirmButton: false,
  //       timer: 2500,
  //     });
  // //   });

  return (
    <Container>
      <Wrapper>
        <Brand>
          <Logo to="/">
            <Bar>E-Medi</Bar>
            {/* <LogoTitle>SkoolKode</Log oTitle> */}
          </Logo>

          <Text>
            We know you are aware of this but said to do a quick <b>Reminder</b>
          </Text>
          <Brief>
            <strong>
              <li>Registration of Pharmaceutical Premises</li>
            </strong>{" "}
            The Registration of Pharmaceutical Premises Regulations, 2005 ("the
            Registration Regulation"), provides for registration of new
            pharmaceutical premises and renewal of old premises; It provides
            that where the premises sought to be registered is a retail
            pharmacy; the company shall be wholly owed by a registered
            pharmacist or in partnership with other registered pharmacist. For a
            pharmaceutical premises involved in wholesale, distribution and
            importation of drugs, poisons and devices, there shall be at least
            one registered
            <b>pharmacist</b> on the Board of Directors of the Company. <br />
            The business shall be carried out under the direct personal control
            and management of a Superintendent Pharmacist. Where the primary
            object of the company is pharmaceutical manufacturing, there shall
            be at least one registered pharmacist on the Board of Directors of
            the Company; the business shall be carried out under the direct
            personal control and management of a Superintendent Pharmacist.
            <br />
          </Brief>
          <Brief>
            <strong>
              <li>
                Inspection, Location and Structure of Pharmaceutical Premises
              </li>
            </strong>
            The Inspection, Location and Structure of Pharmaceutical Premises
            Regulations, 2005 ("the Inspection Regulation") establishes a
            Pharmaceutical Inspectorate Division which consist of registered
            Pharmacists designated as pharmaceutical inspectors, appointed by
            the Council to enter into pharmaceutical premises and inspect to
            ensure due compliance with the provisions of the Regulation. The
            Inspection Regulation provides for the location of pharmaceutical
            premises. <br />
            It shall not be located in motor parks, environment close to a
            location where commercial activities and enterprise are standing and
            growing; market places including kiosks and road side retail. It
            provides that any pharmaceutical premises surrounded or covered
            completely by a growing market or standing close to it shall be
            moved to another suitable location two years after formal
            notification to do so by the Council. Pharmaceutical premises within
            a shopping centre shall not be more than three and they shall be
            well spaced out. Pharmaceutical premises shall be sited not less
            than two hundred meters from each other.
            <br /> Pharmaceutical practice in Nigeria is also regulated by the
            National Agency for Food and Drug Administration Act. The Act
            establishes the National Agency for Food and Drug Administration
            ("NAFDAC"). The Agency has a complementary role to play in the
            registration of pharmaceutical premises. It does the following;
            <li>
              The Agency is in charge of evaluation and registration of
              Pharmaceutical products;
            </li>
            <li>
              Post market surveillance and risk analysis of products; Control of
              product import and export;
            </li>
            <li>and Regulation of product promotion and public education.</li>
          </Brief>
        </Brand>
        <Line />
        {/* onSubmit={onSubmit} */}
        <MainCard>
          <LogoTitle1>Register as a Pharmacy</LogoTitle1>
          <Name>
            <InputTitle>Pharmacy Name</InputTitle>
            <Input
              placeholder="e.g: Shanna Pharmacy"

              //   {...register("schoolName")}
            />
          </Name>
          <Error>{/* {errors?.schoolName?.message} */}</Error>
          <Name>
            <InputTitle>Location</InputTitle>

            <select>
              <option>Ajegunle</option>
              <option>Lagos-Island</option>
              <option>Ebute-metta</option>
              <option>Yaba</option>
              <option>Alagomeji</option>
            </select>
          </Name>
          <Error>{/* {errors?.displayName?.message} */}</Error>
          {/* <br /> */}
          <Name>
            <InputTitle>Your Full Name</InputTitle>
            <Input
              placeholder="e.g: Blessing Agbor"
              //  {...register("fullName")}
            />
          </Name>
          <Error>{/* {errors?.fullName?.message} */}</Error>
          <Hold>
            <PhoneData>
              <Phone>
                <InputTitle>Phone No</InputTitle>
                <Input
                  placeholder="e.g: 2348074496358"

                  //   {...register("phoneNumber")}
                />
              </Phone>
              <Error>{/* {errors?.phoneNumber?.message} */}</Error>
            </PhoneData>

            <PhoneData>
              <Phone1>
                <InputTitle>Email</InputTitle>
                <Input
                  placeholder="e.g: shanna@gmail.com"
                  //   {...register("email")}
                />
              </Phone1>
              <Error>{/* {errors?.email?.message} */}</Error>
            </PhoneData>
          </Hold>

          <Hold>
            <PhoneData>
              <Phone>
                <InputTitle>Password</InputTitle>
                <Input
                  placeholder="************"
                  type="password"
                  //   {...register("password")}
                />
              </Phone>
              <Error>{/* {errors?.password?.message} */}</Error>
            </PhoneData>

            <PhoneData>
              <Phone1>
                <InputTitle>Confirm Password</InputTitle>
                <Input
                  placeholder="************"
                  type="password"

                  //   {...register("comfirm")}
                />
              </Phone1>
              <Error>{/* {errors?.comfirm?.message} */}</Error>
            </PhoneData>
          </Hold>
          <Name>
            <InputTitle>Pharmacist</InputTitle>
            <Input
              placeholder="Full name"
              // {...register("displayName")}
            />
          </Name>
          <Error>{/* {errors?.displayName?.message} */}</Error>
          <Name>
            <InputTitle>Area of Specialty</InputTitle>
            <Input
              placeholder="Geriatic"
              // {...register("displayName")}
            />
          </Name>
          <Error>{/* {errors?.displayName?.message} */}</Error>
          <Name>
            <InputTitle>License Number</InputTitle>
            <Input
              placeholder="license no:"
              // {...register("displayName")}
            />
          </Name>
          <Error>{/* {errors?.displayName?.message} */}</Error>
          <Name>
            <InputTitle>Physical Address Location</InputTitle>
            <Input
              placeholder="e.g 15 Borno-Way, Ebutte-metta,...."
              // {...register("displayName")}
            />
          </Name>
          <Error>{/* {errors?.displayName?.message} */}</Error>
          <Button type="submit">Continue</Button>

          <Social>
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
          </Social>
        </MainCard>
      </Wrapper>
    </Container>
  );
};

export default Register;

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

const Icon3 = styled(AiFillLinkedin)`
  font-size: 35px;
  color: #0077b7;
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

const Icon1 = styled(AiFillFacebook)`
  font-size: 35px;
  color: #475993;
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

const Hold = styled.div`
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  width: 100%;
  margin: 17px 0;
`;

const Phone1 = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-left: 5px;
`;

const Phone = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-right: 5px;
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

const MainCard = styled.form`
  width: 50%;
  flex-direction: column;
  display: flex;
  color:#e5e8ef;
  align-items: center;
  @media (max-width: 800px) {
    width:80%;
    justify-content:center;
    margin-top: 40px;

  }
`;

const Line = styled.div`
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 50px;
`;

const Brief = styled.div`
  margin-top: 20px;
  color: gray;

  font-size: 10px;
  text-align: justify;
  b{
    margin: 0 5px;
  }
`;

const Text = styled.div`
  font-weight: 700;
  margin-top: 25px;
  text-align: center;
  width: 300px;
  font-size: 22px;
  line-height: 1.2;
  color: #009688;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px 0;
`;

const LogoTitle1 = styled.div`
  font-weight: 700;
  color: #009688;
  margin-bottom: 50px;

  font-size: 30px;
  /* text-transform: uppercase; */
`;

const LogoTitle = styled.div`
  font-weight: 500;
  color: #009688;
`;

const Bar = styled.div`
  /* width: 100px;
  height: 100px; */
  /* border-radius: 10px; */
  margin-bottom: 15px;
  /* background-color: #3e435e; */
  /* box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  color: #009688;
`;

const Brand = styled.div`
 width:50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background: grey; */
  /* text-align: justify; */
  @media (max-width: 800px) {
    flex-direction: column;
    width: 80%;
  }
`;

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background: blue; */
  @media (max-width: 800px) {
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
