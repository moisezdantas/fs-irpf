import axios from "axios";

const URL_API = "http://localhost:8080";

export const fetchByIrrf = (person) => {
  return axios.post(`${URL_API}/irpf/calculate`, person);
};
