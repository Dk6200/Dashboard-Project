import React from "react";

const Image = ({ src }) => {
  return (
    <div>
      <div className="w-10">
        <img src={src} alt="img" />
      </div>
    </div>
  );
};

export default Image;
