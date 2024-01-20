import Container from 'components/container/Container';
import HeaderNav from 'components/header-nav/HeaderNav';
import HeaderPanel from 'components/header-panel/HeaderPanel';
import Logo from 'components/logo/Logo';
import { FC } from 'react';
import styles from './Header.module.scss';
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container width={1200}>
        <div className={styles.headerItem}>
          <Logo />
          <HeaderNav />
          <HeaderPanel />
        </div>
      </Container>
    </header>
  );
};

export default Header;
