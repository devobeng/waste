import { useBinStore } from "../store/binStore";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CheckOutPage() {
  const { selectedBins } = useBinStore();
  const navigate = useNavigate();
  return (
    <div className="min-h-flex items-center justify-center bg-gray-100 p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 inline-flex items-center text-blue-600 hover:underline text-sm"
      >
        <FaArrowLeft className="mr-2" />
        Back Home
      </button>

      <h1 className="text-xl sm:text-2xl font-bold mb-4"> Checkout</h1>

      <div className="border border-gray-300 bg-white p-4 rounded-md shadow-sm space-y-3 text-sm sm:text-base">
        <p>
          <strong>Size:</strong> {selectedBins?.size} Yard
        </p>
        <p>
          <strong>Price:</strong> £ {selectedBins?.price_before_vat.toFixed(2)}
        </p>
        <p>
          <strong>Hire Period:</strong> {selectedBins?.hire_period_days} days
        </p>
      </div>
    </div>
  );
}

export default CheckOutPage;
