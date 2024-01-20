import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PRICING_ROUTE,
} from 'constants/consts-routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
const HeaderNav: FC = () => {
  return (
    <nav className={styles.headerNav}>
      <ul>
        <Link to={HOME_ROUTE}>
          <li>Home</li>
        </Link>
        <Link to={PRICING_ROUTE}>
          <li>Pricing</li>
        </Link>
        <Link to={CONTACT_ROUTE}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default HeaderNav;
