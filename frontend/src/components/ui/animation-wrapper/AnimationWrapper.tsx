import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FC, ReactElement, useRef } from 'react';

interface IAnimationWrapperProps {
  children: ReactElement | ReactElement[];
  args?: object;
}

const AnimationWrapper: FC<IAnimationWrapperProps> = ({ children, args }) => {
  const el = useRef(null);
  useGSAP(() => {
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
        duration: 1.5,
      },
    );
  });

  return <div ref={el}>{children}</div>;
};

export default AnimationWrapper;
