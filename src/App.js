// import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes } from "react-router-dom";
import Register from "./Register"
import Login from "./Login"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
