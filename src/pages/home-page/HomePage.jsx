import { Header } from "../../components/header/Header";
import { PreviewSection } from "./preview-section/PreviewSection";
import { Layout } from "../../components/layout/Layout";
import AdvantagesSection from "./advantages-section/AdvantagesSection";
export const HomePage = () => {
  return (
    <Layout>
      <Header />
      <PreviewSection />
      <AdvantagesSection />
    </Layout>
  );
};
