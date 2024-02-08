import { FC } from 'react';

interface IButtonSubmit {
  text: string;
  disabled?: boolean;
  width?: number;
}

const ButtonSubmit: FC<IButtonSubmit> = ({
  text,
  disabled = false,
  width = 300,
}) => {
  return (
    <button
      type="submit"
      className="text-white text-[20px] font-bold px-14 py-6 rounded-round bg-gradient hover:bg-hoverGradient w-full"
      style={{ maxWidth: `${width}px`, opacity: `${disabled ? 0.4 : 1}` }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
