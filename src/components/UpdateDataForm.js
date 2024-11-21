import React, { useState, useEffect } from "react";

function UpdateDataForm({ item, onUpdateData, nameRef, emailRef, phoneRef }) {
  const [updatedData, setUpdatedData] = useState({
    name: item.name,
    email: item.email,
    phone: item.phone,
  });

  const [modified, setModified] = useState(0);  // 수정 횟수 추가

  useEffect(() => {
    setUpdatedData({
      name: item.name,
      email: item.email,
      phone: item.phone,
    });
  }, [item]); // item이 변경되면 데이터를 업데이트

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));

    // 값이 바뀔 때마다 API로 PUT 요청을 보냄
    const updateData = async () => {
      try {
        const response = await fetch(`https://6728fadd6d5fa4901b6bbadc.mockapi.io/users/${item.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...updatedData, [name]: value }),
        });
        if (response.ok) {
          setModified((prev) => prev + 1);  // 수정 횟수 증가
        } else {
          alert("수정 실패");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    };

    updateData();
  };

  return (
    <form>
      <label>
        ID: <input type="text" name="id" value={item.id} readOnly />
      </label><br />
      <label>
        이름:
        <input
          type="text"
          name="name"
          value={updatedData.name}
          onChange={handleChange}
          ref={nameRef}  // useRef로 참조
        />
      </label><br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={updatedData.email}
          onChange={handleChange}
          ref={emailRef}  // useRef로 참조
        />
      </label><br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={updatedData.phone}
          onChange={handleChange}
          ref={phoneRef}  // useRef로 참조
        />
      </label><br />
      <p>수정 횟수: {modified}</p>
    </form>
  );
}

export default UpdateDataForm;
