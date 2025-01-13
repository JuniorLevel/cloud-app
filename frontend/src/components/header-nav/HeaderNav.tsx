import { authRoutes, guestRoutes } from 'constants/consts-routes';
import { IRoutes } from 'interfaces/interfaces';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userStore from 'store/user.store';
import styles from './HeaderNav.module.scss';

const HeaderNav: FC = () => {
  const [routes, setRoutes] = useState<IRoutes[]>(guestRoutes);
  const isAuth = userStore(state => state.isAuth);

  useEffect(() => {
    if (isAuth) setRoutes(authRoutes);
    else setRoutes(guestRoutes);
  }, [isAuth]);

  return (
    <nav className={styles.headerNav}>
      <ul>
        {routes.map(item => (
          <Link key={item.name} to={item.path}>
            <li key={item.name}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
