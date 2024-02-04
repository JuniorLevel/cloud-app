import axios, { AxiosResponse } from 'axios';
import { ICurrentUser } from 'interfaces/interfaces';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IUserStore {
  currentUser: ICurrentUser | null;
  isAuth: boolean;
  logout: () => void;
  auth: () => Promise<void>;
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
    currentUser: null,
    isAuth: false,
    logout: () => {
      set({ isAuth: false });
      set({ currentUser: null });
      localStorage.removeItem('token');
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
        set({ currentUser: res.data.user });
        console.log(res.data.user, 'user');
      } catch (err: any) {
        console.log(err.response.data.message);
      }
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
        set({ isAuth: true });
        set({ currentUser: res.data.user });
        alert(res.data.message);
      } catch (err: any) {
        alert(err.message);
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
        localStorage.setItem('token', res.data.token);
      } catch (err: any) {
        localStorage.removeItem('token');
        console.log(err.message);
      }
    },
  })),
);

export default useUserStore;
