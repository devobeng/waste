import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BinList from "./components/bins/BinList";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <BinList />
      </>
    </QueryClientProvider>
  );
}

export default App;
