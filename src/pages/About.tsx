import React from "react";
import image1 from "../assets/image1.jpg";

const BackgroundImage = () => {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px", // Set height as required
        zIndex: 0,
      }}
    ></div>
  );
};

const Header = () => {
  return (
    <div
      className="header"
      style={{
        position: "absolute",
        top: "50%", // Adjust the positioning as needed
        left: "50%",
        transform: "translate(-50%, -50%)", // Center the header horizontally and vertically
        zIndex: 1, // Ensure the header is on top of the background image
        textAlign: "center", // Optional: Align header content center
      }}
    >
      {/* Your header content goes here */}
      <h1>Header Content</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <BackgroundImage />
      <Header />
    </div>
  );
};

export default About;
