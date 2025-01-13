import { useGSAP } from '@gsap/react';
import Container from 'components/container/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, useRef } from 'react';
import styles from './HomeStatistics.module.scss';
const HomeStatistics: FC = () => {
  const el1 = useRef(null);
  const el2 = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          start: 'top bottom',
          end: 'bottom center',
          trigger: el1.current,
        },
      });

      tl.fromTo(
        el1.current,
        {
          opacity: 0,
          x: -1500,
          rotate: 360,
        },
        {
          opacity: 1,
          rotate: 0,
          x: 0,
          duration: 1,
        },
      ).fromTo(
        el2.current,
        {
          opacity: 0,
          x: 1500,
          rotate: 360,
        },
        {
          opacity: 1,
          rotate: 0,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
        },
      );
    });
  });

  return (
    <section className={styles.statistics}>
      <Container width={1200}>
        <div className="flex justify-between items-center font-['Comfortaa'] font-bold sm:flex-col sm:gap-10 md:flex-col md:gap-10">
          <div
            className="flex gap-5 items-center max-w-[450px] w-full md:max-w-full lg:max-w-[400px]"
            ref={el1}
          >
            <div>
              <img src="/images/home/icons/Icon-upload.svg" alt="icon-upload" />
            </div>
            <div>
              <p className="text-[42px] text-title mb-5 sm:text-[15px] md:text-[18px] lg:text-[20px]">
                999529 000 000
              </p>
              <p className="text-[24px] text-secondary sm:text-[15px] md:text-[18px] lg:text-[20px]">
                Загружено файлов на сервис
              </p>
            </div>
          </div>
          <div>
            <div
              className="flex gap-5 items-center max-w-[450px] w-full md:max-w-full lg:max-w-[400px]"
              ref={el2}
            >
              <div>
                <img
                  src="/images/home/icons/Icon-add-user.svg"
                  alt="icon-add-user"
                />
              </div>
              <div>
                <p className="text-[42px] text-title mb-5 sm:text-[15px] md:text-[18px] lg:text-[20px]">
                  235 764 784
                </p>
                <p className="text-[24px] text-secondary sm:text-[15px] md:text-[18px] lg:text-[20px]">
                  Зарегистрировано пользователей
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeStatistics;
