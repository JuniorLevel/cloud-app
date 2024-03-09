import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { PROFILE_ROUTE } from 'constants/consts-routes';
import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useUserStore from 'store/user.store';
import styles from './AuthPanel.module.scss';

const AuthPanel: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const currentUser = useUserStore(state => state.currentUser);
  const logout = useUserStore(state => state.logout);

  const menuRef = useRef<HTMLDivElement>(null);

  type TMenuClickOutside = (e: MouseEvent) => void;

  useEffect(() => {
    const menuClickOutside: TMenuClickOutside = e => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as HTMLElement)
      ) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener('click', menuClickOutside);
    return () => document.removeEventListener('click', menuClickOutside);
  }, []);

  return (
    <div className={styles.authPanel}>
      <div
        ref={menuRef}
        className={styles.authPanel__top}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <AccountCircleIcon fontSize="large" />
        <span>{currentUser!.username}</span>
      </div>
      {isOpenMenu && (
        <div className={styles.authPanel__menu}>
          <ul className={styles.authPanel__menuList}>
            <li>
              <Link to={PROFILE_ROUTE}>
                <span>Профиль</span>
              </Link>
              <AccountCircleIcon fontSize="medium" />
            </li>
            <li onClick={() => logout()}>
              <span>Выйти</span>
              <LogoutIcon fontSize="medium" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthPanel;
