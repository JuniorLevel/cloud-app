interface ICard {
  id: number;
  price: number;
  days: number;
  description: string[];
}

export const cardMainInfo: ICard = {
  id: 1,
  price: 629,
  days: 30,
  description: [
    'Хранилище 250 Гб',
    'Резервная копия',
    'Шифр. данных',
    'Поддержка 24/7',
  ],
};
export const cardLeftInfo: ICard = {
  id: 2,
  price: 549,
  days: 90,
  description: [
    'Хранилище 50 Гб',
    'Резервная копия',
    'Шифр. данных',
    'Поддержка 24/7',
  ],
};
export const cardRightInfo: ICard = {
  id: 3,
  price: 4599,
  days: 365,
  description: [
    'Хранилище 500 Гб',
    'Резервная копия',
    'Шифр. данных',
    'Поддержка 24/7',
  ],
};
