import React from "react";
import { Route, Routes } from "react-router-dom"; // Route, Routes 임포트
import ShowList from "./components/Pages/List"; // List 컴포넌트
import DetailPage from "./components/Pages/Detail"; // Detail 컴포넌트
import UpdatePage from "./components/Pages/Update"; // Update 컴포넌트

function App() {
  return (
    <Routes>
      {/* 기본 라우팅: /와 /list는 ShowList를 렌더링 */}
      <Route path="/" element={<ShowList />} />
      <Route path="/list" element={<ShowList />} />

      {/* Detail 페이지: 동적 id 값을 받아서 해당 데이터 표시 */}
      <Route path="/detail/:id" element={<DetailPage />} />

      {/* Update 페이지: 동적 id 값을 받아서 해당 데이터 수정 */}
      <Route path="/update/:id" element={<UpdatePage />} />
    </Routes>
  );
}

export default App;
