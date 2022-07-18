import React from "react";
import signupImage from "../Assets/images/signup.svg";
import classes from "../Styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}
