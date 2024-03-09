import { useGSAP } from '@gsap/react';
import AuthPanel from 'components/auth-panel/AuthPanel';
import Container from 'components/container/Container';
import GuestPanel from 'components/guest-panel/GuestPanel';
import HeaderNav from 'components/header-nav/HeaderNav';
import Logo from 'components/logo/Logo';
import BurgerMenu from 'components/ui/burger-menu/BurgerMenu';
import gsap from 'gsap';
import { FC, useRef } from 'react';
import useUserStore from 'store/user.store';
import styles from './HeaderHome.module.scss';
import HeaderHomePreview from './header-home-preview/HeaderHomePreview';

const HeaderHome: FC = () => {
  const isAuth = useUserStore(state => state.isAuth);
  const headerRef = useRef(null);
  const HeaderHomePreviewRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: -500,
      },
      {
        opacity: 1,
        y: 0,
      },
    ).fromTo(
      HeaderHomePreviewRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    );
  });

  return (
    <header className={styles.headerHome}>
      <Container width={1200}>
        <div className={styles.headerHomeItem} ref={headerRef}>
          <Logo />
          <div className="flex justify-center items-center flex-auto sm:hidden md:hidden lg:hidden">
            <HeaderNav />
            {!isAuth && <GuestPanel />}
            {isAuth && <AuthPanel />}
          </div>
        </div>
        <BurgerMenu />
      </Container>
      <div ref={HeaderHomePreviewRef}>
        <HeaderHomePreview />
      </div>
    </header>
  );
};

export default HeaderHome;
