import React from "react";
import loginBackground from "../images/loginBackground.png";

// Login Background Component
const LoginBackground = () => (
  <div className="background">
    <img
      className="background__image"
      src={loginBackground}
      alt="BackgroundImages"
    />
  </div>
);

export default LoginBackground;
