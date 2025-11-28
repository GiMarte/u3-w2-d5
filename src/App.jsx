import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Meteo from "./components/Meteo";
import Error from "./components/Error";
import Forecast from "./components/Forecast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/meteo-pro" element={<Forecast />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
