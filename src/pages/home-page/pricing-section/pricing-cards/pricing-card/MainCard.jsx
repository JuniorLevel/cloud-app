import PricingInfoCard from "../pricing-card/price-info/PriceInfoCard";
import PricingPrivileges from "./pricing-privileges/PricingPrivileges";
import { Button } from "../../../../../components/ui/Button";
const MainCard = (props) => {
  return (
    <div className="px-[15px] py-[60px] hd:flex-[0_1_500px] min-h-[700px] desktop:px-[100px] desktop:pt-[90px] desktop:pb-[56px] rounded-[20px] bg-cardMainBg bg-no-repeat bg-contain border-4">
      <div className="text-center">
        <span className="text-green-color text-[18px] mb-[13px]">
          Most popular
        </span>
        <PricingInfoCard trial="90 days" price="$46.99" />
        <PricingPrivileges text="1 Tb Free space" />
        <PricingPrivileges text="100 Mbit Speed" />
        <PricingPrivileges text="3000 sessions" />
        <Button
          styles="font-[Comfortaa] text-[24px] text-white font-bold w-full h-[79px] rounded-[62px] hover:shadow-3xl mb-[35px] bg-gradient-to-r from-[#5AC4FF] to-[#B250FF] hover:opacity-[0.9]"
          text="Sign up"
        />
        <span className="text-[20px] text-card-text-color">
          14-day money back guarantee
        </span>
      </div>
    </div>
  );
};

export default MainCard;
