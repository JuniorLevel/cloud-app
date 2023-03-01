import checkSvg from "../../../../../../images/home-page/svg/check.svg";

const PricingPrivileges = (props) => {
  return (
    <div className="flex justify-between items-baseline">
      <p className="text-[24px] text-card-text-color pb-[38px] last:pd-[0]">
        {props.text}
      </p>
      <img src={checkSvg} alt="check" />
    </div>
  );
};

export default PricingPrivileges;
