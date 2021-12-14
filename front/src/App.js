import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./LandingPage/Header";
import LBody from "./LandingPage/LBody"; // Landing Body
import CDiv from "./Calendar/CDiv";

function App() {
  // 최상단에서 시간을 State 로 가지면, 시간이 1초 바뀔때마다 앱 전체가 리랜더링 되서 효율이 나쁨.
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
