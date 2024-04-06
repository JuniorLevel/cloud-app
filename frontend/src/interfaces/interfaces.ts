import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IRoutes {
  name: string;
  path: string;
}
export interface IAccordion {
  id: number;
  title: string;
  info: string;
}

export interface IFile {
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
  fileStoredTotal: number;
  createdAt: string;
}
export interface IContactFormData {
  email: string;
  username: string;
  message: string;
}
export interface IRegisterFormData {
  username: string;
  age: string;
  gender: string;
  email: string;
  password: string;
}
export interface ILoginFormData {
  email: string;
  password: string;
}
export interface IInput {
  type?: string;
  label: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  rules: object;
  errors: FieldErrors;
}
export type TFieldNames =
  | 'email'
  | 'username'
  | 'message'
  | 'age'
  | 'gender'
  | 'password';
export interface IProfileBlockData {
  id: number;
  text: string;
  info: number | string;
  url: string;
}
