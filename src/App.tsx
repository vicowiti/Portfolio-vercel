import { BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      <BrowserRouter>
        <NavBar />
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
