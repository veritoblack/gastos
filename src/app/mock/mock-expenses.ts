import {Expense} from '../models/expense.model';

export const EXPENSES: Expense[] = [
  {
    id: 1,
    name: 'VISA',
    description: 'VISA',
    price: 8500,
    currency: '$',
    idDate: 0,
    paid: false
  },
  {
    id: 2,
    name: 'MASTERCARD',
    description: 'MASTERCARD',
    price: 1500,
    currency: '$',
    idDate: 0,
    paid: false
  },
  {
    id: 3,
    name: 'Running',
    price: 700,
    currency: '$',
    idDate: 0,
    paid: false
  },
  {
    id: 4,
    name: 'Expensas',
    description: 'Expensas',
    price: 4300,
    currency: '$',
    idDate: 0,
    paid: false
  },
  {
    id: 5,
    name: 'Alquiler',
    description: 'Alquiler',
    price: 11000,
    currency: '$',
    idDate: 1,
    paid: false
  },
  {
    id: 6,
    name: 'Alquiler',
    description: 'Alquiler',
    price: 9700,
    currency: '$',
    idDate: 0,
    paid: false
  },
];
