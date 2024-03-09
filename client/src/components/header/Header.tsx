import AuthPanel from 'components/auth-panel/AuthPanel';
import Container from 'components/container/Container';
import GuestPanel from 'components/guest-panel/GuestPanel';
import HeaderNav from 'components/header-nav/HeaderNav';
import Logo from 'components/logo/Logo';
import BurgerMenu from 'components/ui/burger-menu/BurgerMenu';
import { FC } from 'react';
import useUserStore from 'store/user.store';
import styles from './Header.module.scss';
const Header: FC = () => {
  const isAuth = useUserStore(state => state.isAuth);
  return (
    <header className={styles.header}>
      <Container width={1200}>
        <div className={styles.headerItem}>
          <Logo />
          <div className="flex justify-center items-center flex-auto sm:hidden md:hidden lg:hidden">
            <HeaderNav />
            {!isAuth && <GuestPanel />}
            {isAuth && <AuthPanel />}
          </div>
        </div>
        <BurgerMenu />
      </Container>
    </header>
  );
};

export default Header;
