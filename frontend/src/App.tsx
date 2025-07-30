import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/homescreen/HomeScreen";
import NotFoundScreen from "./utilities/error boundary/PageNotFound";

function App() {
  return (
    <div className="app">
      {" "}
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
