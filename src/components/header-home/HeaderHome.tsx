import Container from 'components/container/Container';
import HeaderNav from 'components/header-nav/HeaderNav';
import HeaderPanel from 'components/header-panel/HeaderPanel';
import Logo from 'components/logo/Logo';
import { FC } from 'react';
import styles from './HeaderHome.module.scss';
import HeaderHomePreview from './header-home-preview/HeaderHomePreview';

const HeaderHome: FC = () => {
  return (
    <header className={styles.headerHome}>
      <Container width={1200}>
        <div className={styles.headerHomeItem}>
          <Logo />
          <HeaderNav />
          <HeaderPanel />
        </div>
      </Container>
      <HeaderHomePreview />
    </header>
  );
};

export default HeaderHome;
