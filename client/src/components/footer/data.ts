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
    name: 'Тарифы',
    link: PRICING_ROUTE,
  },
  {
    id: 2,
    name: 'Контакты',
    link: CONTACT_ROUTE,
  },
  {
    id: 3,
    name: 'Вопросы',
    link: FAQ_ROUTE,
  },
  {
    id: 4,
    name: 'Политика возврата',
    link: '*',
  },
  {
    id: 5,
    name: 'Политика конфиденциальности',
    link: '*',
  },
  {
    id: 6,
    name: 'Услуги',
    link: '*',
  },
];
