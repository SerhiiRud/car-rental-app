import axios from "axios";
export const BASE_URL = "https://6474cb4d7de100807b1bc2dc.mockapi.io";
export let page = 1;
export const limit = 8;

export const fetchAPI = async (page) => {
  const data = await axios.get(`${BASE_URL}/cars`, {
    params: {
      page,
      limit: 8,
    },
  });
  return data;
};
