import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndustryPage from "./pages/IndustryPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
