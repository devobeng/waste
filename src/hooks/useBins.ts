import { useQuery } from "@tanstack/react-query";
import { fetchBinsByLocation } from "../api/SelectBinApis";

export const useBins = (postcode: string, area: string) => {
  return useQuery({
    queryKey: ["bins", postcode, area],
    queryFn: () => fetchBinsByLocation(postcode, area),
  });
};
