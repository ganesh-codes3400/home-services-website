import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import AboutusPage from "./AboutusPage";
import ContactPage from "./ContactPage";
import Waterproofpage from "./Services/Waterproofpage";
import InteriorPage from "./Services/InterioerPage";
import Electricalpage from "./Services/ElectricalPage";
import TilesStonespage from "./Services/TailesandStonesPage";
import ScrollToTop from "./ScrollTop";
function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/waterproofing" element={<Waterproofpage />} />
        <Route path="/services/interior" element={<InteriorPage />} />
        <Route path="/services/electrical" element={<Electricalpage />} />
        <Route path="/services/tiles-stones" element={<TilesStonespage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;