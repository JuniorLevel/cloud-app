import React from "react";
import imgDesktop from "../../images/home-page/preview-img.png";
export const ImageBlock = () => {
  return (
    <div className="flex justify-center order-1">
      <img
        className="md:block desktop:block"
        src={imgDesktop}
        alt="preview-img"
      />
    </div>
  );
};
