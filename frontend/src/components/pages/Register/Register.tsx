import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import RegisterSection from 'components/register-section/RegisterSection';
import { FC } from 'react';

const Register: FC = () => {
  return (
    <Layout>
      <RegisterSection />
      <HomeStatistics />
    </Layout>
  );
};

export default Register;
