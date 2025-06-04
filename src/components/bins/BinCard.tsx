import React from "react";
import { useBinStore } from "../../store/binStore";
import dust from "../../assets/dust.jpg";

type Bin = {
  id: string;
  price_before_vat: number;
  hire_period_days: number;
  size: string;
};

type Props = {
  bin: Bin;
};
const BinCard: React.FC<Props> = ({ bin }) => {
  const { selectedBins, selectbin } = useBinStore();
  const isSelected = selectedBins?.id === bin.id;
  return (
    <div className="rounded-xl shadow-md relative">
      <img
        src={dust}
        onClick={() => selectbin(bin)}
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <h3 className="text-xl font-bold">
            {bin.hire_period_days} days hire period
          </h3>
        </div>
        <h3
          className="absolute top-[10px] right-[10px] bg-white px-4 py-2 
        rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
        >
          £ {bin.price_before_vat.toFixed(2)}
        </h3>

        <div className="border border-gray-300 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb:0">
            <span className="text-orange-700 font-bold">
              {bin.size} Yard Skip
            </span>
          </div>

          <button
            className={`h-[38px] px-4 py-2 rounded-md text-center text-sm text-white ${
              isSelected ? "bg-green-500" : "bg-blue-400 hover:bg-gray-700"
            }`}
          >
            {isSelected ? "Selected" : "Select this Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BinCard;
