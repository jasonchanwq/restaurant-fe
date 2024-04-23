import React, { useState, useEffect, Children } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const Background = ({}) => {
  const images = [image1, image2, image3, image4]; // Array of imported images
  const [backgroundImage, setBackgroundImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once when component mounts

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
      }}
    ></div>
  );
};

export default Background;
