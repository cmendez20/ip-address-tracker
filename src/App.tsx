import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { InfoCard } from "./components/InfoCard";

function App() {
  return (
    <main className="grid gap-12 bg-blue-600 pt-10">
      <Header />
      <Search />
      <InfoCard />
    </main>
  );
}

export default App;
