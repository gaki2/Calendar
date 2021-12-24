import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./LandingPage/Header";
import LBody from "./LandingPage/LBody"; // Landing Body
import CDiv from "./Calendar/CDiv";
import TDiv from "./Timer/TDiv";
function App() {
  // 최상단에서 시간을 State 로 가지면, 시간이 1초 바뀔때마다 앱 전체가 리랜더링 되서 효율이 나쁨.
  const temp = [
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
    [
      { todo: "피아노 연주", checked: false },
      { todo: "책 읽기", checked: false },
    ],
  ];
  localStorage.setItem("2021.12", JSON.stringify(temp));
  return (
    <BrowserRouter>
      <>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LBody />}></Route>
          <Route path="/calendar" element={<CDiv />}></Route>
          <Route path="/timer" element={<TDiv />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
