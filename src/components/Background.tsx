import React, { useState, useEffect, Children } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import NavigationBar from "./NavigationBar";

interface BackgroundProps {
  children?: React.ReactNode; // Explicitly type children as React.ReactNode
}

const Background = ({ children }: BackgroundProps) => {
  const images = [image1, image2, image3, image4]; // Array of imported images
  const [backgroundImage, setBackgroundImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once when component mounts

  const changeBackgroundImage = (index: number) => {
    setBackgroundImage(index);
  };

  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${images[backgroundImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        /* Add other background properties as needed */
        minHeight:
          "100vh" /* Ensure the background covers the entire viewport */,
        position: "relative", // Add position relative to contain the children
      }}
    >
      <NavigationBar /> {/* Render NavigationBar within the Background */}
      {children} {/* Render additional children */}
      <div
        className="background-buttons"
        style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => changeBackgroundImage(index)}
            style={{
              color: "blue",
              marginBottom: "10px", // Add spacing between buttons
            }}
          >
            {`Image ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Background;
