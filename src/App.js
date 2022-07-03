import Header from "./component/header/Header"
import PharmSignUp from "./component/pages/Pharmacy/SignUp"
import DocSignUp from "./component/pages/Doctor/SignUpDoc"
import Auth from "./component/MainAuth/Auth"
import AuthUser from "./component/MainAuth/AuthUser"
import AllDashBoard from "./component/pages/Dashboard/AllDashboard"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      
      <AuthUser />
      <AllDashBoard />
    </BrowserRouter>
  );
}

export default App;
