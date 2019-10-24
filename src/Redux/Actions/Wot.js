import Axios from "axios";

export const getNameWot = (params, server) => {
  return {
    type: "GET_NAME_WOT",
    payload: Axios.get(
      `https://api.worldoftanks.${server}/wot/account/list/?application_id=9a63143440b98808ed94a3832a32cf84&limit=10&search=${params}`
    )
  };
};

export const getDetailWot = (params, server) => {
  return {
    type: "GET_DETAIL_WOT",
    payload: Axios.get(
      `https://api.worldoftanks.${server}/wot/account/info/?application_id=9a63143440b98808ed94a3832a32cf84&account_id=${params}`
    )
  };
};
export const getTanks = (params, server) => {
  return {
    type: "GET_TANKS",
    payload: Axios.get(
      `https://api.worldoftanks.${server}/wot/tanks/stats/?application_id=9a63143440b98808ed94a3832a32cf84&account_id=${params}`
    )
  };
};
export const getTanksName = (server, tanks) => {
  return {
    type: "GET_TANKS_NAME",
    payload: Axios.get(
      `
      https://api.worldoftanks.${server}/wot/encyclopedia/vehicles/?application_id=9a63143440b98808ed94a3832a32cf84&tank_id=${tanks}&language=en`
    )
  };
};
