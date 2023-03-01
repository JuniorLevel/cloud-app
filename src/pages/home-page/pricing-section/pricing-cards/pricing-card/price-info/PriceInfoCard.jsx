const PriceInfoCard = (props) => {
  return (
    <div className="text-center">
      <p className="text-title-color text-[48px] desktop:mb-[39px]">
        {props.trial}
      </p>
      <p className="mb-[90px] text-purple-color text-[64px] desktop:mb-[115px]">
        {props.price}
      </p>
      <div className="mb-[30px] mx-auto w-[70%] desktop:w-full h-[2px] bg-grey-color desktop:mb-[60px] opacity-[0.2]"></div>
    </div>
  );
};

export default PriceInfoCard;
