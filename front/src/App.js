import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./LandingPage/Header";
import LBody from "./LandingPage/LBody"; // Landing Body
import CDiv from "./Calendar/CDiv";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LBody />}></Route>
          <Route path="/calendar" element={<CDiv />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
