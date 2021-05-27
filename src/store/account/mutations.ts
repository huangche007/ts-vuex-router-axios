import { State } from "./state";
const mutations = {
  setUserData(state: State, val: Object) {
    state.userData = val;
  },
};

export default mutations;
