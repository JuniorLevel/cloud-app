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
  setCurrentDirectory: (currentDirectoryId: string | null) => void;
  stackOfDirectories: string[];
  pushToStack: (currentDirectoryId: string) => void;
  uploadFile: (fileName: object, directoryId: string | null) => Promise<void>;
}

const useFileStore = create<IFileStore>()(
  devtools(set => ({
    stackOfDirectories: [],
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
            parentOfFile ? '?parentOfFile=' + parentOfFile : ''
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
    async createDirectory(parentOfFile: null | string, fileName: string) {
      try {
        await toast
          .promise(
            axios.post(
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
            ),
            {
              pending: 'Создание папки...',
              success: 'Папка успешно создана',
              error: 'Ошибка при создании папки',
            },
          )
          .then(res => {
            set(state => ({
              files: [res.data, ...state.files],
            }));
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
    setCurrentDirectory(currentDirectoryId: string | null) {
      set({ currentDirectory: currentDirectoryId });
    },
    pushToStack(currentDirectoryId: string) {
      set(state => ({
        stackOfDirectories: [...state.stackOfDirectories, currentDirectoryId],
      }));
    },
    async uploadFile(fileName: object, directoryId: string | null) {
      try {
        const formData = new FormData();
        formData.append('file', Object(fileName));
        if (directoryId) formData.append('parentOfFile', String(directoryId));
        toast
          .promise(
            axios.post('http://localhost:5000/files/upload', formData, {
              headers: {
                Authorization: `${localStorage.getItem('token')}`,
              },
            }),
            {
              pending: 'Загрузка файла',
              success: 'Файл загружен',
              error: 'Ошибка при загрузке файла',
            },
          )
          .then(res => {
            set(state => ({
              files: [res.data, ...state.files],
            }));
          });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError: AxiosError = err.response?.data;
          toast.error(axiosError.message, {
            position: 'bottom-right',
          });
        } else {
          console.log(err);
          throw new Error('Ошибка при загрузке файла');
        }
      }
    },
  })),
);
export default useFileStore;
