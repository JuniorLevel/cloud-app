import { FC, ReactElement } from 'react';

interface IContainer {
  children: ReactElement | ReactElement[];
  width: number;
}

const Container: FC<IContainer> = ({ children, width }) => {
  return (
    <div
      className="mx-auto w-full"
      style={{
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
