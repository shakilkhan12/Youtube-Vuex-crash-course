import { createStore } from "vuex";
import Names from "./modules/Names"
import About from "./modules/About"
export default createStore({
  modules: {
    Names,
    About
  }
});
