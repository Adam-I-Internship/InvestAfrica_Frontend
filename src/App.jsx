import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndustryPage from "./pages/IndustryPage";
import Frontpage from "./homepage/frontpage";
import CountryPage from "./pages/CountryPage";
import IndustrySearch from "./pages/IndustrySearch";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/" element={<Frontpage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/industry-search" element={<IndustrySearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
