export interface IDiscount {
  percent: number;
  quantityApplied: number;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discounts: IDiscount[];
}

export class Fruit implements IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discounts: IDiscount[];

  constructor(product: IProduct) {
    this.id = product?.id || '';
    this.name = product?.name || '';
    this.price = product?.price || 0;
    this.quantity = product?.quantity || 0;
    this.discounts = product?.discounts || [];
  }
}

interface ICart {
  cartItems: Fruit[];
  total: number;
}

export class Cart implements ICart {
  cartItems: Fruit[];
  total: number;

  constructor() {
    this.cartItems = [];
    this.total = 0;
  }

  getItem(fruit: Fruit) {
    return this.cartItems.find((item) => item.id === fruit.id);
  }

  addItem(fruit: Fruit, quantity: number) {
    const item = this.getItem(fruit);
    if (item) {
      item.quantity += quantity;
    } else {
      const newItem = { ...fruit, quantity };
      this.cartItems.push(newItem);
    }
    this.calculate();
  }

  removeItem(id: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.calculate();
  }

  calculate() {
    const getDiscount = (fruit: Fruit): number => {
      const discountApplied: number = fruit.discounts.reduce(
        (acc, discount) => {
          return Math.max(
            acc,
            fruit.quantity >= discount.quantityApplied
              ? discount.percent
              : 0
          );
        },
        0
      );
      return discountApplied;
    };
    const total = this.cartItems.reduce(
      (total, fruit) =>
        total +
        (fruit.quantity * fruit.price * (100 - getDiscount(fruit))) / 100,
      0
    );
    this.total = total;
    return total;
  }
  getCartItems() {
    return this.cartItems;
  }
  getTotal(): number {
    return this.total;
  }
  clearCart() {
    this.cartItems = [];
    this.total = 0;
  }
}
