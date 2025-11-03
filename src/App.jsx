import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Editor from "./pages/Editor";
import Navbar from "./components/Navbar";

function App() {
   return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/editor/:templateId" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App
