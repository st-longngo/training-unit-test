import { Cart, Fruit } from './cart';

const fruitStorage = {
  apple: {
    id: 'FR0001',
    name: 'Apple',
    price: 5000,
    quantity: 1,
    discounts: [
      {
        percent: 5,
        quantityApplied: 1,
      },
      {
        percent: 10,
        quantityApplied: 2,
      }
    ]
  },
  lemon: {
    id: 'FR0002',
    name: 'Lemon',
    price: 2000,
    quantity: 1,
    discounts: [
      {
        percent: 5,
        quantityApplied: 2,
      },
      {
        percent: 10,
        quantityApplied: 4,
      }
    ],
  },
};

describe('Test Cart Class', () => {

  describe('Cart is empty', () => {
    const cart = new Cart();

    it('Cart details should be empty', () => {
      expect(cart.getCartItems().length).toBe(0);
    });

    it('total price should be 0', () => {
      expect(cart.getTotal()).toBe(0);
    });
  });

  describe('Cart has one product', () => {
    const cart = new Cart();

    test('Add an apple', () => {
      cart.addItem(new Fruit(fruitStorage.apple), 1);
      expect(cart.getCartItems().length).toBe(1);
      expect(cart.getItem(fruitStorage.apple)).not.toBeUndefined();
      expect(cart.getItem(fruitStorage.apple).quantity).toBe(1);
    });

    test('Total price is 4750', () => {
      expect(cart.getTotal()).toBe(4750);
    });

    test('Add more 2 apples', () => {
      cart.addItem(new Fruit(fruitStorage.apple), 2);
      expect(cart.getCartItems().length).toBe(1);
      expect(cart.getItem(fruitStorage.apple)).not.toBeUndefined();
      expect(cart.getItem(fruitStorage.apple).quantity).toBe(3);
    });

    test('Total price is 13500', () => {
      expect(cart.getTotal()).toBe(13500);
    });

    test('Remove apple in Cart', () => {
      cart.removeItem(fruitStorage.apple.id);
      expect(cart.getCartItems().length).toBe(0);
      expect(cart.getItem(fruitStorage.apple)).toBeUndefined();
    });

    test('Total price is 0', () => {
      expect(cart.getTotal()).toBe(0);
    });
  });

  describe('Cart has more one product', () => {
    const cart = new Cart();

    test('Add 4 apples', () => {
      cart.addItem(new Fruit(fruitStorage.apple), 4);
      expect(cart.getCartItems().length).toBe(1);
      expect(cart.getItem(fruitStorage.apple)).not.toBeUndefined();
      expect(cart.getItem(fruitStorage.apple).quantity).toBe(4);
    });

    test('Total price is 18000', () => {
      expect(cart.getTotal()).toBe(18000);
    });

    test('Add more 2 lemons', () => {
      cart.addItem(new Fruit(fruitStorage.lemon), 1);
      expect(cart.getCartItems().length).toBe(2);
      expect(cart.getItem(fruitStorage.lemon)).not.toBeUndefined();
      expect(cart.getItem(fruitStorage.lemon).quantity).toBe(1);
    });

    test('Total price is 20000', () => {
      expect(cart.getTotal()).toBe(20000);
    });

    test('Remove apple in cart', () => {
      cart.removeItem(fruitStorage.apple.id);
      expect(cart.getCartItems().length).toBe(1);
      expect(cart.getItem(fruitStorage.apple)).toBeUndefined();
    });

    test('Total price is 2000', () => {
      expect(cart.getTotal()).toBe(2000);
    });
  });
});
