import { FC, MouseEvent } from 'react';

type ClickEventHandler = (event: MouseEvent<HTMLButtonElement>) => void;

interface IButtonSubmit {
  text: string;
  width?: number;
  callback: ClickEventHandler;
}

const ButtonSubmit: FC<IButtonSubmit> = ({ text, width = 300, callback }) => {
  return (
    <button
      className="text-white text-[20px] font-bold px-14 py-6 rounded-round bg-gradient hover:bg-hoverGradient w-full"
      style={{ maxWidth: `${width}px` }}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
