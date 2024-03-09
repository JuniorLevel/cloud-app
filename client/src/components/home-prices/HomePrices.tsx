import Container from 'components/container/Container';
import AnimationScrollWrapper from 'components/ui/animation-scroll-wrapper/AnimationScrollWrapper';
import { FC } from 'react';
import styles from './HomePrices.module.scss';
import PricesCardsSlider from './prices-cards-slider/PricesCardsSlider';
import PricesCards from './prices-cards/PricesCards';
const HomePrices: FC = () => {
  return (
    <section className={styles.prices}>
      <Container width={1600}>
        <AnimationScrollWrapper args={{ x: 1000 }}>
          <h2 className="text-title text-center text-6xl font-light font-['Roboto'] uppercase tracking-[10px] mb-5 sm:tracking-normal sm:text-[30px] md:text-[30px] md:tracking-normal lg:text-[35px] lg:tracking-normal xl:tracking-normal xl:text-[50px]">
            Станьте премиум пользователем
          </h2>
          <p className="text-text text-center text-3xl font-normal font-['Montserrat'] mb-20 sm:text-[18px] md:text-[18px] lg:text-[20px]">
            <span className="inline-block mb-3">Премиум-бизнес</span>
            <br />
            <span>Онлайн Хранилище на 500 Гб и поддержка 24/7</span>
          </p>
        </AnimationScrollWrapper>
        <AnimationScrollWrapper args={{ scale: 0.5 }}>
          <PricesCards />
          <PricesCardsSlider />
        </AnimationScrollWrapper>
      </Container>
    </section>
  );
};

export default HomePrices;
