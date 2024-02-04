import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import ProfileSection from 'components/profile-section/ProfileSection';
import { FC } from 'react';
const Profile: FC = () => {
  return (
    <Layout>
      <ProfileSection />
      <HomeStatistics />
    </Layout>
  );
};

export default Profile;
