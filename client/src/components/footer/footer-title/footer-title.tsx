import { FC } from 'react';

interface IFooterTitle {
  text: string;
}

const FooterTitle: FC<IFooterTitle> = ({ text }) => {
  return <h4 className="text-5xl font-bold mb-[70px]">{text}</h4>;
};

export default FooterTitle;
