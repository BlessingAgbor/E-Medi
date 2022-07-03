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
              <h1>Registration as an online Doctor or Specialist</h1>
            </strong>{" "}
            <li>Pros of Virtual Care</li>
            We are living in the age of virtual care. With over 2/3 of Americans
            now using smartphones and tablets, the mobile revolution has helped
            make adopting virtual care software a much less costly and
            technologically complex endeavor than in the past. Many modern
            virtual care software solutions require only a computer or
            smartphone, and an internet connection to complete a virtual care
            visit. 1. Virtual Care Can Expand Your Patient Base. With virtual
            care, a patient can get convenient healthcare from the comfort of
            their own home. This allows many patients to access specialists they
            wouldn’t normally be able to see for treatment. Hospitals and health
            systems can take advantage of this by expanding their patient base
            and strengthening relationships with existing patients.
            <br /> Virtual care allows specialists to connect with patients
            outside of their geographic region, which is especially effective
            in: Post surgical follow-up Behavioral health COVID-19 Urgent care
            ED Triage <li>Virtual Care is Cost-Efficient.</li> Virtual care is
            often a less expensive alternative to in-office visits for both
            patients and providers. Removing the time sitting in the waiting
            room and commuting to the clinic can be a tremendous benefit for
            them, especially if they have a chronic condition that requires
            frequent appointments. Virtual care can allow providers to have
            follow-up visits or check in on chronic patients with a smaller time
            commitment than an in-office visit.
            <li>Engage Patients and Get Better Patient Outcomes.</li> Being able
            to check in on a patient remotely allows providers to reinforce
            treatment adherence – which can be a crucial part of preventing
            unnecessary hospital admissions and maintaining patient health. If a
            patient has questions about a medication or thinks they need to
            change their treatment plan, virtual care allows them to quickly and
            conveniently check in with their provider for guidance. Virtual care
            can also be a great tool for helping patients feel more in charge of
            their health, a confidence vital for lifetime good health.
            <h1>Cons of Virtual Care</h1>While many are optimistic about the
            potential of virtual care, others in the industry still have some
            concerns. Virtual care technology has come a long way, but it’s not
            flawless. And with the breakneck speed that telehealth technology is
            developing, the regulatory landscape has been struggling to keep up.
            The most obvious disadvantages of virtual care involve the
            continuing need for clearer, streamlined policies and standards
            around telehealth practice to enable easier implementation.{" "}
            <li>Physical Examination is Limited.</li>
            Until relatively recently, live video communications technology
            wasn’t advanced enough to allow for comprehensive medical care.
            Today, most patients and providers have easy access to technology
            that allows high-quality video-conferencing. But for some providers,
            a virtual visit may not seem enough to diagnose or treat a patient.
            Although virtual care can be very effective for many minor
            conditions, physicians may not feel comfortable conducting an
            examination over video chat. Some patients may also see this as a
            reason to choose in-person visit over virtual appointments.
          </Brief>
        </Brand>
        <Line />
        {/* onSubmit={onSubmit} */}
        <MainCard>
          <LogoTitle1>Register as a Doctor</LogoTitle1>
          <Name>
            <InputTitle>Name</InputTitle>
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
            <InputTitle>Area of specialty</InputTitle>

            <select>
              <option>Neurologist</option>
              <option>Dyslexia</option>
              <option>Oncologist</option>
              <option>Dermatologist</option>
              <option>General Surgeon</option>
            </select>
          </Name>
          <Error>{/* {errors?.displayName?.message} */}</Error>
          {/* <br /> */}
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
  width: 600px;
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
  b {
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
  flex: 1;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
