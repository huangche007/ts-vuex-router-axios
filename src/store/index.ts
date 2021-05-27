import { createStore } from "vuex";
import account from "./account";
import product from "./product";
const store = createStore({
  modules: {
    account,
    product,
  },
});

export default store;
