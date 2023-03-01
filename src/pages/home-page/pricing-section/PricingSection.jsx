import { Title } from "../../../components/title/Title";
import PricingCards from "./pricing-cards/PricingCards";
import { Container } from "../../../components/layouts/Container";

const PricingSection = () => {
  return (
    <section className="mt-[200px] desktop:bg-pricingBg bg-no-repeat bg-left-bottom">
      <Container>
        <div className="tracking-[0.985em] font-[300">
          <Title text="Become a PREMIUM MEMBER" />
        </div>
        <div className="text-center text-grey-color text-[30px] mb-[76px]">
          <span className="block">Premium Business</span>
          <span>1 TB free space and 4 TB monthly transfer</span>
        </div>
        <PricingCards />
      </Container>
    </section>
  );
};
// letter-spacing
export default PricingSection;
