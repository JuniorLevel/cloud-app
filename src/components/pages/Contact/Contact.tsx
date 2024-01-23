import ContactSection from 'components/contact-section/ContactSection';
import HomeStatistics from 'components/home-statistics/HomeStatistics';
import Layout from 'components/layout/Layout';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <Layout>
      <ContactSection />
      <HomeStatistics />
    </Layout>
  );
};

export default Contact;
