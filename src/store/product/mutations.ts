import { State } from "./state";
const mutations = {
  setProducts(state: State, val: []) {
    state.products = val;
  },
  setProduct(state: State, val: Object) {
    state.product = val;
  },
  setCart(state: State, val: []) {
    state.cart = val;
  },
};

export default mutations;
