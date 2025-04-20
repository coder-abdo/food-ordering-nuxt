import { defineStore } from "pinia";
import type { CartItemType, cartType } from "~/types";
export const useCart = defineStore(
  "cart",
  () => {
    const cart: cartType = reactive({
      products: [],
      totalItems: 0,
      totalPrice: 0,
    });
    function addTocart(product: CartItemType) {
      const existingItem = cart.products.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        cart.products.push(product);
      }
      cart.totalItems += product.quantity;
      cart.totalPrice += product.price * product.quantity;
    }
    function removeItem(id: string) {
      const index = cart.products.findIndex((item) => item.id === id);
      if (index !== -1) {
        const item = cart.products[index];
        cart.totalItems -= item.quantity;
        cart.totalPrice -= item.price * item.quantity;
        cart.products.splice(index, 1);
      }
    }
    function clearCart() {
      cart.products = [];
      cart.totalItems = 0;
      cart.totalPrice = 0;
    }
    return { cart, addTocart, removeItem, clearCart };
  },
  {
    persist: {
      storage: localStorage,
      pick: ["cart"],
    },
  },
);
