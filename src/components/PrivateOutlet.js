import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateOutlet() {
  const { currentUser } = useAuth();

  currentUser ? console.log("true") : console.log("false");

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
