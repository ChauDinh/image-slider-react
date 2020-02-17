import React from "react";

const ImageComponent = ({ photo, loading }) => {
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="image">
      <img src={photo ? `${photo.thumbnailUrl}` : ""} alt="img" />
    </div>
  );
};

export default ImageComponent;
