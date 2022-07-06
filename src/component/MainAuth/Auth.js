import React from 'react'
import { Routes, Route} from "react-router-dom"
import Detail from "../pages/Pharmacy/DetailAdmin"
import PharmacyDashboard from '../pages/Pharmacy/PharmacyDashboard'
import UserDash from "../pages/User/UserDashboard"
import DoctorDetail from "../pages/Doctor/DetailDoctor"
import Drugs from "../pages/Product/Product"

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<UserDash />} />

        <Route path="/pharm" element={<Detail />} />
        <Route path="/doc" element={<DoctorDetail />} />
        <Route path="/drugs" element={<Drugs />} />
      </Routes>
    </div>
  );
}

export default Auth