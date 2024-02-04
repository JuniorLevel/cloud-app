import Container from 'components/container/Container';
import PricesCards from 'components/home-prices/prices-cards/PricesCards';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';
import styles from './PricingPrices.module.scss';
const PricingPrices: FC = () => {
  return (
    <section className={styles.pricing}>
      <Container width={1600}>
        <Title text="tariff plans" />
        <ContentText />
        <PricesCards />
      </Container>
    </section>
  );
};

export default PricingPrices;
