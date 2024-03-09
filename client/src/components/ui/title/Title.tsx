import { FC } from 'react';

interface ITitle {
  text: string;
}

const Title: FC<ITitle> = ({ text }) => {
  return (
    <h1 className="text-title text-center text-7xl font-black font-['Roboto'] uppercase leading-[70px] tracking-[29.16px] mb-4 sm:tracking-[2px] sm:text-4xl md:tracking-[15px] md:text-4xl lg:tracking-[15px] lg:text-4xl xl:text-5xl">
      {text}
    </h1>
  );
};

export default Title;
