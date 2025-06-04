import { create } from "zustand";
type BinType = {
  id: string;
  size: string;
  hire_period_days: number;
  price_before_vat: number;
};

type BinStore = {
  selectedBins: BinType | null;
  selectbin: (bin: BinType) => void;
};

export const useBinStore = create<BinStore>((set) => ({
  selectedBins: null,
  selectbin: (bin) => set({ selectedBins: bin }),
}));
