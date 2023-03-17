import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
