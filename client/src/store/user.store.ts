import axios, { AxiosError, AxiosResponse } from 'axios';
import { ICurrentUser } from 'interfaces/interfaces';
import { toast } from 'react-toastify';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IUserStore {
  currentUser: ICurrentUser | undefined;
  isAuth: boolean;
  isReg: boolean;
  isLoading: boolean;
  logout: () => void;
  auth: () => Promise<void>;
  getUserInfo: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  registration: (
    username: string,
    age: number | string,
    gender: string,
    email: string,
    password: string,
  ) => Promise<void>;
}

interface IRegistrationResponse {
  message: string;
  user: ICurrentUser;
}

interface ILogin extends IRegistrationResponse {
  token: string;
}

interface IAuth extends ILogin {}

const useUserStore = create<IUserStore>()(
  devtools(set => ({
    currentUser: undefined,
    isAuth: false,
    isReg: false,
    isLoading: true,
    logout: () => {
      set({ isAuth: false });
      set({ currentUser: undefined });
      localStorage.removeItem('token');
    },
    async registration(
      username: string,
      age: string | number,
      gender: string,
      email: string,
      password: string,
    ) {
      try {
        const res: AxiosResponse<IRegistrationResponse> = await axios.post(
          'http://localhost:5000/auth/reg',
          {
            username,
            age,
            gender,
            email,
            password,
          },
        );
        set({ isReg: true });
        toast.success(res.data.message, {
          position: 'bottom-right',
        });
        toast.info(`Войдите в аккаунт!`, {
          position: 'bottom-right',
        });
      } catch (err) {
        set({ isLoading: false });
        if (axios.isAxiosError(err)) {
          const axiosError: AxiosError = err.response?.data;
          toast.error(
            axiosError?.message ?? 'Ошибка регистрации. Повторите попытку...',
            {
              position: 'bottom-right',
            },
          );
        } else {
          throw new Error('Ошибка регистрации. Повторите попытку...');
        }
      }
    },
    async login(email, password) {
      try {
        const res: AxiosResponse<ILogin> = await axios.post(
          'http://localhost:5000/auth/login',
          {
            email,
            password,
          },
        );
        localStorage.setItem('token', res.data.token);
        set({ isAuth: true });
        set({ isReg: false });
        set({ currentUser: res.data.user });
        toast.success('Вы успешно авторизованы!', {
          position: 'bottom-right',
        });
        console.log(res.data.user, 'user');
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError: AxiosError = err.response?.data;
          toast.error(
            axiosError?.message ??
              'Ошибка при входе в аккаунт. Повторите попытку...',
            {
              position: 'bottom-right',
            },
          );
        } else {
          throw new Error('Ошибка при входе в аккаунт. Повторите попытку...');
        }
      }
    },
    async auth() {
      try {
        const res: AxiosResponse<IAuth> = await axios.get(
          'http://localhost:5000/auth/auth',
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          },
        );
        set({ isAuth: true });
        set({ currentUser: res.data.user });
        set({ isLoading: false });
        localStorage.setItem('token', res.data.token);
      } catch (err) {
        set({ isLoading: false });
        if (axios.isAxiosError(err)) {
          const axiosError: AxiosError = err.response?.data;
          toast.error(axiosError?.message ?? 'Ошибка авторизации', {
            position: 'bottom-right',
          });
        } else {
          throw new Error('Ошибка авторизации');
        }
      }
    },
    async getUserInfo() {
      try {
        const res: AxiosResponse<IAuth> = await axios.get(
          'http://localhost:5000/auth/user-info',
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          },
        );
        set({ currentUser: res.data.user });
      } catch (err) {
        console.log(err);
      }
    },
  })),
);

export default useUserStore;
