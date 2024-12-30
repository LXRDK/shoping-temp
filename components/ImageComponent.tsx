"use client";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";

// Constants for magnifier size and zoom level
const MAGNIFIER_SIZE = 300;
const ZOOM_LEVEL = 2.5;

// ImageEffect component
const ImageComponent = ({ productUrl }: { productUrl: string }) => {
  // State variables
  const [zoomable, setZoomable] = useState(false); // Start with zoom off
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    mouseX: 0,
    mouseY: 0,
  });

  // Event handlers
  const handleMouseEnter = (e: MouseEvent) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true); // Enable zoom on mouse enter
    updatePosition(e); // Update initial position when entering
  };

  const handleMouseLeave = () => {
    setZoomable(false); // Disable zoom on mouse leave
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e); // Update magnifier position on mouse move
  };

  const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      mouseX: x - MAGNIFIER_SIZE / 2,
      mouseY: y - MAGNIFIER_SIZE / 2,
    });
  };

  // Render method
  return (
    <div className="flex justify-center items-center rounded-xl overflow-hidden">
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        className="relative w-[500] h-96 overflow-hidden  rounded-xl"
      >
        {/* Display the image */}
        <div className="relative w-full h-full rounded-xl">
          <Image
            className="object-contain rounded-xl" // Changed to 'contain' to ensure image is not cropped
            alt="Zoomable image"
            src={productUrl}
            fill // Apply the 'fill' prop to make the image fill its container
            style={{ objectFit: "contain", borderRadius: "30px" }} // Apply 'objectFit' as 'contain' to avoid cropping
          />
        </div>

        {/* Magnifying Glass */}
        <div
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
            backgroundImage: `url(${productUrl})`,
            backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${
              imageSize.height * ZOOM_LEVEL
            }px`,
            display: zoomable ? "block" : "none", // Show the magnifier when zoomable is true
            top: `${position.mouseY}px`, // Magnifier's Y position
            left: `${position.mouseX}px`, // Magnifier's X position
            width: `${MAGNIFIER_SIZE}px`, // Magnifier width
            height: `${MAGNIFIER_SIZE}px`, // Magnifier height
          }}
          className="z-50 border-4 rounded-full pointer-events-none absolute border-gray-500"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
