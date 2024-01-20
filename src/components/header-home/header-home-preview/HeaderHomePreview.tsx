import Container from 'components/container/Container';
import { FC } from 'react';
import HeaderHomePreviewImage from './header-home-preview-image/HeaderHomePreviewImage';
import HeaderHomePreviewInfo from './header-home-preview-info/HeaderHomePreviewInfo';
const HeaderHomePreview: FC = () => {
  return (
    <section>
      <Container width={1350}>
        <div className="flex">
          <HeaderHomePreviewInfo />
          <HeaderHomePreviewImage />
        </div>
      </Container>
    </section>
  );
};

export default HeaderHomePreview;
