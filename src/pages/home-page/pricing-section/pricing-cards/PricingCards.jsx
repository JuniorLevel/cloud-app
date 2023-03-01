import Card from "./pricing-card/Card";
import MainCard from "./pricing-card/MainCard";

const PricingCards = () => {
  return (
    <div className="flex justify-center items-center gap-[10px]">
      <Card trial="30 days" price="$20.99" />
      <MainCard />
      <Card trial="365 days" price="$127.99" />
    </div>
  );
};

export default PricingCards;
