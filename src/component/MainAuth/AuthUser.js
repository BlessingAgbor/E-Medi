import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductView from "../pages/Product/Product";
import Consult from "../pages/User/Consult";
import Home from "../Home/Home"
import Product from "../pages/Pharmacy/Products";
import DoctorDetail from "../pages/Doctor/DetailDoctor";
// import UserHeader from "../pages/User/UserHeader";

import Appointment from "../pages/User/Appointment";
import PharmSignUp from "../pages/Pharmacy/SignUp";
import SignUpDoc from "../pages/Doctor/SignUpDoc"
import Cart from "../pages/User/AddToCart"
import UploadDrugs from "../pages/User/UploadDrugs";
import Header from "../header/Header"
import CheckOut from "../pages/User/CheckOut"
const AuthUser = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<CheckOut />} />
        <Route path="/2" element={<UploadDrugs />} />
        <Route path="/3" element={<PharmSignUp />} />
      </Routes>
    </div>
  );
};

export default AuthUser;
