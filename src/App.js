import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
