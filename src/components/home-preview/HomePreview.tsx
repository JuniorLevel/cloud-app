import Container from 'components/container/Container';
import PreviewInfo from 'components/home-preview/preview-info/PreviewInfo';
import { FC } from 'react';
import PreviewImage from './preview-image/PreviewImage';

const HomePreview: FC = () => {
  return (
    <section>
      <Container width={1350}>
        <div className="flex">
          <PreviewInfo />
          <PreviewImage />
        </div>
      </Container>
    </section>
  );
};

export default HomePreview;
