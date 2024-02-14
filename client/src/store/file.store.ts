import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IFile {
  fileName: string;
  date: string;
  typeOfFile: string;
  sizeOfFile: number;
  pathToFile: string;
  currentUser: string;
  parentOfFile: null;
  childsOfFile: [];
  _id: string;
  __v: number;
}

interface IFileStore {
  isShowPopup: boolean;
  setIsShowPopup: (isShowPopup: boolean) => void;
  files: IFile[];
  currentDirectory: null | string;
  getFiles: (parentOfFile: string | null) => Promise<any>;
  createDirectory: (
    parentOfFile: null | string,
    fileName: string,
  ) => Promise<void>;
}

const useFileStore = create<IFileStore>()(
  devtools(set => ({
    currentDirectory: null,
    isShowPopup: false,
    files: [],
    setIsShowPopup(isShowPopup) {
      set({ isShowPopup: isShowPopup });
    },
    async getFiles(parentOfFile: null | string) {
      try {
        const res: AxiosResponse<any> = await axios.get(
          `http://localhost:5000/files${
            parentOfFile ? '?parent=' + parentOfFile : ''
          }`,
          {
            headers: {
              Authorization: `${localStorage.getItem('token')}`,
            },
          },
        );
        set({ files: [...res.data].reverse() });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError: AxiosError = err.response?.data;
          toast.error(axiosError.message, {
            position: 'bottom-right',
          });
        } else {
          throw new Error('Ошибка при попытке получить список файлов.');
        }
      }
    },
    async createDirectory(parentOfFile: string | null, fileName: string) {
      try {
        const res: AxiosResponse<any> = await axios.post(
          'http://localhost:5000/files',
          {
            fileName,
            typeOfFile: 'dir',
            parentOfFile,
          },
          {
            headers: {
              Authorization: `${localStorage.getItem('token')}`,
            },
          },
        );
        set(state => ({
          files: [res.data, ...state.files],
        }));
        toast.success('Папка успешно создана', {
          position: 'bottom-right',
        });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError: AxiosError = err.response?.data;
          toast.error(axiosError.message, {
            position: 'bottom-right',
          });
        } else {
          console.log(err);
          throw new Error('Ошибка при создании папки');
        }
      }
    },
  })),
);

export default useFileStore;
