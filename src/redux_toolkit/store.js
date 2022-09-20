import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket_slice";
import main from "./main_slice";
import history from "./history_slice";

export const store = configureStore({
  reducer: {
    basket,
    main,
    history,
  },
});
