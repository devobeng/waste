import { useNavigate } from "react-router-dom";
import { useBinStore } from "../store/binStore";

const CheckoutNavigation = () => {
  const { selectedBins } = useBinStore();
  const navigate = useNavigate();
  if (!selectedBins)
    return <p className="text-right text-sm px-4 py-3">No bin selected</p>;
  return (
    <div
      className="sticky bottom-0 z-50 border-t border-gray-300 px-4 py-3 flex flex-col
     md:flex-row md:justify-between md:items-center text-sm"
    >
      <div className="mb-2 md:mb-0 text-center md:text-left text-gray-700">
        <span className="font-semibold">{selectedBins.size} Yard Skip-</span>-£
        {selectedBins.price_before_vat}-{selectedBins.hire_period_days} days
        hire
      </div>
      <div className="flex justify-center md:justify-end">
        <button
          className="w-full md:w-auto bg-blue-500 px-4 py-2 hover:bg-blue-500 text-white text-sm rounded-md 
        transition-colors duration-200"
          onClick={() => navigate("/checkout")}
        >
          Continue to Checkout →
        </button>
      </div>
    </div>
  );
};

export default CheckoutNavigation;
