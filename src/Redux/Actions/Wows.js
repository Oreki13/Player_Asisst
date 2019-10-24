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

export const getDetailWows = (params, server) => {
  return {
    type: "GET_DETAIL_WOWS",
    payload: Axios.get(
      `https://api.worldofwarships.${server}/wows/account/info/?application_id=9a63143440b98808ed94a3832a32cf84&account_id=${params}
      `
    )
  };
};

export const getShips = (params, server) => {
  return {
    type: "GET_SHIPS",
    payload: Axios.get(
      `https://api.worldofwarships.${server}/wows/ships/stats/?application_id=9a63143440b98808ed94a3832a32cf84&account_id=${params}&language=en`
    )
  };
};
export const getShipsName = (server, ships) => {
  return {
    type: "GET_SHIPS_NAME",
    payload: Axios.get(
      `
      https://api.worldofwarships.${server}/wows/encyclopedia/ships/?application_id=9a63143440b98808ed94a3832a32cf84&ship_id=${ships}&language=en`
    )
  };
};

// https://api.worldofwarships.asia/wows/ships/stats/?application_id=9a63143440b98808ed94a3832a32cf84&account_id=2007916219&language=en

// https://api.worldofwarships.asia/wows/encyclopedia/ships/?application_id=9a63143440b98808ed94a3832a32cf84&ship_id=4274927600&language=en
