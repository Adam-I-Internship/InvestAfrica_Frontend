import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndustryPage from "./pages/IndustryPage";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import IndustrySearch from "./pages/IndustrySearch";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/industry-search" element={<IndustrySearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
