import React from "react";
import logo from "../assets/logo.png";

const Background = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        /* Add other background properties as needed */
        minHeight:
          "100vh" /* Ensure the background covers the entire viewport */,
      }}
    ></div>
  );
};

export default Background;
