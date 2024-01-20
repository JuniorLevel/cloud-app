import HomeAdvantages from 'components/home-advantages/HomeAdvantages';
import HomePrices from 'components/home-prices/HomePrices';
import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <Layout>
      <HomeAdvantages />
      <HomePrices />
      <HomeStatistics />
    </Layout>
  );
};

export default Home;
