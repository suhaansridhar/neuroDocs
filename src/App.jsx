import Check from "./pages/Check"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"
export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/check" element={<Check />} />
    </Routes>
  )
}