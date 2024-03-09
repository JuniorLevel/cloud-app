import { useGSAP } from '@gsap/react';
import Container from 'components/container/Container';
import gsap from 'gsap';
import { FC, useRef } from 'react';
import HeaderHomePreviewImage from './header-home-preview-image/HeaderHomePreviewImage';
import HeaderHomePreviewInfo from './header-home-preview-info/HeaderHomePreviewInfo';
const HeaderHomePreview: FC = () => {
  const blockInfoRef = useRef(null);
  const blockImageRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      blockInfoRef.current,
      {
        opacity: 0,
        x: -500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
    );
    tl.fromTo(
      blockImageRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
      },
    );
  });

  return (
    <section className="sm-mt-[60px] md:mt-[60px] lg:mt-[60px]">
      <Container width={1350}>
        <div className="flex md:flex-col lg:flex-col xl:flex-col">
          <div ref={blockInfoRef}>
            <HeaderHomePreviewInfo />
          </div>
          <div ref={blockImageRef}>
            <HeaderHomePreviewImage />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeaderHomePreview;
