import { useGSAP } from '@gsap/react';
import Container from 'components/container/Container';
import ProfileBlocks from 'components/profile-blocks/ProfileBlocks';
import ProfileInfoTable from 'components/profile-info/ProfileInfoTable';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import gsap from 'gsap';
import { FC, useRef } from 'react';
import styles from './ProfileSection.module.scss';

const ProfileSection: FC = () => {
  const titleRef = useRef(null);
  const avatarRef = useRef(null);
  const tableRef = useRef(null);
  const blocksRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    const mm = gsap.matchMedia();
    mm.add(
      '(min-width: 1024px)',
      () => {},
      tl
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: -500,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          avatarRef.current,
          {
            rotate: 360,
          },
          {
            rotate: 0,
          },
        )
        .fromTo(
          tableRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
          },
        )
        .fromTo(
          blocksRef.current,
          {
            y: 500,
          },
          {
            y: 0,
          },
        ),
    );
  });

  return (
    <section className={styles.profileSection}>
      <Container width={1200}>
        <div ref={titleRef}>
          <Title text="Профиль" />
          <ContentText />
        </div>
        <div
          ref={avatarRef}
          className="mx-auto min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] w-full h-full mb-8"
        >
          <img
            className="rounded-[50%]"
            src="../../../images/profiles/profile-img.jpg"
            alt="profile-img"
          />
        </div>
        <div ref={tableRef}>
          <ProfileInfoTable />
        </div>
        <div ref={blocksRef}>
          <ProfileBlocks />
        </div>
      </Container>
    </section>
  );
};

export default ProfileSection;
