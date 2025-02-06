import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/character/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
