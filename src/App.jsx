import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
