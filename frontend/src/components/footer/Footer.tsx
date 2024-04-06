import { useGSAP } from '@gsap/react';
import Container from 'components/container/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { links } from './data';
import FooterTitle from './footer-title/footer-title';

const Footer: FC = () => {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const block3 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        start: 'top bottom',
        end: 'center center',
        trigger: block1.current,
      },
    });
    tl.fromTo(
      block1.current,
      {
        opacity: 0,
        x: -500,
      },
      {
        opacity: 1,
        rotate: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 5,
      },
    ).fromTo(
      block2.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        rotate: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 5,
      },
    );
  });

  return (
    <footer className={styles.footer}>
      <Container width={1600}>
        <div className="grid grid-cols-3 gap-[100px] text-xl pt-[450px] pb-[70px] border-b border-b-[rgba(255,255,255,0.4)] sm:pt-[220px] sm:grid-cols-1 sm:text-[14px] md:text-[14px] md:grid-cols-1 lg:grid-cols-1 xl:text-[14px]">
          <div ref={block1} className="sm:hidden">
            <FooterTitle text="О нас" />
            <p className="leading-[30px]">
              При использовании Сервисов SKYBOX Вы можете передавать, хранить
              и/или делиться определенными данными, информацией, файлами и т.д.
              Во избежание сомнений, Вы сохраняете полное право собственности на
              свои Сервисные данные.
            </p>
          </div>
          <div ref={block2} className="sm:hidden">
            <FooterTitle text="Ссылки" />
            <ul className={styles.links}>
              {links.map(item => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div ref={block3}>
            <FooterTitle text="Контакты" />
            <ul className={styles.contacts}>
              <li>Наш офис:</li>
              <li>Digitalgoals LTD</li>
              <li>Lapathou, 6, Strovolos 2027,</li>
              <li>Лефкоса, Кипр</li>
              <li>
                <span>Телефон: </span>
                <a href="tel:+37062252936">+37 06 225 29 36</a>
              </li>
              <li>
                <span>Почта: </span>
                <a href="mailto:mail@example.com">mail@example.com</a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="py-[60px]">
          <p className="text-[24px] text-center font-bold sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px]">
            Copyright © 2016 - 2024 SkyBox - Онлайн хранилище файлов
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
