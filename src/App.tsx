import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      <BrowserRouter>
        <NavBar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
