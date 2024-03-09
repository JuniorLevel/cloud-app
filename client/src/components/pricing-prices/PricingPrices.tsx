import Container from 'components/container/Container';
import PricesCardsSlider from 'components/home-prices/prices-cards-slider/PricesCardsSlider';
import PricesCards from 'components/home-prices/prices-cards/PricesCards';
import AnimationWrapper from 'components/ui/animation-wrapper/AnimationWrapper';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';
import styles from './PricingPrices.module.scss';
const PricingPrices: FC = () => {
  return (
    <section className={styles.pricing}>
      <Container width={1600}>
        <AnimationWrapper args={{ x: -50, rotate: 5 }}>
          <Title text="Тарифный план" />
          <ContentText />
        </AnimationWrapper>
        <PricesCards />
        <AnimationWrapper args={{ scale: 0.6 }}>
          <PricesCardsSlider />
        </AnimationWrapper>
      </Container>
    </section>
  );
};

export default PricingPrices;
