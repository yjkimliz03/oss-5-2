import React, { useState, useRef } from "react";
import AddDataForm from "./AddDataForm";

function AddDataModal({ onClose, onAddData }) {
  // useRef로 각 입력 필드 참조
  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleClose = async () => {
    // 유효성 검사: 각 입력 필드가 비어 있는지 확인
    if (!idRef.current.value) {
      alert("ID를 입력해 주세요.");
      idRef.current.focus();
      return; // 모달을 닫지 않음
    }
    if (!nameRef.current.value) {
      alert("이름을 입력해 주세요.");
      nameRef.current.focus();
      return; // 모달을 닫지 않음
    }
    if (!emailRef.current.value) {
      alert("이메일을 입력해 주세요.");
      emailRef.current.focus();
      return; // 모달을 닫지 않음
    }
    if (!phoneRef.current.value) {
      alert("전화번호를 입력해 주세요.");
      phoneRef.current.focus();
      return; // 모달을 닫지 않음
    }

    // 모든 필드가 채워졌을 경우, 데이터 추가 요청
    const newData = {
      id: idRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      const response = await fetch("https://6728fadd6d5fa4901b6bbadc.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        onAddData(); // 데이터 갱신
        alert("데이터가 추가되었습니다.");
      } else {
        alert("데이터 추가 실패");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }

    onClose(); // 모달 닫기
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h3>데이터 추가</h3>
        <AddDataForm 
          idRef={idRef} 
          nameRef={nameRef} 
          emailRef={emailRef} 
          phoneRef={phoneRef} 
        />
      </div>
    </div>
  );
}

export default AddDataModal;
