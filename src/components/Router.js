// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import List from "./page/DataList.js";
// import Create from "./page/Create.js";
// import Detail from "./page/UpdateDataModal.js";
// import Update from "./page/UpdateDataForm.js";

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/list' element={<List />} />
//         {/* <Route path='/create' element={<Create />} /> */}
//         <Route path='/detail' element={<Detail />} />
//         <Route path='/update' element={<Update />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from "./Pages/List.js";
import Create from "./Pages/Create.js";
import Detail from "./Pages/Detail.js";
import Update from "./Pages/Update.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} /> {/* 기본 페이지를 /list 대신 /로 설정 */}
        <Route path="/list" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
