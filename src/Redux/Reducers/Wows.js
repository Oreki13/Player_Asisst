const initialState = {
  name: [],
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

    default:
      return state;
  }
};
export default Wows;
