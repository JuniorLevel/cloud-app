import Container from 'components/container/Container';
import ProfileBlocks from 'components/profile-blocks/ProfileBlocks';
import ProfileInfo from 'components/profile-info/ProfileInfo';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';
import styles from './ProfileSection.module.scss';

const ProfileSection: FC = () => {
  return (
    <section className={styles.profileSection}>
      <Container width={1200}>
        <Title text="Profile" />
        <ContentText />
        <ProfileInfo />
        <ProfileBlocks />
      </Container>
    </section>
  );
};

export default ProfileSection;
