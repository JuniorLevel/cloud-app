import FilesSection from 'components/files-section/FilesSection';
import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import { FC } from 'react';

const Files: FC = () => {
  return (
    <Layout>
      <FilesSection />
      <HomeStatistics />
    </Layout>
  );
};

export default Files;
