interface ICard {
  id: number;
  price: number;
  days: number;
  description: string[];
}

export const cardMainInfo: ICard = {
  id: 1,
  price: 20.99,
  days: 30,
  description: [
    '1 Tb Free space',
    '4 Tb Monthly space',
    '100 Mbit Speed',
    '3000 sessions',
  ],
};
export const cardLeftInfo: ICard = {
  id: 2,
  price: 46.99,
  days: 90,
  description: [
    '1 Tb Free space',
    '4 Tb Monthly space',
    '100 Mbit Speed',
    '3000 sessions',
  ],
};
export const cardRightInfo: ICard = {
  id: 3,
  price: 127.99,
  days: 365,
  description: [
    '1 Tb Free space',
    '4 Tb Monthly space',
    '100 Mbit Speed',
    '3000 sessions',
  ],
};
