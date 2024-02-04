import AuthPanel from 'components/auth-panel/AuthPanel';
import Container from 'components/container/Container';
import GuestPanel from 'components/guest-panel/GuestPanel';
import HeaderNav from 'components/header-nav/HeaderNav';
import Logo from 'components/logo/Logo';
import { FC } from 'react';
import useUserStore from 'store/user.store';
import styles from './HeaderHome.module.scss';
import HeaderHomePreview from './header-home-preview/HeaderHomePreview';

const HeaderHome: FC = () => {
  const isAuth = useUserStore(state => state.isAuth);

  return (
    <header className={styles.headerHome}>
      <Container width={1200}>
        <div className={styles.headerHomeItem}>
          <Logo />
          <HeaderNav />
          {!isAuth && <GuestPanel />}
          {isAuth && <AuthPanel />}
        </div>
      </Container>
      <HeaderHomePreview />
    </header>
  );
};

export default HeaderHome;
