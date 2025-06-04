import BinList from "../components/bins/BinList";
import CheckoutNavigation from "../components/CheckoutNavigation";
import StepsNavigation from "../components/StepsNavigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 ">
      <StepsNavigation currentStep={2} />
      <CheckoutNavigation />
      <h1 className="text-2xl font-bold text-center mt-6">
        Choose Your Bin Size
      </h1>
      <p className="text-center mb-6 text-gray-400">
        {" "}
        Select the bin that suits your needs
      </p>
      <BinList />
    </div>
  );
};

export default Home;
