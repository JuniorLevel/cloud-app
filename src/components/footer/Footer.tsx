import Container from 'components/container/Container';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { links } from './data';
import FooterTitle from './footer-title/footer-title';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container width={1600}>
        <div className="grid grid-cols-3 gap-[100px] text-xl pt-[450px] pb-[70px] border-b border-b-[rgba(255,255,255,0.4)]">
          <div>
            <FooterTitle text="About us" />
            <p className="leading-[30px]">
              When using the SKYBOX Services You may transmit, store and or
              share certain data, information, files, etc. (altogether “Service
              Data”). For the avoidance of doubt, You retain full ownership of
              Your Service Data. SKYBOX does that You or any other uss while
              using the Service. SKYBOX agrees that these Terms do not grant.
            </p>
          </div>
          <div>
            <FooterTitle text="Featured links" />
            <ul className={styles.links}>
              {links.map(item => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle text="Contact us" />
            <ul className={styles.contacts}>
              <li>Our office:</li>
              <li>Digitalgoals LTD</li>
              <li>Lapathou, 6, Strovolos 2027,</li>
              <li>Lefkosia, Cyprus</li>
              <li>
                <span>Phone: </span>
                <a href="tel:+37062252936">+37 06 225 29 36</a>
              </li>
              <li>
                <span>Email: </span>
                <a href="mailto:mail@example.com">mail@example.com</a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="py-[60px]">
          <p className="text-[24px] text-center font-bold">
            Copyright © 2016 - 2021 - SkyBox - Online File Storage
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
