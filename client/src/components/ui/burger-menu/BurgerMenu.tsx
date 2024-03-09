import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderNav from 'components/header-nav/HeaderNav';
import {
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
} from 'constants/consts-routes';
import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useUserStore from 'store/user.store';
import styles from './BurgerMenu.module.scss';
const BurgerMenu: FC = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const isAuth = useUserStore(state => state.isAuth);
  const currentUser = useUserStore(state => state.currentUser);
  const logout = useUserStore(state => state.logout);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  type TBurgerMenuClickOutside = (e: MouseEvent) => void;

  useEffect(() => {
    const burgerMenuRefClickOutside: TBurgerMenuClickOutside = e => {
      const target = e.target as HTMLElement;
      if (
        !target.closest('[data-burgermenu]') &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target as HTMLElement)
      ) {
        setIsOpenBurgerMenu(false);
      }
    };
    document.addEventListener('click', burgerMenuRefClickOutside);
    return () =>
      document.removeEventListener('click', burgerMenuRefClickOutside);
  }, []);

  useEffect(() => {
    if (isOpenBurgerMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
      document.body.style.overflowX = 'hidden';
    }
  }, [isOpenBurgerMenu]);

  return (
    <div className={styles.burgerMenu}>
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          setIsOpenBurgerMenu(true);
        }}
      >
        {!isOpenBurgerMenu && <MenuIcon fontSize="large" data-burgermenu />}
      </div>
      {isOpenBurgerMenu && (
        <div className={styles.burgerMenu__body} ref={burgerMenuRef}>
          <CloseIcon
            fontSize="large"
            className="absolute top-[10px] right-[10px] hover:cursor-pointer"
            onClick={() => {
              setIsOpenBurgerMenu(false);
            }}
          />
          {isAuth && (
            <div>
              <div className="flex flex-col items-center gap-2 mb-4">
                <AccountCircleIcon fontSize="large" />
                <span>{currentUser!.username}</span>
              </div>
              <div>
                <ul className="flex justify-between gap-10">
                  <li className="duration-500 transition hover:text-title">
                    <Link to={PROFILE_ROUTE}>
                      <span>Профиль</span>
                    </Link>
                  </li>
                  <li
                    className="duration-500 transition hover:text-title cursor-pointer"
                    onClick={() => {
                      setIsOpenBurgerMenu(!isOpenBurgerMenu);
                      logout();
                    }}
                  >
                    <span className="mr-2">Выйти</span>
                    <LogoutIcon fontSize="medium" />
                  </li>
                </ul>
              </div>
              <hr className="my-4" />
            </div>
          )}
          <span className="block text-center ">Меню</span>
          <hr className="my-4" />
          <HeaderNav />
          {!isAuth && (
            <div>
              <hr className="my-4" />
              <div className="flex items-center justify-between font-[500] text-xl sm:flex-col gap-5">
                <Link to={LOGIN_ROUTE}>
                  <div className="duration-500 transition hover:text-title">
                    Войти
                  </div>
                </Link>
                <Link to={REGISTER_ROUTE}>
                  <div className="duration-500 transition hover:text-title">
                    Регистрация
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
