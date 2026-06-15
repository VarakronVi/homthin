import { create } from "zustand";
import { Product } from "./data";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product) => {
    const existing = get().items.find((i) => i.product.id === product.id);
    if (existing) {
      set((state) => ({
        items: state.items.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        isOpen: true,
      }));
    } else {
      set((state) => ({
        items: [...state.items, { product, quantity: 1 }],
        isOpen: true,
      }));
    }
  },

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.id !== productId),
    })),

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    set((state) => ({
      items: state.items.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      ),
    }));
  },

  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
}));

type LangStore = {
  lang: "th" | "en";
  toggle: () => void;
};

export const useLangStore = create<LangStore>((set) => ({
  lang: "th",
  toggle: () => set((state) => ({ lang: state.lang === "th" ? "en" : "th" })),
}));
