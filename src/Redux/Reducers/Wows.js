import { stat } from "fs";

const initialState = {
  name: [],
  detail: [],
  ships: [],
  nameShips: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Wows = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NAME_WOWS_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_NAME_WOWS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_NAME_WOWS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        name: action.payload.data.data
      };

    case "GET_DETAIL_WOWS_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_DETAIL_WOWS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_DETAIL_WOWS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        detail: action.payload.data.data
      };
    case "GET_SHIPS_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_SHIPS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_SHIPS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        ships: action.payload.data.data
      };
    case "GET_SHIPS_NAME_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_SHIPS_NAME_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_SHIPS_NAME_FULFILLED":
      // state.nameShips.push(action.payload.data.data);
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        nameShips: action.payload.data.data
      };

    default:
      return state;
  }
};
export default Wows;
