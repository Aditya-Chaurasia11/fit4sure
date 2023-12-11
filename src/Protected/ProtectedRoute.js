import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  //   const [auth, setAuth] = useState(false);
  const token = localStorage.getItem("token");
  if (token) {
    // Token is found in localStorage
    console.log("Token:", token);
  } else {
    // Token is not found in localStorage
    console.log("Token not found");
  }
  //   let auth = { token: false };/

  return token ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoutes;
