import FaqAccordion from 'components/faq-accordion/FaqAccordion';
import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import { FC } from 'react';

const Faq: FC = () => {
  return (
    <Layout>
      <FaqAccordion />
      <HomeStatistics />
    </Layout>
  );
};

export default Faq;
