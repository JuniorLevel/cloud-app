import Container from 'components/container/Container';
import HeaderPanel from 'components/header-panel/HeaderPanel';
import Logo from 'components/logo/Logo';
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PRICING_ROUTE,
} from 'constants/consts-routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header>
      <Container width={1200}>
        <div className={styles.header}>
          <Logo />
          <Link to={HOME_ROUTE}></Link>
          <ul className="flex flex-auto gap-[70px]">
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
          <HeaderPanel />
        </div>
      </Container>
    </header>
  );
};

export default Header;
