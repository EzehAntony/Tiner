import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Message from "./pages/Message";
import Favorite from "./pages/Favorite";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/message" element={<Message />} />
          <Route path="/like" element={<Favorite />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
