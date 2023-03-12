import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import LandingPage from "./components/LandingPage/LandingPage";
import MainBhadaas from "./components/LandingPage/MainBhadaas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/bhadaas" element={<MainBhadaas />} />
    </Routes>
  );
}

export default App;
