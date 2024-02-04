import {
  CONTACT_ROUTE,
  FAQ_ROUTE,
  PRICING_ROUTE,
} from 'constants/consts-routes';

interface ILinks {
  id: number;
  name: string;
  link: string;
}

export const links: ILinks[] = [
  {
    id: 1,
    name: 'Pricing',
    link: PRICING_ROUTE,
  },
  {
    id: 2,
    name: 'Contact',
    link: CONTACT_ROUTE,
  },
  {
    id: 3,
    name: 'FAQ',
    link: FAQ_ROUTE,
  },
  {
    id: 4,
    name: 'Refund Policy',
    link: '*',
  },
  {
    id: 5,
    name: 'Privacy Policy',
    link: '*',
  },
  {
    id: 6,
    name: 'Terms of Service',
    link: '*',
  },
];
