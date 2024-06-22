import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndustryPage from "./pages/IndustryPage";
import Frontpage from "./homepage/frontpage";
import CountryPage from "./pages/CountryPage";
import IndustrySearch from "./pages/IndustrySearch";
import Login from './pages/Login/Login';
import ScrollToTop from './ScrolltoTop';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './pages/Register/Register';
import CompanyRegistration from './pages/CompanyRegistration/CompanyRegistration';
import Navigation from "./homepage/navigation";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/" element={<Frontpage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/industry-search" element={<IndustrySearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/companyregister" element={<CompanyRegistration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
