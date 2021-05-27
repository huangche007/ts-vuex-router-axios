import instance from "../../plugins/axios";
import { AxiosResponse } from "axios";
import { ActionContext } from "vuex";
import router from "../../router";
import IAccount from "../../types/IAccount";
export default {
  login({ commit }: ActionContext<IAccount, any>) {
    const url = "https://randomuser.me/api/";
    instance.get(url).then((res: AxiosResponse) => {
      const item = res.data.results[0];
      const userData = {
        displayName: item.name.first,
        email: item.email,
        photoURL: item.picture.thumbnail,
        uid: item.login.uuid,
      };
      commit("setUserData", userData);
      router.push("/");
    });
  },
};
