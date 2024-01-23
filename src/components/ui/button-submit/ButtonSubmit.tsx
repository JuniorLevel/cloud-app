import { FC } from 'react';

interface IButtonSubmit {
  text: string;
  width?: number;
}

const ButtonSubmit: FC<IButtonSubmit> = ({ text, width = 300 }) => {
  return (
    <button
      className="text-white text-[20px] font-bold px-14 py-6 rounded-round bg-gradient hover:bg-hoverGradient w-full"
      style={{ maxWidth: `${width}px` }}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
