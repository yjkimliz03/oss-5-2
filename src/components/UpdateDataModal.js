import React, { useState, useEffect, useRef } from "react";
import UpdateDataForm from "./UpdateDataForm";

function UpdateDataModal({ item, onClose, onUpdateData }) {
  // 각 input 필드에 대한 ref 생성
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleClose = () => {
    // 유효성 검사: 각 입력 필드가 비어 있는지 확인
    if (!nameRef.current.value) {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();  // 유효성 실패한 필드로 포커스 이동
      return; // 이름이 비어 있으면 모달을 닫지 않음
    }

    if (!emailRef.current.value) {
      alert("이메일을 입력해주세요.");
      emailRef.current.focus();  // 이메일 필드로 포커스 이동
      return; // 이메일이 비어 있으면 모달을 닫지 않음
    }

    if (!phoneRef.current.value) {
      alert("전화번호를 입력해주세요.");
      phoneRef.current.focus();  // 전화번호 필드로 포커스 이동
      return; // 전화번호가 비어 있으면 모달을 닫지 않음
    }

    // 수정된 데이터 반영 후, 데이터를 다시 불러오기
    onUpdateData();

    // 모달 닫기
    onClose();
    alert("데이터가 수정되었습니다.");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h3>데이터 수정</h3>
        <UpdateDataForm 
          item={item} 
          onUpdateData={onUpdateData} 
          nameRef={nameRef} 
          emailRef={emailRef} 
          phoneRef={phoneRef} 
        />
      </div>
    </div>
  );
}

export default UpdateDataModal;
