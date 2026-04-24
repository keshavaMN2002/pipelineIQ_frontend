import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <BrowserRouter>
      {/* BACKGROUND IMAGE */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* DARK OVERLAY */}
        <div className="min-h-screen bg-black/70 backdrop-blur-sm">

          {/* NAVBAR */}
          <Navbar />

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;