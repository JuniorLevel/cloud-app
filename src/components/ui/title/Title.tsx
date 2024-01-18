import { FC } from 'react';

interface ITitle {
  text: string;
}

const Title: FC<ITitle> = ({ text }) => {
  return (
    <h1 className="text-title text-7xl font-black font-['Roboto'] uppercase leading-[70px] mb-4">
      {text}
    </h1>
  );
};

export default Title;
