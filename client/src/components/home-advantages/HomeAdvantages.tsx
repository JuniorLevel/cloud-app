import Container from 'components/container/Container';
import AnimationScrollWrapper from 'components/ui/animation-scroll-wrapper/AnimationScrollWrapper';
import { FC } from 'react';
import AdvantagesImage from './advantages-image/AdvantagesImage';
import AdvantagesInfo from './advantages-info/AdvantagesInfo';
const HomeAdvantages: FC = () => {
  return (
    <section className="sm:mt-[80px] md:mt-[120px] mt-0">
      <Container width={1650}>
        <div className="flex items-center md:mt-[70px] lg:mt-[100px]">
          <AnimationScrollWrapper args={{ x: -1000 }}>
            <AdvantagesImage />
          </AnimationScrollWrapper>
          <AnimationScrollWrapper args={{ scale: 0.5 }}>
            <AdvantagesInfo />
          </AnimationScrollWrapper>
        </div>
      </Container>
    </section>
  );
};

export default HomeAdvantages;
