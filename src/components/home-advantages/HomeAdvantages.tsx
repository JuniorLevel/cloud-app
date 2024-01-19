import Container from 'components/container/Container';
import { FC } from 'react';
import AdvantagesImage from './advantages-image/AdvantagesImage';
import AdvantagesInfo from './advantages-info/AdvantagesInfo';

const HomeAdvantages: FC = () => {
  return (
    <section>
      <Container width={1650}>
        <div className="flex items-center">
          <AdvantagesImage />
          <AdvantagesInfo />
        </div>
      </Container>
    </section>
  );
};

export default HomeAdvantages;
