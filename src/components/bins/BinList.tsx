import Spinner from "../shared/Spinner";
import type { BinType } from "../../utils/types";
import { useSelectBins } from "../../hooks/useSelectBins";
import BinCard from "./BinCard";
const BinList = () => {
  const { data, isLoading, error } = useSelectBins("NR32", "Lowestoft");
  console.log(isLoading);
  console.log(data);

  if (!isLoading)
    return (
      <div className="text-center text-gray-500">
        <Spinner />
      </div>
    );
  if (error) return <p className="text-center">Erro loading bins</p>;
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((bin: BinType) => (
            <BinCard key={bin.id} bin={bin} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BinList;
