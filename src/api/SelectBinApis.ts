import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const fetchBinsByLocation = async (postcode: string, area: string) => {
  const { data } = await axios.get(`${BASE_URL}/skips/by-location`, {
    params: { postcode, area },
  });

  return data;
};
