export class Expense {
  id: number;
  name: string;
  description?: string;
  price: number;
  currency: string;
  paymentMethod?: PaymentMethod;
  // date: Date;
  idDate: number;
  paid: boolean;
}

export class Recurrent extends Expense {

}

export class Casual extends Expense {
  dateFrom: Date;
  dateTo: Date;
}

export class PaymentMethod {
  id: number;
  name: string;
  description: string;
}
