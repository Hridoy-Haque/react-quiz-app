import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/*" element={<PublicOutlet />}>
              <Route exact path="signup" element={<Signup />} />
              <Route exact path="login" element={<Login />} />
            </Route>
            <Route exact path="/*" element={<PrivateOutlet />}>
              <Route exact path="quiz" element={<Quiz />} />
            </Route>
            <Route exact path="/result" element={<Result />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
