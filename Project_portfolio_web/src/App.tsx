import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import ContactInformation from "./components/ContactingSection";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/contact_information" element={<ContactInformation />} />
        <Route path="/projects" element={<ProjectSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
