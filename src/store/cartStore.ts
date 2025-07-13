import { create } from "zustand";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cart: MenuItem[];
  addToCart: (item: MenuItem) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  getQuantity: (id: number) => number;
  totalQuantity: () => number;
  totalPrice: () => number;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (item) => {
    const { cart } = get();
    const existing = cart.find((it) => it.id === item.id);
    if (existing) {
      set({
        cart: cart.map((i) =>
          i.id === item.id ? { ...i, quantity: item.quantity + 1 } : i
        ),
      });
    } else {
      set({
        cart: [...cart, { ...item, quantity: 1 }],
      });
    }
  },
  increment: (id) => {
    const { cart } = get();
    set({
      cart: cart.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  },
  decrement: (id) => {
    const { cart } = get();
    const index = cart.findIndex((item) => item.id === id);
    const qty = cart[index].quantity - 1;
    console.log(qty, "Quantity");
    if (qty === 0) {
      set({
        cart: cart.filter((item) => id !== item.id),
      });
    } else {
      set({
        cart: cart.map((item) =>
          id === item.id ? { ...item, quantity: qty } : item
        ),
      });
    }
  },
  getQuantity: (id) => {
    const item = get().cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  },
  totalPrice: () => {
    const { cart } = get();
    const calPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return calPrice;
  },
  totalQuantity: () => {
    return 0;
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));
