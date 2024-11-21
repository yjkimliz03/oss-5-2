import React, { useState } from "react";
import AddDataModal from "../AddDataModal";
export default function Create() {
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 창 상태 관리

  // 모달 열기/닫기 핸들러
  const handleClose = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleAddData = () => {
  };

  return (
    <div>
      <h2>데이터 추가</h2>
      {isModalOpen && <AddDataModal onClose={handleClose} onAddData={handleAddData} />}
    </div>
  );
}

