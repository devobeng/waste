import { useQuery } from "@tanstack/react-query";
import { fetchBinsByLocation } from "../api/SelectBinApis";
import axios from "axios";

export const useBins = (postcode: string, area: string) => {
  return useQuery({
    queryKey: ["bins", postcode, area],
    queryFn: () =>
      axios
        .get(
          `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
        )
        .then((res) => res.data),
  });
};
