import React from "react";
export const ImageBlock = (props) => {
  return (
    <div className={props.styles}>
      <img src={props.src} alt="img" />
    </div>
  );
};
