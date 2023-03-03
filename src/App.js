import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Regions from "./pages/Regions";

function App() {
  const client = new QueryClient();

  return (
    <div className="App ">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/details/:countryname" element={<Country />} />
            <Route path="/region/:regionname" element={<Regions />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
