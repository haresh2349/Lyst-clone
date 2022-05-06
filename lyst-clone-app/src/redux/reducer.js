import { CLEAR_FILTER, FILTER_DATA, GET_DATA, SORT_DATA } from "./actionTypes";

const initState = {
  data: [],
  filterData: [],
};

export const ProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    case SORT_DATA:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          if (payload === "l2h") {
            return Number(a.price) - Number(b.price);
          } else {
            return Number(b.price) - Number(a.price);
          }
        }),
      };
    case FILTER_DATA:
      return {
        ...state,
        filterData: state.data.filter((item) => {
          return +item.price < +payload;
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filterData: [],
      };
    default:
      return state;
  }
};
