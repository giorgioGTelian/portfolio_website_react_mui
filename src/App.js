import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPageCover from "./pages/ContactPageCover";
import PortfolioPage from "./pages/PortfolioPage";
import AboutSideCover from "./pages/AboutSideCover";
import Pricing from "./pages/Pricing";
import NotFoundCover from "./pages/NotFoundCover";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutSideCover />} />
          <Route path="*" element={<NotFoundCover />} />
          <Route path="/contact" element={<ContactPageCover />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
