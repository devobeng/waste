import { useQuery } from "@tanstack/react-query";
import { fetchBinsByLocation } from "../api/SelectBinApis";

export const useSelectBins = (postCode: string, area: string) => {
  return useQuery({
    queryKey: ["skips", postCode, area],
    queryFn: () => fetchBinsByLocation(postCode, area),
  });
};
