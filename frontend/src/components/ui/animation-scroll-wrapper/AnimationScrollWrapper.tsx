import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, ReactElement, useRef } from 'react';

interface IAnimationScrollWrapperProps {
  children: ReactElement | ReactElement[];
  args?: object;
}

const AnimationScrollWrapper: FC<IAnimationScrollWrapperProps> = ({
  children,
  args,
}) => {
  const el = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      gsap.fromTo(
        el.current,
        {
          opacity: 0,
          ...args,
        },
        {
          opacity: 1,
          rotate: 0,
          x: 0,
          y: 0,
          scale: 1,
          scrollTrigger: {
            scrub: true,
            start: 'top bottom',
            end: 'center center',
            trigger: el.current,
          },
          duration: 5,
        },
      );
    });
  });

  return <div ref={el}>{children}</div>;
};

export default AnimationScrollWrapper;
