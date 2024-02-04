import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import LoginSection from 'components/login-section/LoginSection';
import { FC } from 'react';

const Login: FC = () => {
  return (
    <Layout>
      <LoginSection />
      <HomeStatistics />
    </Layout>
  );
};

export default Login;
