import Container from 'components/container/Container';
import { FC } from 'react';
import PricesCards from './prices-cards/PricesCards';

const HomePrices: FC = () => {
  return (
    <section>
      <Container width={1600}>
        <h2 className="text-title text-center text-7xl font-light font-['Roboto'] uppercase tracking-[20.52px] mb-5">
          Become a PREMIUM MEMBER
        </h2>
        <p className="text-text text-center text-3xl font-normal font-['Montserrat'] mb-20">
          <span className="inline-block mb-3">Premium Business</span>
          <br />1 TB free space and 4 TB monthly transfer
        </p>
        <PricesCards />
      </Container>
    </section>
  );
};

export default HomePrices;
