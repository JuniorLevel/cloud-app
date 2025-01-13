import Container from 'components/container/Container';
import AnimationWrapper from 'components/ui/animation-wrapper/AnimationWrapper';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';

const ContactMap: FC = () => {
  return (
    <Container width={1600}>
      <AnimationWrapper args={{ x: -50, rotate: 5 }}>
        <Title text="Контакты" />
        <ContentText />
      </AnimationWrapper>
      <AnimationWrapper args={{ scale: 0.1 }}>
        <div className="max-h-[800px] mb-[200px] sm:hidden block">
          <img src="/images/contact/map.png" alt="map" />
        </div>
        <div className="max-h-[800px] max-w-[390px] w-full mx-auto sm:mb-[100px] sm:block hidden">
          <img src="/images/contact/map-mobile.png" alt="map-mobile" />
        </div>
      </AnimationWrapper>
    </Container>
  );
};

export default ContactMap;
