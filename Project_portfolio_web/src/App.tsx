import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import ContactInformation from "./components/ContactingSection";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/contact_information" element={<ContactInformation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
