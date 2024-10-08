import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import VideoPlayer from "./Pages/VideoPlayer";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/video" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
