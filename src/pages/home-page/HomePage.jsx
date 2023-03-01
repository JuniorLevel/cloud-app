import { Header } from "../../components/header/Header";
import { PreviewSection } from "./preview-section/PreviewSection";
import AdvantagesSection from "./advantages-section/AdvantagesSection";
import PricingSection from "./pricing-section/PricingSection";
import Wrapper from "../../components/layouts/Wrapper";
export const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <PreviewSection />
      <AdvantagesSection />
      <PricingSection />
    </Wrapper>
  );
};
