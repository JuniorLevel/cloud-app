import PricingInfoCard from "./price-info/PriceInfoCard";
import PricingPrivileges from "./pricing-privileges/PricingPrivileges";

const Card = (props) => {
  return (
    <div className="hidden hd:flex flex-[0_1_450px] pt-[90px] pb-[56px] rounded-[20px] bg-cardBg bg-no-repeat bg-contain px-[75px] border-4">
      <div className="mx-auto">
        <PricingInfoCard trial={props.trial} price={props.price} />
        <PricingPrivileges text="1 Tb Free space" />
        <PricingPrivileges text="100 Mbit Speed" />
        <PricingPrivileges text="3000 sessions" />
      </div>
    </div>
  );
};

export default Card;
