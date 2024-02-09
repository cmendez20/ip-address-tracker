import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { InfoCard } from "./components/InfoCard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="grid gap-12 bg-blue-600 px-4 pt-10">
        <Header />
        <Search />
        <InfoCard />
      </main>
    </QueryClientProvider>
  );
}

export default App;
