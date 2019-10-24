const initialState = {
  name: [],
  detail: [],
  tanks: [],
  nameTanks: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Wot = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NAME_WOT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_NAME_WOT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_NAME_WOT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        name: action.payload.data.data
      };
    case "GET_DETAIL_WOT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_DETAIL_WOT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_DETAIL_WOT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        detail: action.payload.data.data
      };
    case "GET_TANKS_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_TANKS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_TANKS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        tanks: action.payload.data.data
      };
    case "GET_TANKS_NAME_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_TANKS_NAME_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_TANKS_NAME_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        nameTanks: action.payload.data.data
      };

    default:
      return state;
  }
};
export default Wot;
