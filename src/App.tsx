import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
