import { IInput, TFieldNames } from 'interfaces/interfaces';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';
const Input: FC<IInput> = ({
  type,
  label,
  name,
  placeholder,
  register,
  errors,
  rules,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="flex items-center justify-between text-[20px]"
      >
        <span className="mb-5">{`${label}:`}</span>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name as TFieldNames, rules)}
          className="ml-9 mb-8 bg-whiteInput rounded-roundForm py-8 px-12 max-w-[630px] w-full"
          style={{
            border: `1px solid ${errors[name] ? 'red' : 'transparent'}`,
          }}
        />
      </label>
      {errors[name] && (
        <p className="text-end text-[red] mb-8">
          {(errors[name] as FieldError).message}
        </p>
      )}
    </div>
  );
};

export default Input;
