import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MathQuiz from "./Math";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MathQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
