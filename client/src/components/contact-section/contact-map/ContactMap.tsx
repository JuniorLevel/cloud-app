import Container from 'components/container/Container';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';

const ContactMap: FC = () => {
  return (
    <Container width={1600}>
      <Title text="Contact"></Title>
      <ContentText />
      <div className="max-h-[800px] mb-[200px]">
        <img src="/images/contact/map.png" alt="map" />
      </div>
    </Container>
  );
};

export default ContactMap;
