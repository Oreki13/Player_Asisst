import Axios from "axios";
import qs from "qs";

export const getNameWowp = (params, server) => {
  // const param = qs.stringify({
  //   search: params,
  //   application_id: "9a63143440b98808ed94a3832a32cf84"
  // });
  // const param = {
  //   search: params,
  //   application_id: "9a63143440b98808ed94a3832a32cf84"
  // };
  // console.log("INI PARAMMNYA", param);

  return {
    type: "GET_NAME_WOWP",
    payload: Axios.get(
      `https://api.worldoftanks.${server}/wot/account/list/?application_id=9a63143440b98808ed94a3832a32cf84&limit=10&search=${params}`
    )
  };
};
