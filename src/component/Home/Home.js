import React from 'react'
import Hero from "../hero/Hero"
import Service from "../pages/Services"
import About from "../pages/About"
import Docs from "../pages/Doctor/Doctor";
import Header from "../header/Header"
import {AlikeComp, AlikeComp2} from "../pages/AlikeComp"
const Home = () => {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Header />
      <Hero />
      <Service />
      <About />
      <Docs />
      <AlikeComp />
      <AlikeComp2 />
    </div>
  );
}

export default Home