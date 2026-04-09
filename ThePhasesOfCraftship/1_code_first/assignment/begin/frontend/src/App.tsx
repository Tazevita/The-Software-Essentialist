import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import RegisterPage from "./pages/register";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
