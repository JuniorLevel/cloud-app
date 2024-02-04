import { ChangeEvent, FC } from 'react';

type TChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => void;

interface IInput {
  name: string;
  text: string;
  placeholder?: string;
  type: string;
  value: string | number;
  callback: TChangeEventHandler;
}

const Input: FC<IInput> = ({
  name,
  text,
  placeholder,
  type,
  value,
  callback,
}) => {
  return (
    <label
      htmlFor={name}
      className="flex items-center justify-between text-[20px]"
    >
      <span>{text}</span>
      <input
        name={name}
        className="ml-9 bg-whiteInput rounded-roundForm py-8 px-12 max-w-[630px] w-full"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={callback}
      />
    </label>
  );
};

export default Input;
