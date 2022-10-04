import React from "react";
import "./App.css";
import VerifyPass from "./Component/VerifyPass/VerifyPass";
import SignIn from "./Component/SignIn/SignIn";
import ForgotPass from "./Component/Forgotpass/ForgotPass";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp/Signup";
import Home from "./Component/Home/Home";
import VerifyUser from "./Component/VerifyUser/VerifyUser";
import Settings from "./Component/Settings/Settings";
import Profile from "./Component/UpdateUser/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/VerifyPass" element={<VerifyPass />} />
        <Route path="/SignUp/VerifyUser" element={<VerifyUser />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Component/Home/Home";
// import SignIn from "./Component/SignIn/SignIn";
// import SignUp from "./Component/SignUp/Signup";
// import ForgotPass from "./Component/Forgotpass/ForgotPass";
// import VerifyPass from "./Component/VerifyPass/VerifyPass";
// import VerifyUser from "./Component/VerifyUser/VerifyUser";
// import Settings from "./Component/Settings/Settings";
// import Profile from "./Component/UpdateUser/Profile";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/ForgotPassword" element={<ForgotPass />} />
//         <Route path="/VerifyPassword" element={<VerifyPass />} />
//         <Route path="/SignUp/VerifyUser" element={<VerifyUser />} />
//         <Route path="/Profile" element={<Profile />} />
//         <Route path="/Settings" element={<Settings />} />
//       </Routes>
//     </>
//   );
// }
// export default App;
