type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};
type OrderType = {
  id: string;
  userEmail: string;
  createdAt: string;
  products: CartItemType[];
  price: number;
  status: string;
  intent_id?: string;
};
type ProductType = {
  id: string;
  title: string;
  description?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type cartType = {
  products: CartItemType[];
  totalPrice: number;
  totalItems: number;
};
export type { Menu, CartItemType, OrderType, ProductType, cartType };
