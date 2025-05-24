import Check from "./pages/Check";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
export default function App() {
  return (
    <div className="app--container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
}
