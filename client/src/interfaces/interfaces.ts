export interface IRoutes {
  name: string;
  path: string;
}
export interface IAccordion {
  id: number;
  title: string;
  info: string;
}
export interface IUser {
  username: string;
  email: string;
  password: string;
  gender: string;
  age: number | string;
}
export type TCurrentUser = Omit<IUser, 'password'>;

export interface ICurrentUser extends TCurrentUser {
  id: string;
  diskSpace: number;
  usedSpace: number;
  filedStoredTotal: number;
  createdAt: string;
}
export interface IProfileBlockData {
  id: number;
  text: string;
  info: string;
  url: string;
}
