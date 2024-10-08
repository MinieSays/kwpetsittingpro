import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import DogWalking from "./Pages/DogWalking";
import Petsitting from "./Pages/Petsitting";
import Boarding from "./Pages/Boarding";
import Contact from "./Pages/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchener-dog-walker" element={<DogWalking />} />
          <Route path="/kitchener-petsitter" element={<Petsitting />} />
          <Route path="/kitchener-boarding" element={<Boarding />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
