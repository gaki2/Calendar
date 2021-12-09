import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./LandingPage/Header";
import LBody from "./LandingPage/LBody"; // Landing Body
import CBody from "./Calendar/CBody";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LBody />}></Route>
          <Route path="/calendar" element={<CBody />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
