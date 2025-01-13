import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import ProfileSection from 'components/profile-section/ProfileSection';
import { FC, useEffect } from 'react';
import useUserStore from 'store/user.store';
const Profile: FC = () => {
  const getUserInfo = useUserStore(state => state.getUserInfo);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <Layout>
      <ProfileSection />
      <HomeStatistics />
    </Layout>
  );
};

export default Profile;
