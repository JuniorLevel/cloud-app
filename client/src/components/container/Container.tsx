import { FC, ReactNode } from 'react';

interface IContainer {
  children: ReactNode | undefined;
  width: number;
}

const Container: FC<IContainer> = ({ children, width }) => {
  return (
    <div
      className="mx-auto w-full px-2"
      style={{
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
