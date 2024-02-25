import { FC } from 'react';

const SearchFiles: FC = () => {
  return (
    <input
      placeholder="Поиск файлов"
      className="flex-auto block bg-gray-200 text-gray-700 border border-secondary rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    />
  );
};

export default SearchFiles;
