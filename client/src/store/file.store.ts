import axios, { AxiosError, AxiosResponse } from 'axios';
import { IFile } from 'interfaces/interfaces';
import { toast } from 'react-toastify';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

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
  downloadFile: (files: IFile[]) => Promise<void>;
  deleteFile: (files: IFile[]) => Promise<void>;
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
          toast.error(axiosError?.message ?? 'Ошибка получения файлов', {
            position: 'bottom-right',
          });
        } else {
          throw new Error('Ошибка при попытке получить список файлов');
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
          toast.error(axiosError?.message ?? 'Ошибка при создании файла', {
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
        await toast
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
          toast.error(axiosError?.message ?? 'Ошибка при загрузке файла', {
            position: 'bottom-right',
          });
        } else {
          console.log(err);
          throw new Error('Ошибка при загрузке файла');
        }
      }
    },
    async downloadFile(files: IFile[]) {
      for (const file of files) {
        try {
          const res = await axios.get(
            `http://localhost:5000/files/download?id=${file._id}`,
            {
              responseType: 'blob',
              headers: {
                Authorization: `${localStorage.getItem('token')}`,
              },
            },
          );
          if (res.status === 200) {
            const downloadUrl = window.URL.createObjectURL(res.data);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = file.fileName;
            link.click();
            link.remove();
          }
        } catch (err) {
          if (axios.isAxiosError(err)) {
            console.log(err);
            const axiosError: AxiosError = err.response?.data;
            toast.error(axiosError?.message ?? 'Ошибка при скачивании файла', {
              position: 'bottom-right',
            });
          } else {
            console.log(err);
            throw new Error('Ошибка при скачивании файла');
          }
        }
      }
    },
    async deleteFile(files: IFile[]) {
      for (let file of files) {
        try {
          const res = await axios.delete(
            `http://localhost:5000/files/?id=${file._id}`,
            {
              headers: {
                Authorization: `${localStorage.getItem('token')}`,
              },
            },
          );
          set(state => ({
            files: state.files.filter(file => file._id !== res.data._id),
          }));
        } catch (err) {
          if (axios.isAxiosError(err)) {
            console.log(err);
            const axiosError: AxiosError = err.response?.data;
            toast.error(axiosError?.message ?? 'Ошибка при удалении файла', {
              position: 'bottom-right',
            });
          } else {
            console.log(err);
            throw new Error('Ошибка при удалении файла');
          }
        }
      }
    },
  })),
);
export default useFileStore;
