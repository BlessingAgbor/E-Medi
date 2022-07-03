import React from 'react'
import PharmDash from "../Pharmacy/PharmacyDashboard"
import Auth from "../../MainAuth/Auth"
import {Routes, Route} from "react-router-dom"
import Detail from "../../pages/Pharmacy/DetailAdmin"
import DoctorDetail from "../../pages/Doctor/DetailDoctor"
import Product from "../../pages/Product/Product"
const AllDashboard = () => {
  return (
    <div>
      {/* <PharmDash /> */}
      <Routes>
        <Route path="/pharm" element={<Detail />} />
        <Route path="/doc" element={<DoctorDetail />} />
        <Route path="/drugs" element={<Product />} />
      </Routes>
    </div>
  );
}

export default AllDashboard