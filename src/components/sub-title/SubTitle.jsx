import React from "react";

export const SubTitle = () => {
  return (
    <React.Fragment>
      <h2 className="font-[Montserrat] text-[12px] tablet:text-[18px] hd:text-[18px] desktop:text-[22px] text-title-color leading-[150%] font-normal  uppercase tracking-[0.905em] mb-[32px]">
        Online storage
      </h2>
      <span className="hidden hd:block desktop:w-[95%] h-[2px] bg-title-color mb-[40px]"></span>
    </React.Fragment>
  );
};
