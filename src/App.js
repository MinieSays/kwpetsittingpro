import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import DogWalking from "./Pages/DogWalking";
import Petsitting from "./Pages/Petsitting";
import Boarding from "./Pages/Boarding";
import Contact from "./Pages/Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogwalking" element={<DogWalking />} />
          <Route path="/petsitting" element={<Petsitting />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
