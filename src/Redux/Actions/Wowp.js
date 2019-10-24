import Axios from "axios";
import qs from "qs";

// const param = qs.stringify({
//   search: params,
//   application_id: "9a63143440b98808ed94a3832a32cf84"
// });
// const param = {
//   search: params,
//   application_id: "9a63143440b98808ed94a3832a32cf84"
// };
// console.log("INI PARAMMNYA", param);

export const getNameWowp = (params, server) => {
  return {
    type: "GET_NAME_WOWP",
    payload: Axios.get(
      `https://api.worldofwarplanes.${server}/wowp/account/list/?application_id=9a63143440b98808ed94a3832a32cf84&limit=10&search=${params}`
    )
  };
};

export const getDetailWowp = (server, params) => {
  return {
    type: "GET_DETAIL_WOWP",
    payload: Axios.get(
      `https://api.worldofwarplanes.${server}/wowp/account/info2/?application_id=9a63143440b98808ed94a3832a32cf84&account_id=${params}`
    )
  };
};

export const getPlanes = (server, params) => {
  return {
    type: "GET_PLANES",
    payload: Axios.get(
      `https://api.worldofwarplanes.${server}/wowp/planes/stats/?application_id=9a63143440b98808ed94a3832a32cf84&account_id=${params}
      `
    )
  };
};
export const getPlanesName = (server, plane) => {
  return {
    type: "GET_PLANES_NAME",
    payload: Axios.get(
      `
      https://api.worldofwarplanes.${server}/wowp/encyclopedia/planeinfo/?application_id=9a63143440b98808ed94a3832a32cf84&plane_id=${plane}
`
    )
  };
};
