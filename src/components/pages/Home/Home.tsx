import HomeAdvantages from 'components/home-advantages/HomeAdvantages';
import HomePreview from 'components/home-preview/HomePreview';
import HomePrices from 'components/home-prices/HomePrices';
import Layout from 'components/layout/Layout';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <Layout>
      <HomePreview />
      <HomeAdvantages />
      <HomePrices />
    </Layout>
  );
};

export default Home;
