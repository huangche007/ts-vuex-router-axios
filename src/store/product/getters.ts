import { State } from "./state";
const getters = {
  products: (state: State) => state.products,
  product: (state: State) => state.product,
  cart: (state: State) => state.cart,
};

export default getters;
