import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
