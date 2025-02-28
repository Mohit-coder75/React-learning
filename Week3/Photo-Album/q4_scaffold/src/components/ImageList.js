import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present.
  // Use the shouldComponentUpdate lifecycle method here
  // Step1: Ensure valid images are at least 5 characters long and have no leading/trailing spaces
  // Step2: Only re-render if all images are valid
  shouldComponentUpdate(nextProps){
    console.log("Current Props:", this.props.images);
  console.log("Next Props:", nextProps.images);

  // Check if images prop is missing or not an array
  if (!Array.isArray(nextProps.images)) {
    console.warn("Invalid images prop received:", nextProps.images);
    return false;
  }

  // Filter and validate images
  const validImages = nextProps.images
    .map((image) => (typeof image === "string" ? image.trim() : ""))
    .filter((image) => image.length >= 5);

  console.log("Valid Images:", validImages);

  // If no valid images remain, prevent re-render
  if (validImages.length === 0) {
    console.warn("No valid images found. Preventing re-render.");
    return false;
  }

  // Prevent unnecessary re-render if valid images have not changed
  if (JSON.stringify(this.props.images) === JSON.stringify(validImages)) {
    console.log("No changes in valid images. Preventing re-render.");
    return false;
  }

  console.log("Valid images have changed. Re-rendering.");
  return true;
  }
  

  
  render() {
    console.log("ImageList Rendered! under imageList"); // Debugging purpose
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
