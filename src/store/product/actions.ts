import instance from "../../plugins/axios";
import { AxiosResponse } from "axios";
import { ActionContext } from "vuex";
import { IProducts, IProduct } from "../../types/IProduct";
export default {
  getProducts({ commit }: ActionContext<IProducts<IProduct>, any>) {
    const url: string =
      "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    instance.get(url).then((res: AxiosResponse<IProducts<IProduct>>) => {
      commit("setProducts", res.data);
    });
  },
  productDetails(
    { commit }: ActionContext<IProduct, any>,
    id: string | number
  ) {
    const url: string =
      "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    instance.get(url, { params: { id: id } }).then((res: AxiosResponse) => {
      const item = res.data[0];
      commit("setProduct", item);
    });
  },

  addCart({ commit, getters }: ActionContext<IProduct, any>, payload: any) {
    const cart = getters.cart;
    const data = payload.product;
    data["quantity"] = payload.quantity;
    cart.push(data);
    commit("setCart", cart);
  },

  removeCart(
    { commit, getters }: ActionContext<IProduct, any>,
    id: string | number
  ) {
    const cart = [];
    if (id) {
      for (let index = 0; index < getters.cart.length; index++) {
        const element = getters.cart[index];
        if (element.id !== id) {
          cart.push(element);
        }
      }
    }
    commit("setCart", cart);
  },
};
