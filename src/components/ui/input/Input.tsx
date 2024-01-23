import { FC } from 'react';

interface IInput {
  name: string;
  text: string;
  placeholder: string;
}

const Input: FC<IInput> = ({ name, text, placeholder }) => {
  return (
    <label htmlFor={name} className="flex items-center">
      <span>{text}</span>
      <input
        name={name}
        className="ml-9 bg-whiteInput rounded-roundForm py-8 px-12 w-full"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
