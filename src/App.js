import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ContactPageCover from "./pages/ContactPageCover";
import About from "./pages/About";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/contact" element={<ContactPageCover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
