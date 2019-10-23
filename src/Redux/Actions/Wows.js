import Axios from "axios";

export const getNameWows = (params, server) => {
  return {
    type: "GET_NAME_WOWS",
    payload: Axios.get(
      `https://api.worldofwarships.${server}/wows/account/list/?application_id=9a63143440b98808ed94a3832a32cf84&limit=10&search=${params}
      `
    )
  };
};
