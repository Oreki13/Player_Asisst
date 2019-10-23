import Axios from "axios";

export const getNameWot = (params, server) => {
  return {
    type: "GET_NAME_WOT",
    payload: Axios.get(
      `https://api.worldoftanks.${server}/wot/account/list/?application_id=9a63143440b98808ed94a3832a32cf84&limit=10&search=${params}`
    )
  };
};
