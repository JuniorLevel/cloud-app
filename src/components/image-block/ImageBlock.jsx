import React from "react";
import imgMobile from "../../images/home-page/preview-mobile-img.png";
import imgDesktop from "../../images/home-page/preview-img.png";
export const ImageBlock = () => {
  return (
    <div className="flex w-full justify-center order-1 hd:w-[55%] ">
      <img
        className="hidden md:block hd:hidden desktop:block"
        src={imgDesktop}
        alt="preview-img"
      />
      <img
        className="order-1 block md:hidden hd:block desktop:hidden"
        src={imgMobile}
        alt="preview-mobile-img"
      />
    </div>
  );
};
