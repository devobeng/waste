import axios from "axios";
const BASE_URL = "https://app.wewantwaste.co.uk/api";

export const fetchBinsByLocation = async (postcode: string, area: string) => {
  const { data } = await axios.get(`${BASE_URL}/skips/by-location`, {
    params: { postcode, area },
  });
  console.log(data);
  return data;
};
