const initialState = {
  name: [],
  detail: [],
  plane: [],
  namePlane: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Wowp = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NAME_WOWP_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_NAME_WOWP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_NAME_WOWP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        name: action.payload.data.data
      };
    case "GET_DETAIL_WOWP_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_DETAIL_WOWP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_DETAIL_WOWP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        detail: action.payload.data.data
      };
    case "GET_PLANES_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_PLANES_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PLANES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        Plane: action.payload.data.data
      };
    case "GET_PLANES_NAME_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_PLANES_NAME_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PLANES_NAME_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        namePlane: action.payload.data.data
      };

    default:
      return state;
  }
};
export default Wowp;
