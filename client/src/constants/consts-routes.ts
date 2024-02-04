import { IRoutes } from 'interfaces/interfaces';
export const HOME_ROUTE: string = '/';
export const PRICING_ROUTE: string = '/pricing';
export const CONTACT_ROUTE: string = '/contact';
export const FAQ_ROUTE: string = '/faq';
export const LOGIN_ROUTE: string = '/login';
export const REGISTER_ROUTE: string = '/register';
export const NOT_FOUND_ROUTE: string = '*';
export const FILES_ROUTE: string = '/files';
export const PROFILE_ROUTE: string = '/profile';

export const authRoutes: IRoutes[] = [
  { name: 'My Files', path: FILES_ROUTE },
  { name: 'Faq', path: FAQ_ROUTE },
  { name: 'Contact', path: CONTACT_ROUTE },
];

export const guestRoutes: IRoutes[] = [
  {
    name: 'Home',
    path: HOME_ROUTE,
  },
  {
    name: 'Pricing',
    path: PRICING_ROUTE,
  },
  {
    name: 'Contact',
    path: CONTACT_ROUTE,
  },
];
