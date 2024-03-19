import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import PricingPrices from 'components/pricing-prices/PricingPrices';
import { FC } from 'react';

const Pricing: FC = () => {
  return (
    <Layout>
      <PricingPrices />
      <HomeStatistics />
    </Layout>
  );
};

export default Pricing;
